import * as React from "react";
import { PluginManager, Hook } from "~/utils/PluginManager";
import Icon from "./Icon";
import Settings from "./Settings";

PluginManager.add([
  {
    type: Hook.Settings,
    value: {
      group: "Integrations",
      icon: Icon,
      component: Settings,
      name: "Stripe",
      path: "/settings/integrations/stripe",
    },
  },
]);
