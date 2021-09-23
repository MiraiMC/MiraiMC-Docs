---
description: 此页介绍了作为服主如何使用MiraiMC插件
---

# 安装并使用插件（服主）

## 安装插件

安装插件之前，请注意以下事项

* 始终从[Github](https://github.com/DreamVoid/MiraiMC/releases)、[Gitee](https://gitee.com/dreamvoid/MiraiMC/releases)等作者信任的位置下载插件，未知来源的插件可能会盗取你的账号
* 始终使用最新的版本，较旧的版本可能包含一些遗留的问题

{% hint style="info" %}
作者不对第三方来源的插件和非最新版的插件负责
{% endhint %}

请按照下面的步骤安装插件：

1. 下载插件，并将插件文件放入plugins文件夹
2. 下载基于MiraiMC开发的其他插件（如果有的话），并将这些插件放入plugins文件夹
3. 启动服务端（如果尚未启动）或使用诸如PlugMan的插件加载插件
4. 使用指令“**/mirai login &lt;账号&gt; &lt;密码&gt;**”登录你的机器人账号
5. 如果你同时使用了基于MiraiMC开发的插件，请在这些插件的配置文件中调整有关MiraiMC的配置
6. 享受优雅的QQ机器人服务！

## 配置插件

插件的配置文件存放在`/plugin/MiraiMC/config.yml`

MiraiMC 插件通常开箱即用且不需要额外的配置。但如果你已经在使用Mirai机器人，以下的一些配置可能会对你有帮助

#### `general.mirai-working-dir`

* 默认值：default
* 描述：Mirai的工作目录，有关Mirai机器人的数据都会存放在这个文件夹。如果此项为default，则目录为/plugins/MiraiMC/MiraiBot
* 建议值：如果你已在使用Mirai机器人，请将此项改为Mirai机器人的根目录

{% hint style="info" %}
通常，Mirai机器人的根目录中包含bots、config、plugins等文件夹
{% endhint %}

#### `bot.log-events`

* 默认值：default
* 描述：如果设为true，插件将向后台输出机器人的日志
* 建议值：如果你有很多机器人并且这些机器人有很多的群和好友，请将此项设为false避免后台刷屏

## 遇到登录问题？

请参考左侧目录的“**疑难解答**”部分，选择你遇到的问题



