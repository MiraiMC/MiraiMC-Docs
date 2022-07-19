---
description: 此页介绍了如何让 MiraiMC 与 Mirai Console Loader 通信 
---

# ⚽ 使用HTTP API
MiraiMC 支持通过HTTP API来连接到Mirai Console Loader（下称MCL），下面的内容将指导你正确使用HTTP API功能。

## 准备工作
在开始之前，你需要一个已登录机器人的、安装了 mirai-api-http 插件的MCL，如果你没有，那使用HTTP API功能没有什么意义。

然后，找到MiraiMC的配置文件`config.yml`，在`general`部分找到`enable-http-api`，将`false`改为`true`，然后输入`/miraimc reload`。

通常来说，如果MiraiMC和MCL在同一台服务器上，配置文件的改动就到此结束了。但如果你将MCL配置在不同的服务器上，则还需要改动`http-api.url`项为相应的地址。

## 连接到MCL
相信细心的你已经发现，配置文件中并没有填写连接密钥的地方，那是因为连接密钥已经作为指令的一部分了。

在控制台上参照以下格式输入命令：`/mirai login <机器人账号> <连接密钥> HTTPAPI`

没错，登录命令的“协议”部分只需要填上`HTTPAPI`，插件就会自动改为HTTP API模式与MCL通信。

要注意的是，MCL上必须有相应的机器人账号登录成功，否则插件无法正常与MCL通信。

和普通的登录命令一样，如果在MCL上有多个机器人想要连接，只需要执行多次登录命令即可。

## 存在的问题
同时兼容mirai核心的内置登录，和连接到MCL的外置登录，对于我一个人来说工作量还是很大的，加上插件对mirai核心的依赖较深，目前对MCL的支持还处在实验性阶段，1.7版本也只实现了聊天信息的事件广播。因此，你会遇到附属插件没反应、聊天发不出去等奇怪Bug。不过在未来，这些问题也会慢慢的得到解决。