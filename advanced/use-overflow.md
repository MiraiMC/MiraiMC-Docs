---
description: 此页介绍如何为 MiraiMC 使用第三方 mirai 实现“Overflow”
---

# 使用 Overflow
[Overflow](https://github.com/MrXiaoM/Overflow) 是 mirai 的替代核心，MiraiMCAddon-Overflow 是一个 Overflow 的 Minecraft 服务端实现，能够让你在使用 MiraiMC 的同时使用 Overflow 连接到 OneBot 机器人。

MiraiMCAddon-Overflow 是一个单独的服务端插件，以 MiraiMC 作为依赖。当此插件安装时，MiraiMC 将不会加载原版 mirai 核心，而是将 mirai 相关的操作直接交给此插件处理。

MiraiMCAddon-Overflow 目前支持 Bukkit 和 Velocity 平台，暂时不支持其他平台。

## 下载
- 稳定版本
  - [Modrinth](https://modrinth.com/project/miraimcaddon-overflow/versions)
  - [GitHub 发布页](https://github.com/DreamVoid/MiraiMCAddon-Overflow/releases)

## 安装
将下载得到的 `MiraiMCAddon-Overflow.jar` 放入插件文件夹，然后**重新启动**服务器。

服务器启动后，前往插件的配置文件夹（通常是 `plugins/MiraiMCAddon-Overflow`）找到配置文件 `overflow.json` 调整插件的配置。配置文件的格式遵循 [Overflow 的格式](https://mirai.mrxiaom.top/docs/configuration.html)，所有插件支持的配置项的意义都与原始 Overflow 配置项的意义相同。

配置完成后，使用 `/overflow reload` 命令重新加载配置文件，使用 `/overflow connect` 命令连接到 OneBot 服务。

## 自动运行
插件不支持服务端启动后自动连接机器人，这是有意为之。

如果需要在服务端启动后自动连接机器人，可选择使用启动后执行命令的插件手动运行 `/overflow connect` 命令。

## 默认配置文件

```json
{
  "ws_host": "ws://127.0.0.1:3001",
  "reversed_ws_port": -1,
  "token": "",
  "no_platform": false,
  "use_cq_code": false,
  "retry-times": 5,
  "retry_wait_mills": 5000,
  "retry_rest_mills": 60000,
  "heartbeat_check_seconds": 60,
  "drop_events_before_connected": true
}
```