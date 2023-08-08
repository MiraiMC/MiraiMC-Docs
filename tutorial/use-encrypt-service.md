---
description: 此页介绍了如何使用第三方签名服务
---

# 🔑 使用第三方签名服务
MiraiMC 支持 mirai 2.15.0 的第三方签名服务新特性并内置了一个签名服务对接工具，下面的内容将指导你正确使用第三方签名服务功能。

## 准备工作
在开始之前，你需要准备一个受 MiraiMC 支持的第三方签名服务器，MiraiMC 支持的签名服务类型如下：
* [fuqiuluo/unidbg-fetch-qsign](https://github.com/fuqiuluo/unidbg-fetch-qsign)

然后，在配置文件中将 `bot.register-encrypt-service` 设为 `true`，然后重启服务器。

## 配置签名服务器
MiraiMC 再次启动后，会在插件目录释放签名服务配置文件 `services.json`，它看起来长得像这样：

```json
{
  "8.9.63": {
    "base_url": "http://127.0.0.1:8080",
    "type": "fuqiuluo/unidbg-fetch-qsign",
    "key": "114514"
  },
  "0.1.0": {
    "base_url": "http://127.0.0.1:8888",
    "type": "kiliokuara/magic-signer-guide",
    "server_identity_key": "vivo50",
    "authorization_key": "kfc"
  },
  "8.8.88": {
    "base_url": "http://127.0.0.1:80",
    "type": "TLV544Provider"
  }
}
```

其中，
* `8.9.63`、`0.1.0` 等是协议版本号，当机器人登录时会根据使用的协议版本选择对应的签名服务器。
* `base_url` 为签名服务器的地址，插件会通过这个地址与签名服务器通信。
* `type` 为签名服务器的类型，插件根据这个配置来判断签名服务器的类型，并调用对应的对接工具。MiraiMC 支持的签名服务类型已在上文列出。
* `key` 为签名服务器的密钥，仅当密钥验证通过时签名服务器才会进行签名。此项仅对 `fuqiuluo/unidbg-fetch-qsign` 有效。

修改配置文件后，无需重启服务器或重新加载插件。直接运行 `/mirai login` 命令即可使用签名服务器对数据进行签名。

## 注意事项
* **第三方签名服务可能会泄露 QQ 敏感信息，因此请注意对接公共服务的安全性或自行搭建签名服务。**
* 在大多数情况下，你还需要将 `bot.update-protocol-version` 设为 `true` 以更新协议版本，否则签名服务器可能需要支持对应的协议版本，在自行搭建服务器时通常会很麻烦。
* 如果你同时安装了其他开发者开发的签名服务对接插件，请不要使用 MiraiMC 内置的签名服务对接工具以避免冲突。
* 有关签名服务的更多注意事项，请前往 mirai 论坛查看[相关帖子](https://mirai.mamoe.net/topic/2373/%E5%85%B3%E4%BA%8E%E7%AD%BE%E5%90%8D%E6%9C%8D%E5%8A%A1)。