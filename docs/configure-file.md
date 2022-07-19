# 🛠 配置文件

此页介绍了MiraiMC的配置文件节点，及如何正确的调整这些配置

对于编辑软件，我**推荐**使用 [Visual Studio Code](https://code.visualstudio.com)，我**不推荐**使用 Notepad++ **反华**软件

## 配置节点

#### `general`

**插件的主要配置**

* `allow-bStats`
  * 默认值：`true`
  * 描述：允许插件使用bStats记录插件使用情况
  * 建议值：`true`
* `check-update`
  * 默认值：`true`
  * 描述：允许插件从Github API检查最新版本
  * 建议值：`true`
* `disable-safe-warning-message`
  * 默认值：`false`
  * 描述：关闭启动插件时的非开源安全警告信息
  * 建议值：`true`/`false`
* `mirai-working-dir`
  * 默认值：`default`
  * 描述：Mirai的工作目录，有关Mirai机器人的数据都会存放在这个文件夹。如果此项为default，则目录为 `/plugins/MiraiMC/MiraiBot`
  * 建议值：如果你已在使用Mirai机器人，请将此项改为Mirai机器人的根目录
  * **ℹ提示：** 通常，Mirai机器人的根目录中包含`bots`、`config`、`plugins`等文件夹
* `add-properties`
  * 默认值：`true`
  * 描述：自动添加各类mirai必要参数
  * 建议值：`true`
* `mirai-core-version`
  * 默认值：`latest`
  * 描述： 使用的 mirai 核心版本，如果不存在将自动下载。设为`latest`则使用最新版本。
  * 建议值：`latest`
* `maven-repo-url`
  * 默认值：`http://maven.aliyun.com/nexus/content/groups/public/`
  * 描述： Maven 仓库地址。用于下载 Mirai 核心等依赖。
  * 建议值：国外用户可使用 maven 中央仓库地址`https://repo1.maven.org/maven2/`，国内用户可使用镜像站
* `enable-http-api`
  * 默认值：`false`
  * 描述：启用 HTTP API 功能，允许添加 HTTP API 模式下的机器人。
  * 建议值：如果需要通过 mirai-api-http 连接到 MCL 等第三方 mirai 机器人，请设为 `true`，否则保持为 `false`
  * **ℹ提示：** 要了解如何使用 HTTP API 功能，请[点击这里](/tutorial/http-api.md)
* `legacy-event-support`
  * 默认值：`false`
  * 描述：支持旧版（1.6-）事件
  * 建议值：如果使用了依赖旧版本MiraiMC的插件，请设为 `true` 以让这些插件正常工作，否则保持为 `false`

#### `bot`

**Mirai 机器人相关的配置**

* `disable-network-logs`
  * 默认值：`false`
  * 描述：关闭机器人的网络日志输出
  * 建议值：如果你需要登录很多机器人，且这些机器人没有登录问题，请将此项设为true避免刷屏。不建议开发者设为true。
* `disable-bot-logs`
  * 默认值：`false`
  * 描述：关闭机器人的日志
  * 建议值：如果你有很多机器人，请将此项设为true避免后台刷屏。不建议开发者设为true。
* `use-bukkit-logger` <br> **此部分控制 Mirai Core 是否使用 Minecraft 服务端日志系统**
  * `bot-logs`
    * 默认值：`true`
    * 描述：使用Bukkit的日志系统接管机器人日志
    * 建议值：`true`
  * `network-logs`
    * 默认值：`true`
    * 描述：使用Bukkit的日志系统接管机器网络人日志
    * 建议值：`true`
* `log-events`
  * 默认值：`true`
  * 描述：向后台输出机器人日志
  * 建议值：如果你有很多机器人并且这些机器人有很多的群和好友，请将此项设为`false`避免后台刷屏
  * **ℹ提示：** 与`bot.disable-bot-logs`不同，此项控制的是插件以事件监听的形式记录日志<br>此项将在之后的版本中移动到`general`父项
* `contact-cache` <br> **此部分控制 Mirai 机器人的缓存机制，不建议普通用户修改**
  * `enable-friend-list-cache`
    * 默认值：`false`
    * 描述：开启好友列表缓存
    * 建议值：`false`
  * `enable-group-member-list-cache`
    * 默认值：`false`
    * 描述：开启群成员列表缓存
    * 建议值：`false`
  * `save-interval-millis`
    * 默认值：`60000`
    * 描述：有更新时的保存时间间隔，单位为毫秒
    * 建议值：`60000`
  * **ℹ提示：** Mirai 在启动时会拉取全部好友列表和群成员列表。当账号拥有过多群时登录可能缓慢，开启列表缓存会大幅加速登录过程。
  * **⚠警告：** Mirai 自动根据事件更新列表，并在每次登录时与服务器校验缓存有效性，**但有时候可能发生意外情况导致列表没有同步。** 建议在测试环境使用缓存，而在正式环境关闭缓存（默认关闭缓存）。

#### `database`

**控制插件的数据库连接**

* `type`
  * 默认值：`sqlite`
  * 描述：控制插件应该连接到哪种类型的数据库。可用的类型：`sqlite`, `mysql`
* `mysql` <br> **此部分控制 MySQL 数据库的连接**
  * `address`
    * 描述：数据库地址
  * `username`
    * 描述：数据库用户名
  * `password`
    * 描述：用户名对应的密码
  * `pool` <br> **此部分控制 HikariCP 的相关配置**
    * **ℹ提示：** 通常情况下，默认值已经可以满足插件的使用
    * `connectionTimeout`
      * 默认值：`30000`
      * 描述：以毫秒为单位。连接超时时间，超过此时间则中断连接并抛出错误。最小值 250 ms。
    * `idleTimeout`
      * 默认值：`600000`
      * 描述：以毫秒为单位。一个连接闲置多久时才会断开。当 `minimumIdle` 小于 `maximumPoolSize` 才生效。最小值为 10000 ms，0表示禁用该功能。
    * `maxLifetime`
      * 默认值：`1800000`
      * 描述：以毫秒为单位。当一个连接存活了足够久，HikariCP 将会在它空闲时把它抛弃。最小值为 30000 ms，0 表示禁用该功能。
    * `maximumPoolSize`
      * 默认值：`15`
      * 描述：池中最多容纳多少连接（包括空闲的和在用的）。HikariCP 默认为 10，插件默认为 15。
    * `keepaliveTime`
      * 默认值：`0`
      * 描述：多久检查一次连接的活性。默认不启用，最小值为 30000 ms，必须小于`maxLifetime`。
    * `minimumIdle`
      * 默认值：`5`
      * 描述：池中至少要有多少空闲连接。当空闲连接小于 `minimumIdle`，总连接小于 `maximumPoolSize` 时，将新增连接，HikariCP 默认等于 `maximumPoolSize`。

#### `http-api`

**控制 HTTP API 连接信息**

* `url`
  * 描述：HTTP API 服务器连接地址
* `message-fetch` <br> **此部分控制插件向第三方 Mirai 机器人获取信息的配置**
  * `interval`
    * 默认值：`10`
    * 描述：获取机器人消息的间隔，单位：tick（0.05秒）
    * 建议值：`10`
  * `count`
    * 默认值：`10`
    * 描述：单次获取的消息数量，不要过大或过小。
    * 建议值：`10`
