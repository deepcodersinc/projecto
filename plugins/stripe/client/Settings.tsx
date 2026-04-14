import * as React from "react";
import { useTranslation } from "react-i18next";
import Scene from "~/components/Scene";
import Text from "~/components/Text";

export default function StripeSettings() {
  const { t } = useTranslation();
  return (
    <Scene title="Stripe">
      <Text as="p">
        {t(
          "Manage your team's subscription and billing through the Stripe customer portal."
        )}
      </Text>
    </Scene>
  );
}
