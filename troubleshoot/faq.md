---
description: 此页介绍了如何排查并解决使用机器人时出现的问题
---

# ❓ 常见问题

### 解决无法正常使用机器人

排查登录问题：[无法登录的临时处理方案（MiraiForum）](https://mirai.mamoe.net/topic/223/)

排查使用问题：[常见问题 Q & A（MiraiForum）](https://mirai.mamoe.net/topic/71)

以下是已知问题的解决方案，可供参考：

* [解决“Mirai 无法完成滑块验证……”的问题](https://github.com/DreamVoid/MiraiMC/issues/3)
* [登录时提示“当前版本过低，请升级到QQ最新版本。”](https://github.com/DreamVoid/MiraiMC/issues/17)

### 在服务端发送私聊/群消息，私聊/群里没收到

机器人账号被腾讯风控。解决办法就是挂两三天，中间不要发任何信息或者偶尔发一点正常聊天信息。

### 为什么会出现这样或那样的报错？

请尽量避免使用 Modded 服务端（如 CatServer、Mohist、Arclight之类的支持安装 mod 的 Bukkit+Forge 服务端），这类服务端通常会修改插件的工作方式以“兼容” mod 或原版游戏的工作。

你仍然可以尝试在 GitHub上开issue告诉我相关兼容性问题。但是大多数时候我可能只会加入兼容性报告中。

### 为什么我开的 Issue/Pull Request 被直接关闭了？

1. 你没有按照要求开 issue，我不会花费时间去理解不按模板提交的 issue；
2. 你的 issue 在之前已经有人提过了，为了处理效率不接受两个相同问题的 issue；
3. 你在 Gitee 等其他 Git 平台提交了 PR ，除了 GitHub 外，所有 Git 平台都是 GitHub 的镜像，都从 GitHub 拉取代码，因此不接受其他 Git 平台的 PR。

### 为什么出现报错“JCE cannot authenticate the provider BC”

请[阅读此链接给出的解决方案](https://mirai.mamoe.net/topic/71)，如无效或者你无法理解解决方案，请确保你使用的是未被修改过的Java。我推荐使用 [Azul Zulu](http://www.azul.com/downloads/)。

另外，有报告称出现此问题的用户使用了 OpenJ9，如果你正在使用，可尝试更换 Hotspot 版本。

### 我看其他同类机器人插件都说 Linux 不能登录，让我去下载这个或那个软件，我要怎么用你这个插件？

MiraiMC 已经完全重写登录验证流程，不会存在其他不完善插件的问题。当你登录机器人账号时，插件会引导你完成登录验证。请放心在 Linux 等无图形界面的系统环境使用。
