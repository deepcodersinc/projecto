import { PluginManager, Hook } from "@server/utils/PluginManager";
import config from "../plugin.json";
import { unfurl } from "./unfurl";

PluginManager.add({
  ...config,
  type: Hook.Unfurler,
  value: { unfurl },
});
