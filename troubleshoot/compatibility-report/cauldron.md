# Cauldron

## 描述 <a id="description"></a>

有用户反馈，在使用Uranium等基于Cauldron下游服务端时出现`Caused by: java.lang.NoSuchMethodError: kotlin.jvm.internal.MutablePropertyReference1Impl.(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/String;I)V`问题。

经过测试，确认是由Cauldron内部逻辑导致Mirai的Kotlin库无法正常加载。

在尝试[mamoe/mirai/\#1126](https://github.com/mamoe/mirai/issues/1126)提供的解决方案后问题仍然存在，认定此问题无法被修复。

## 处理措施 <a id="measures"></a>

启动时检测到Cauldron相关文件向后台发送警告。

```java
if(new File("cauldron.yml").exists()){
    getLogger().severe("MiraiMC不支持Cauldron及任何下游服务端，请更换其他服务端使用！（如果你并没有在使用，请删除服务端根目录下的cauldron.yml文件）");
    getLogger().severe("请不要反馈你遇到的任何问题，作者将永远不会解决！");
}

```



