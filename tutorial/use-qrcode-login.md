---
description: 此页介绍了如何使用扫码登录
---

# 🏁 使用扫码登录
MiraiMC 支持 mirai 2.15.0 的扫码登录新特性，下面的内容将指导你正确使用扫码登录功能。

## 使用扫码登录
在控制台上输入以下指令：

```bash
/mirai login 机器人QQ QRCode ANDROID_WATCH/MACOS
```

即可自动使用扫码登录。其中，密码部分需要填写“QRCode”，协议部分需要填写“ANDROID_WATCH”或“MACOS”才可正常使用扫码登录。

在 Windows 下还支持调用系统图片查看器打开二维码图片，只需将 `general.auto-open-qrcode-file` 设为 `true`，但请注意**恶意程序可能会利用此功能执行任意代码**，原理是 MiraiMC 直接运行命令行 `explorer 图片路径`，因此请自行斟酌安全性。

## 注意事项
* 如果密码不为 `QRCode`，则不会进入扫码登录流程。如果协议不为 `ANDROID_WATCH` 或 `MACOS`，则 mirai 可能会报错。
* 扫码登录的机器人可以添加自动登录，mirai 会保存登录凭据以供重复登录。仅当凭据失效时才需要重新扫码登录。
* 在未来，mirai 可能会调整扫码登录功能，，MiraiMC 对此的支持可能会随时变化或失效。
