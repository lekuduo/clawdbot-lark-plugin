/**
 * Clawdbot Lark (飞书) Channel Plugin
 * 入口文件
 */

import type { ClawdbotPluginApi } from "clawdbot/plugin-sdk";
import { emptyPluginConfigSchema } from "clawdbot/plugin-sdk";

import { larkPlugin } from "./src/channel.js";
import { setLarkRuntime } from "./src/runtime.js";

const plugin = {
  id: "lark",
  name: "Lark (飞书)",
  description: "Lark/Feishu channel plugin with long connection support",
  configSchema: emptyPluginConfigSchema(),
  register(api: ClawdbotPluginApi) {
    setLarkRuntime(api.runtime);
    api.registerChannel({ plugin: larkPlugin });
  },
};

export default plugin;
