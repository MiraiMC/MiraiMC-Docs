---
description: 此页介绍了如何排查并解决使用 MiraiMC 机器人时出现的问题
---

# 常见问题

::: tip
如果你遇到的问题没有列出，可以考虑到[讨论区](https://github.com/DreamVoid/MiraiMC/discussions)讨论。如果你认为遇到了 Bug，可以前往 [Github Issue Tracker](https://github.com/DreamVoid/MiraiMC/issues) 反馈，但要注意遵守 issue 规则。
:::

## 无法正常登录或使用机器人！

请先查阅 MiraiForum 给出的解决方案：
* [无法登录的临时处理方案（MiraiForum）](https://mirai.mamoe.net/topic/223/)
* [常见问题 Q & A（MiraiForum）](https://mirai.mamoe.net/topic/71)

某些情况下，使用[扫码登录](../advanced/use-qrcode-login.md)可能可以解决 `登录失败 code=45/235/237/238` 的问题。

**请尽量避免使用新注册不久的账号、异地登录不久的账号等**，此类账号大概率会被风控，表现为无法登录或无法看见发出的消息。目前无有效解决方法，请尽量合规使用账号。~~大多数无法正常登录或使用机器人功能的问题都来源于 mirai，因此请优先向 mirai 寻求帮助。~~

如果你无论如何都无法正常使用，但

- 你可以在服务器上登录官方 QQ 程序；或者
- 你的服务端运行于完整的服务器环境中（即可以 SSH 连接的 Linux 系统或远程桌面连接的 Windows 系统，面板服务商不在此列）。

并且

- 你已在使用 OneBot；或者
- 你知道 OneBot 是什么；或者
- 你愿意学习使用 OneBot。

那么你可以尝试使用 [Overflow 核心](/advanced/use-overflow.md) 来使用 MiraiMC。

## 使用时控制台出现警告 `JCE cannot authenticate the provider BC`！

请阅读[常见问题 Q & A   （MiraiForum）](https://mirai.mamoe.net/topic/71)给出的解决方案，如无效或者你无法理解解决方案，请确保你使用的是未被修改过的 Java。我推荐使用 [Azul Zulu](http://www.azul.com/downloads/)。

另外，有报告称出现此问题的用户使用了 OpenJ9，如果你正在使用，可尝试更换 Hotspot 版本。

## 使用时控制台出现报错 `java.lang.AbstractMethodError: org.sqlite.Conn.isValid(I)Z`！

::: tip
此问题在 Java 11 及以上显示为 `java.lang.AbstractMethodError: Receiver class org.sqlite.Conn does not define or inherit an implementation of the resolved method 'abstract boolean isValid(int)' of interface java.sql.Connection.`
:::

你的服务端自带的 SQLite 驱动版本过旧，不支持 Java 6（没错就是 Java 6）的新特性，并且由于驱动内置于服务端，MiraiMC 无法通过加载外部依赖的方式更新 SQLite。

此问题通常出现在 1.8.8 及更旧版本，唯一的解决方案是更新你的服务端或 SQLite 驱动版本。

有关技术性细节，请访问 [StackOverflow 问答帖](https://stackoverflow.com/questions/32783706)。

## 我无法在 Bukkit+Forge 融合服务端使用！出现报错、无法正常加载插件。

请尽量避免使用 Bukkit+Forge 服务端，这类服务端通常会修改插件的工作方式以“兼容”模组或原版游戏的工作。在此类服务端上使用 MiraiMC 出现的问题将不会得到任何帮助，也永远不会对此类服务端提供兼容性支持。

**ArcLight 是一个例外**，如果你在 ArcLight 上遇到了一些问题，我可能会提供帮助，但不要指望能一直正常使用。

## 使用过程中是否需要外部程序的帮助？

通常，MiraiMC 高度适应 mirai 核心的工作方式，包括完全重写登录验证流程等，并提供纯命令操作方式以兼容无图形界面系统或面板环境，不会存在其他不完善插件的问题。在大多数情况下，使用 MiraiMC 无需外部程序的帮助。

但是，mirai 乃至整个机器人生态都在不断变化，有时你可能会需要[使用 Overflow](/advanced/use-overflow.md) 或第三方签名服务来满足你的需求，这种情况时有发生，因此最好做好使用外部程序的准备。

不建议在面板服务商中使用 MiraiMC，如果有能力，最好购买专用服务器。如果你愿意，可以通过我的推广链接购买[腾讯云游戏服](https://curl.qcloud.com/cEDwIx5u)或[轻量应用服务器](https://curl.qcloud.com/rLeNPU94)运行 Minecraft 服务端。出于显而易见的原因，MiraiMC 可以通过腾讯云内网直接使用 mirai 机器人。

## 我想使用 NapCat 等 OneBot 服务，有办法吗？

MiraiMC 本身不支持连接 OneBot，但你可以选择安装一个额外的插件 MiraiMCAddon-Overflow。有关此插件更多的信息，请参阅[使用 Overflow](/advanced/use-overflow.md)。

## 如何获取帮助？
如果你在使用 MiraiMC 时遇到了一个 Bug，或者有什么好的建议，请[在 GitHub 上提交一个 issue](https://github.com/DreamVoid/MiraiMC/issues)，我会尽可能的解决你的需求。

你也可以选择与其他人一起讨论 MiraiMC，只需[在 GitHub 讨论版发一个新讨论](https://github.com/DreamVoid/MiraiMC/discussions)，可能会得到热心网友的回复。