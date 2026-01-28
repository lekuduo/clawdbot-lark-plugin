# Clawdbot Lark Plugin

飞书 (Lark) 频道插件，让你的 AI 助手接入飞书。

[English](#english) | [中文](#中文)

---

## 中文

### 功能

- WebSocket 长连接，实时收发消息
- 私聊 + 群聊（@提及触发）
- 自动重试、消息去重、长消息分段
- 用户身份识别（ID + 名称）

### 快速开始

**1. 安装插件**

```bash
cd ~/.clawdbot/extensions
git clone https://github.com/user/clawdbot-lark-plugin.git lark
cd lark && npm install
```

**2. 配置飞书应用**

在[飞书开发者后台](https://open.feishu.cn/)：
- 创建企业应用，获取 App ID 和 App Secret
- 权限：`im:message` `im:message.receive_v1`
- 事件订阅：启用长连接，添加 `im.message.receive_v1`

**3. 配置 Clawdbot**

编辑 `~/.clawdbot/clawdbot.json`：

```json
{
  "channels": {
    "lark": {
      "enabled": true,
      "appId": "cli_xxxxxxxxxx",
      "appSecret": "xxxxxxxxxxxxxxxx",
      "dm": { "enabled": true, "policy": "open", "allowFrom": ["*"] },
      "groups": { "*": { "requireMention": true } }
    }
  }
}
```

**4. 重启 Gateway**

```bash
npx clawdbot gateway stop && npx clawdbot gateway
```

### 配置说明

| 配置项 | 说明 |
|--------|------|
| `appId` / `appSecret` | 飞书应用凭据 |
| `dm.policy` | 私聊策略：`open`（开放）/ `pairing`（配对）/ `closed`（关闭）|
| `dm.allowFrom` | 允许私聊的用户 ID 列表，`["*"]` 表示所有人 |
| `groups.*.requireMention` | 群聊是否需要 @机器人 |

### 故障排除

| 问题 | 解决 |
|------|------|
| 连接失败 | 检查 App ID/Secret，确认长连接已启用 |
| 收不到消息 | 确认已订阅 `im.message.receive_v1` 事件 |
| 查看日志 | `tail -f ~/.clawdbot/gateway.log` |

---

<a name="english"></a>
## English

### Features

- WebSocket long connection for real-time messaging
- DM + Group chat (with @mention trigger)
- Auto-retry, deduplication, long message splitting
- User identity (ID + name)

### Quick Start

**1. Install**

```bash
cd ~/.clawdbot/extensions
git clone https://github.com/user/clawdbot-lark-plugin.git lark
cd lark && npm install
```

**2. Configure Lark App**

In [Lark Developer Console](https://open.feishu.cn/):
- Create enterprise app, get App ID and App Secret
- Permissions: `im:message` `im:message.receive_v1`
- Events: Enable long connection, add `im.message.receive_v1`

**3. Configure Clawdbot**

Edit `~/.clawdbot/clawdbot.json`:

```json
{
  "channels": {
    "lark": {
      "enabled": true,
      "appId": "cli_xxxxxxxxxx",
      "appSecret": "xxxxxxxxxxxxxxxx",
      "dm": { "enabled": true, "policy": "open", "allowFrom": ["*"] },
      "groups": { "*": { "requireMention": true } }
    }
  }
}
```

**4. Restart Gateway**

```bash
npx clawdbot gateway stop && npx clawdbot gateway
```

### Configuration

| Option | Description |
|--------|-------------|
| `appId` / `appSecret` | Lark app credentials |
| `dm.policy` | DM policy: `open` / `pairing` / `closed` |
| `dm.allowFrom` | Allowed user IDs, `["*"]` for all |
| `groups.*.requireMention` | Require @mention in groups |

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Connection failed | Check App ID/Secret, ensure long connection enabled |
| No messages | Verify `im.message.receive_v1` event subscription |
| View logs | `tail -f ~/.clawdbot/gateway.log` |

---

## License

MIT
