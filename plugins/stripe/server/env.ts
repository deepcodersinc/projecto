import { IsNotEmpty, IsString } from "class-validator";
import { Environment } from "@server/env";
import environment from "@server/utils/environment";

class StripePluginEnvironment extends Environment {
  @IsNotEmpty()
  @IsString()
  public STRIPE_SECRET_KEY = environment.STRIPE_SECRET_KEY ?? "";

  @IsNotEmpty()
  @IsString()
  public STRIPE_WEBHOOK_SECRET = environment.STRIPE_WEBHOOK_SECRET ?? "";
}

export default new StripePluginEnvironment();
