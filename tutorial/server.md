---
description: 此页介绍作为服主如何使用 MiraiMC 插件
---

# 安装并使用插件（服主）

感谢你选择使用 MiraiMC 为你的服务器提供支持。希望 MiraiMC 能让你的 Minecraft 体验更进一步。

## 下载

::: warning
* 始终从下方列出的可信来源下载插件，未知来源的插件可能会盗取你的账号！
* 始终使用最新的版本，较旧的版本可能包含一些遗留的问题。

**作者不对第三方来源的插件和非最新版的插件负责**
:::

* 稳定版本
  * [Modrinth](https://modrinth.com/plugin/miraimc/versions)
  * [GitHub 发布页](https://github.com/DreamVoid/MiraiMC/releases)
* 开发版本
  * [GitHub Actions CI](https://github.com/DreamVoid/MiraiMC/actions/workflows/maven.yml?query=is%3Asuccess)

## 安装插件

请按照下面的步骤安装插件：

1. 从可信来源下载插件，并将插件文件放入服务端目录的 `plugins` 文件夹。如果有其他基于 MiraiMC 开发的插件，也一并放入 `plugins` 文件夹。
2. 启动服务端（如果尚未启动）
3. 使用指令 `/mirai login <账号> <密码>` 登录你的机器人账号
4. 如果你同时使用了基于 MiraiMC 开发的插件，请在这些插件的配置文件中调整有关 MiraiMC 的配置
5. 享受优雅的 QQ 机器人服务！

## 配置插件

插件的配置文件存放在 `/plugin/MiraiMC/config.yml`。

MiraiMC 插件通常开箱即用且不需要额外的配置。但如果你已经在使用原版 mirai 机器人，以下的一些配置可能会对你有帮助。

#### `general.mirai-working-dir`

* 默认值：`default`
* 描述：Mirai 的工作目录，有关 Mirai 机器人的数据都会存放在这个文件夹。如果此项为 `default`，则目录为 `/plugins/MiraiMC/MiraiBot`
* 建议值：如果你已在使用 Mirai 机器人，请将此项改为 Mirai 机器人的根目录

::: tip
通常，mirai 机器人的根目录中包含 `bots`、`config`、`plugins` 等文件夹。
:::

#### `general.log-events`

* 默认值：`default`
* 描述：如果设为 `true`，插件将向后台输出机器人的日志
* 建议值：如果你有很多机器人并且这些机器人有很多的群和好友，请将此项设为 `false` 避免后台刷屏

## 遇到问题？

请参考左侧目录的“**疑难解答**”部分，选择你遇到的问题。

如果你遇到的问题没有列出，可以考虑到[讨论区](https://github.com/DreamVoid/MiraiMC/discussions)讨论。如果你认为遇到了 Bug，可以前往 [Github Issue Tracker](https://github.com/DreamVoid/MiraiMC/issues) 反馈，但要注意遵守 issue 规则。

## 你是开发者？

了解如何[基于本插件开发](development.md)，[Javadoc](https://jd.miraimc.dreamvoid.me/) 也有一定帮助。