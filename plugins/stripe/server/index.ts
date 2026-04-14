import Stripe from "stripe";
import { PluginManager, Hook } from "@server/utils/PluginManager";
import env from "./env";
import router from "./api/stripe";
import webhook from "./api/webhook";

const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

PluginManager.add([
  {
    type: Hook.API,
    value: router,
  },
  {
    type: Hook.API,
    value: webhook,
  },
]);

export { stripe };
