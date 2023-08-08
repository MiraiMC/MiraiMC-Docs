---
description: 此页介绍了如何排查并解决使用机器人时出现的问题
---

# ❓ 常见问题

## 我无法正常登录或使用机器人

请先查阅 MiraiForum 给出的解决方案：
* [无法登录的临时处理方案（MiraiForum）](https://mirai.mamoe.net/topic/223/)
* [常见问题 Q & A（MiraiForum）](https://mirai.mamoe.net/topic/71)

某些情况下，使用[扫码登录](../tutorial/use-qrcode-login.md)或使用[第三方签名服务](../tutorial/use-encrypt-service.md)可能可以解决 `登录失败 code=45/235/237/238` 的问题。

**请尽量避免使用新注册不久的账号、异地登录不久的账号等**，此类账号大概率会被风控，表现为无法登录或无法看见发出的消息。目前无有效解决方法，请尽量合规使用账号。

大多数无法正常登录或使用机器人功能的问题都来源于 mirai，因此请优先向 mirai 寻求帮助。

## 使用时出现警告 `JCE cannot authenticate the provider BC`

请[阅读此链接给出的解决方案](https://mirai.mamoe.net/topic/71)，如无效或者你无法理解解决方案，请确保你使用的是未被修改过的 Java。我推荐使用 [Azul Zulu](http://www.azul.com/downloads/)。

另外，有报告称出现此问题的用户使用了 OpenJ9，如果你正在使用，可尝试更换 Hotspot 版本。

## 在 Bukkit+Forge 服务端使用时出现报错、无法正常加载插件

请尽量避免使用 Bukkit+Forge 服务端（如 CatServer），这类服务端通常会修改插件的工作方式以“兼容”模组或原版游戏的工作。

在此类服务端上使用 MiraiMC 出现的问题将不会得到任何帮助，也永远不会对此类服务端提供兼容性支持。

**ArcLight 是一个例外**，如果你在 ArcLight 上遇到了一些问题，我可能会提供帮助。

## 使用 MiraiMC 是否需要外部程序的帮助

通常，MiraiMC 高度适应 mirai 核心的工作方式，包括完全重写登录验证流程等，并提供纯命令行操作方式以兼容无图形界面系统或面板环境，不会存在其他不完善插件的问题。在大多数情况下，使用 MiraiMC 无需外部程序的帮助。

但有时，你可能会需要 mirai-http-api 或第三方签名服务来满足你的特殊需求，这种情况时有发生，因此最好做好使用外部程序的准备。

## 如何获取帮助
如果你在使用 MiraiMC 时遇到了一个 Bug，或者有什么好的建议，请[在 GitHub 上提交一个 issue](https://github.com/DreamVoid/MiraiMC/issues)，我会尽可能的解决你的需求。

你也可以选择与其他人一起讨论 MiraiMC，只需[在 GitHub 讨论版发一个新讨论](https://github.com/DreamVoid/MiraiMC/discussions)，可能会得到热心网友的回复。