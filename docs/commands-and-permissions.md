# 命令和权限

## 命令

| **命令** | **描述** | **权限** |
| :--- | :--- | :--- |
| /mirai | MiraiMC 机器人主命令 | miraimc.command.mirai |
| /mirai login &lt;账号&gt; &lt;密码&gt; \[协议\] | 登录一个机器人（可多次执行此命令以登录多个机器人） | miraimc.command.mirai.login |
| /mirai logout &lt;账号&gt; | 退出并关闭一个机器人 | miraimc.command.mirai.logout |
| /mirai list | 列出当前在线的机器人 | miraimc.command.mirai.list |
| /mirai sendfriendmessage &lt;账号&gt; &lt;好友&gt; &lt;消息&gt; | 向指定好友发送消息 | miraimc.command.mirai.sendfriendmessage |
| /mirai sendfriendnudge &lt;账号&gt; &lt;好友&gt; | 向指定好友发送戳一戳 | miraimc.command.mirai.sendfriendnudge |
| /mirai sendfgroupmessage &lt;账号&gt; &lt;群号&gt; &lt;消息&gt; | 向指定群发送消息 | miraimc.command.mirai.sendgroupmessage |
| /mirai checkonline &lt;账号&gt; | 检查指定机器人是否在线 | miraimc.command.mirai.checkonline |
| /miraimc | MiraiMC 插件主命令 | miraimc.command.miraimc |
| /miraimc bind add &lt;玩家名&gt;  | 为玩家和QQ号添加绑定	 | miraimc.command.miraimc.bind |
| /miraimc bind getplayer &lt;玩家名&gt;	 | 获取指定玩家名绑定的QQ号	 | miraimc.command.miraimc.bind |
| /miraimc bind getqq &lt;QQ号&gt;	 | 获取指定QQ号绑定的玩家名	 | miraimc.command.miraimc.bind |
| /miraimc bind removeplayer &lt;玩家名&gt;	 | 删除一个玩家的绑定	 | miraimc.command.miraimc.bind |
| /miraimc bind removeqq &lt;QQ号&gt;	 | 删除一个QQ号的绑定 | miraimc.command.miraimc.bind |
| /miraimc reload | 重新加载配置文件 | miraimc.command.miraimc.reload |

## 权限

| **权限节点** | **描述** | **默认** |
| :--- | :--- | :--- |
| miraimc.command.mirai | 允许使用 /mirai | OP |
| miraimc.command.mirai.\* | 允许使用 /mirai 的所有子命令 | OP |
| miraimc.command.mirai.login | 允许使用 /mirai login | OP |
| miraimc.command.mirai.logout | 允许使用 /mirai logout | OP |
| miraimc.command.mirai.list | 允许使用 /mirai list | OP |
| miraimc.command.mirai.sendfriendmessage | 允许使用 /mirai sendfriendmessage | OP |
| miraimc.command.mirai.sendfriendnudge | 允许使用 /mirai sendfriendnudge | OP |
| miraimc.command.mirai.sendgroupmessage | 允许使用 /mirai sendgroupmessage | OP |
| miraimc.command.mirai.sendgroupnudge | 允许使用 /mirai sendgroupnudge | OP |
| miraimc.command.mirai.checkonline | 允许使用 /mirai checkonline | OP |
| miraimc.command.miraimc | 允许使用 /miraimc | OP |
| miraimc.command.miraimc.\* | 允许使用 /miraimc 的所有子命令 | OP |
| miraimc.command.miraimc.bind	 | 允许使用 /miraimc bind 及下属子命令	 | OP |
| miraimc.command.miraimc.reload | 允许使用 /miraimc reload | OP |

