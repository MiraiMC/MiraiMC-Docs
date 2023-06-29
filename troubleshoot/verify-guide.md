---
description: 此页介绍了如何完成验证码和设备锁的验证
---

# 😶 登录验证指南

## 文字验证码 <a href="#word-captcha" id="word-captcha"></a>

> [!DANGER|style:flat]
> 由于文字验证码**大概率**会被腾讯拒绝，Mirai 核心及 MiraiMC 可能将在未来的版本中**移除**此验证。
> 在最新的 Mirai 核心版本中已移除此验证方式。

经过多次测试，使用文字验证码登录机器人时会直接拒绝登录（“当前版本过低，请升级到QQ最新版本。”），此部分指南已移除。

> [!NOTE|style:flat]
> 从 MiraiMC 1.5 版本起，新登录的机器人默认验证方式已变为滑块验证码。


## 滑块验证码 <a href="#slide-captcha" id="slide-captcha"></a>

当需要通过滑块验证码进行验证时，通常会看到诸如此类的警告消息（其中 10000 为机器人 QQ 号）：

```
[12:34:56 WARN]: [MiraiMC] 当前登录的QQ（10000）需要滑动验证码验证
[12:34:56 WARN]: [MiraiMC] 请使用手机QQ打开以下链接进行验证
[12:34:56 WARN]: [MiraiMC] https://this.is.link/part
[12:34:56 WARN]: [MiraiMC] 验证完成后，请输入指令 /miraiverify slidercaptcha 10000 <ticket>
[12:34:56 WARN]: [MiraiMC] 如需取消登录，请输入指令 /miraiverify slidercaptchacancel 10000
[12:34:56 WARN]: [MiraiMC] 如需帮助，请参阅: https://wiki.miraimc.dreamvoid.ml/troubleshoot/verify-guide#slide-captcha
```

请按照以下步骤进行验证：

1. 请使用 Chrome、Microsoft Edge 等浏览器**打开新标签页**，然后按下**F12**键打开**开发者工具**，并切换到“**网络**”（部分浏览器为“**Network**”）选项卡。如下图：
   ![Network](https://user-images.githubusercontent.com/45266046/135317286-0583fa9d-d62c-43d8-898a-d70b1be63201.png)
2. **打开插件给出的链接**（如例子中给出的链接是`https://this.is.link/part`）；
3. **完成验证**，之后找到`cap_union_new_verify`，转到“**预览**”（“**Preview**”），**ticket行**的**引号**内所有内容即为**ticket值**（如果找不到`cap_union_new_verify`，请检查是否勾选了“已阻止请求”）。如下图：
   ![ticket (1)](https://user-images.githubusercontent.com/45266046/135317326-7335c700-80b7-4bbd-a087-e4195d9d91b1.png)
4. **回到控制台**，运行命令`/miraiverify slidercaptcha 10000 <ticket>`，将相应的值填入，完成验证。（其中10000为机器人QQ号）

> [!TIP|style:flat]
> 如果你觉得打开开发者工具太麻烦，也可以使用这个：[https://txhelper.glitch.me/](https://txhelper.glitch.me)

## 设备锁 <a href="#device-locker" id="device-locker"></a>

> [!NOTE|style:flat]
> 从 Mirai 2.13.3 版本起，“设备锁”已变更为“设备验证”。

当需要验证设备锁时，通常会看到诸如此类的警告消息（其中 10000 为机器人 QQ 号）：

```
[12:34:56 WARN]: [MiraiMC] 当前登录的QQ（10000）需要设备锁验证
[12:34:56 WARN]: [MiraiMC] 请使用手机QQ打开以下链接进行验证
[12:34:56 WARN]: [MiraiMC] https://this.is.link/part
[12:34:56 WARN]: [MiraiMC] 验证完成后，请输入指令 /miraiverify unsafedevice 10000
[12:34:56 WARN]: [MiraiMC] 如需取消登录，请输入指令 /miraiverify unsafedevicecancel 10000
[12:34:56 WARN]: [MiraiMC] 如需帮助，请参阅: https://wiki.miraimc.dreamvoid.ml/troubleshoot/verify-guide#device-locker
```

请准备好所需的物品准备验证：

* 安装有 QQ 或 TIM 且已登录机器人账号的手机
* 能够与手机进行数据互传的电脑或其他设备

请按照以下步骤进行验证：

1. 将**验证链接**（上方例子为`https://this.is.link/part`）发送至**手机**，并使用**手机QQ**打开（也可以在电脑上生成二维码让手机扫描）；
2. 选择任意方式进行验证（例如下方的步骤将选择“QQ扫码验证”完成）；
3. 如果选择“**QQ扫码验证**”，则将生成的二维码发送至电脑或其他设备（**请勿**长按扫码或使用选取本地图片识别，这没有用处），如下图：
   ![QR](https://user-images.githubusercontent.com/45266046/135317365-fc2d05a3-2a0c-4d76-ae3b-75584be6622a.jpg)
4. 在手机上，使用QQ的扫一扫功能扫码，并确认验证；
5. 回到控制台，此时运行命令`/miraiverify unsafedevice 10000`，完成验证。（其中10000为机器人QQ号）

## 设备验证 <a href="#device-verify" id="device-verify"></a>

当需要进行设备验证时，通常会看到诸如此类的警告消息（其中10000为机器人QQ号）：

```
[12:34:56 WARN]: [MiraiMC] 当前登录的QQ（10000）需要完成设备验证
[12:34:56 WARN]: [MiraiMC] 短信验证方式可用
[12:34:56 WARN]: [MiraiMC] 其他验证方式可用
[12:34:56 WARN]: [MiraiMC] 如需使用短信验证方式，请输入指令 /miraiverify deviceverify 10000 sms
[12:34:56 WARN]: [MiraiMC] 如需使用其他验证方式，请输入指令 /miraiverify deviceverify 10000 fallback
[12:34:56 WARN]: [MiraiMC] 如需取消登录，请输入指令 /miraiverify cancel 10000
[12:34:56 WARN]: [MiraiMC] 如需帮助，请参阅: https://docs.miraimc.dreamvoid.me/troubleshoot/verify-guide#device-verify
```

* 如果选择短信验证方式，运行命令 `/miraiverify deviceverify 10000 sms`，稍后将会收到一条验证码短信，同时控制台将会出现以下警告消息：

   ```
   [12:34:56 WARN]: [MiraiMC] 当前登录的QQ（10000）将使用短信验证码验证
   [12:34:56 WARN]: [MiraiMC] 一条包含验证码的短信将会发送到地区代码为888、号码为1234567890的手机上
   [12:34:56 WARN]: [MiraiMC] 收到验证码后，请输入指令 /miraiverify deviceverify 10000 <验证码>
   [12:34:56 WARN]: [MiraiMC] 如需取消登录，请输入指令 /miraiverify cancel 10000，取消登录后需要等待至少1分钟才能重新登录
   ```

   收到包含验证码的短信后，运行命令 `/miraiverify deviceverify 10000 <验证码>`，完成验证。

* 如果选择其他验证方式，运行命令 `/miraiverify deviceverify 10000 fallback`，控制台将会出现以下警告信息：

   ```
   [12:34:56 WARN]: [MiraiMC] 当前登录的QQ（10000）将使用其他验证方式
   [12:34:56 WARN]: [MiraiMC] 请打开以下链接进行验证
   [12:34:56 WARN]: [MiraiMC] https://this.is.link/part
   [12:34:56 WARN]: [MiraiMC] 验证完成后，请输入指令 /miraiverify deviceverify 10000
   [12:34:56 WARN]: [MiraiMC] 如需取消登录，请输入指令 /miraiverify cancel 10000
   ```

   打开验证链接（上方例子为`https://this.is.link/part`），按照页面提示完成验证后，运行命令 `/miraiverify deviceverify 10000`，完成验证。
   