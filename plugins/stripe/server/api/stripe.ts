import Router from "koa-router";
import auth from "@server/middlewares/authentication";
import { stripe } from "../index";

const router = new Router();

router.post("stripe.createCheckoutSession", auth(), async (ctx) => {
  const { priceId, successUrl, cancelUrl } = ctx.request.body;
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: successUrl,
    cancel_url: cancelUrl,
  });
  ctx.body = { data: { url: session.url } };
});

router.post("stripe.createPortalSession", auth(), async (ctx) => {
  const { customerId, returnUrl } = ctx.request.body;
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });
  ctx.body = { data: { url: session.url } };
});

export default router;
