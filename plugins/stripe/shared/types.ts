export type StripePriceId = string;

export type StripeSubscriptionStatus =
  | "active"
  | "past_due"
  | "canceled"
  | "incomplete"
  | "trialing";

export type StripeCheckoutResponse = {
  url: string;
};
