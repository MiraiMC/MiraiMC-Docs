# Cauldron

## 描述 <a id="description"></a>

有用户反馈，在使用 Uranium 等基于 Cauldron 下游服务端时出现报错。

经过测试，确认是由 Cauldron 内部逻辑导致 Mirai 的 Kotlin 库无法正常加载。其报错内容大致如下：

```text
[12:34:56 INFO]: [MiraiMC] 登录新的机器人账号: [private], 协议: ANDROID_PHONE
[12:34:56 WARN]: Exception in thread "Craft Scheduler Thread - 1"
[12:34:56 WARN]: org.apache.commons.lang.UnhandledException: Plugin MiraiMC v1.5 generated an exception while executing task 4
        at org.bukkit.craftbukkit.v1_7_R4.scheduler.CraftAsyncTask.run(CraftAsyncTask.java:57)
        at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
        at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
        at java.lang.Thread.run(Thread.java:748)
Caused by: java.lang.NoSuchMethodError: kotlin.jvm.internal.MutablePropertyReference1Impl.<init>(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V
        at io.ktor.client.HttpClientConfig.<clinit>(HttpClientConfig.kt)
        at io.ktor.client.HttpClientKt.HttpClient(HttpClient.kt:41)
        at net.mamoe.mirai.internal.MiraiImpl.<init>(MiraiImpl.kt:146)
        at net.mamoe.mirai.internal.MiraiImpl$INSTANCE.<init>(MiraiImpl.kt:72)
        at net.mamoe.mirai.internal.MiraiImpl$INSTANCE.<init>(MiraiImpl.kt)
        at net.mamoe.mirai.internal.MiraiImpl.<clinit>(MiraiImpl.kt)
        at java.lang.Class.forName0(Native Method)
        at java.lang.Class.forName(Class.java:264)
        at net.mamoe.mirai.FindMiraiInstanceKt.findMiraiInstance(findMiraiInstance.kt:18)
        at net.mamoe.mirai._MiraiInstance.get(IMirai.kt:347)
        at net.mamoe.mirai.Mirai.getInstance(IMirai.kt:43)
        at net.mamoe.mirai.BotFactory$INSTANCE.newBot(BotFactory.kt:119)
        at me.dreamvoid.miraimc.api.MiraiBot.privateBotLogin(MiraiBot.java:213)
        at me.dreamvoid.miraimc.api.MiraiBot.doBotLogin(MiraiBot.java:94)
        at me.dreamvoid.miraimc.bukkit.Commands$1.run(Commands.java:61)
        at org.bukkit.craftbukkit.v1_7_R4.scheduler.CraftTask.run(CraftTask.java:71)
        at org.bukkit.craftbukkit.v1_7_R4.scheduler.CraftAsyncTask.run(CraftAsyncTask.java:53)
        ... 3 more
```

在尝试[mamoe/mirai/#1126](https://github.com/mamoe/mirai/issues/1126)提供的解决方案后问题仍然存在，认定此问题无法被修复。

## 对用户的建议 <a id="howtosolve"></a>

* 更换其他服务端或抛弃1.7.10
* 使用 MiraiMC 1.6 以上版本，1.6以上版本将可以连接到外部 mirai console 程序
