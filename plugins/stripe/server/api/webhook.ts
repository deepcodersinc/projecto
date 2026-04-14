import Router from "koa-router";
import { stripe } from "../index";
import env from "../env";

const router = new Router();

router.post("stripe.webhook", async (ctx) => {
  const signature = ctx.request.headers["stripe-signature"] as string;
  const event = stripe.webhooks.constructEvent(
    ctx.request.rawBody,
    signature,
    env.STRIPE_WEBHOOK_SECRET
  );

  switch (event.type) {
    case "checkout.session.completed":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      // handled by async worker
      break;
    default:
      break;
  }

  ctx.body = { received: true };
});

export default router;
