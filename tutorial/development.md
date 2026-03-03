---
description: 此页介绍作为插件开发者如何使用 MiraiMC 的 API
---

# 基于本插件开发（插件开发者）

MiraiMC 提供了一个 Maven 开发模板帮助你开发一个新的插件，只需要[点击这里](https://github.com/MiraiMC/MiraiMC-Template)即可使用这个模板。

你也可以按照下面的步骤为你已开发的插件添加 MiraiMC 支持。

## 准备工作

在使用 MiraiMC 提供的任何 API 之前，你需要先将 MiraiMC 导入你的项目。

### 使用 Maven 导入库文件

要使用 Maven 导入你的项目，只需要将以下内容添加到项目 `pom.xml` 文件：

```markup
<dependency>
    <groupId>io.github.dreamvoid</groupId>
    <artifactId>MiraiMC-Integration</artifactId>
    <!--请确保版本为Github上的最新版本-->
    <version>1.9</version>
    <scope>provided</scope>
</dependency>
```

::: info
确保 `version` 为 GitHub 上的最新版本，使用较旧的版本可能不兼容最新版本的插件。
:::

添加完成后，你的 `pom.xml` 文件看起来像这样：

```markup
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>your.path</groupId>
    <artifactId>YourPluginName</artifactId>
    <version>YourPluginVersion</version>
    <repositories>
        <!-- This adds the Spigot Maven repository to the build -->
        <repository>
            <id>spigot-repo</id>
            <url>https://hub.spigotmc.org/nexus/content/repositories/snapshots/</url>
        </repository>
    </repositories>
    <dependencies>
        <!--This adds the Spigot API artifact to the build -->
        <dependency>
            <groupId>org.spigotmc</groupId>
            <artifactId>spigot-api</artifactId>
            <version>1.16.5-R0.1-SNAPSHOT</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>io.github.dreamvoid</groupId>
            <artifactId>MiraiMC-Integration</artifactId>
            <!--请确保版本为Github上的最新版本-->
            <version>1.9</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>
```

### 在 plugin.yml 声明依赖

之后，你需要在 `plugin.yml` 文件将 MiraiMC 添加到插件依赖：

#### 示例（依赖）

```yaml
name: MyPlugin
main: your.plugin.main
version: 1.0
author: that is you.
api-version: 1.16

# 如果你的插件的所有功能都需要基于 MiraiMC 实现，请使用 depend
depend: 
  - MiraiMC
```

#### 示例（软依赖）

```yaml
name: MyPlugin
main: your.plugin.main
version: 1.0
author: that is you.
api-version: 1.16

# 如果你的插件使用 MiraiMC 是为了润色插件功能并且可有可无，请使用 softdepend
softdepend: 
  - MiraiMC
```

## 编写代码

如果你不知道从何下手，可以先看看[开发模板](https://github.com/MiraiMC/MiraiMC-Template)，此开发模板使用了两个 EventHandler 来简单明了的调用 MiraiMC。

作为刚开始使用 MiraiMC 的开发者，我非常建议你从监听一个事件开始。监听一个 MiraiMC 事件就和监听一个 Bukkit 事件一样简单，如下代码就是当机器人接收到好友消息时向好友发送好友发送的信息。

> 有点绕口，对吗？你可以这样读：当机器人 接收到 好友消息 时 向好友 发送 好友发送的 消息。

```java
@EventHandler
public void onFriendMessageReceive(MiraiFriendMessageEvent e) {
    getLogger().info("接收到好友" + e.getSenderID() + "的消息: " + e.getMessage());
    MiraiBot.getBot(e.getBotID()).getFriend(e.getSenderID()).sendMessage("你发送了一条消息：" + e.getMessage());
}
```

#### 实例：

通过上面的监听器例子，你应该对编写相关代码有了初步的概念。

你现在可以尝试一下当机器人接收到好友消息或群消息时发送服务器在线人数。

如下代码即可实现这一功能：

```java
package com.example.demo;

import me.dreamvoid.miraimc.api.MiraiBot;
import me.dreamvoid.miraimc.bukkit.event.MiraiFriendMessageEvent;
import me.dreamvoid.miraimc.bukkit.event.MiraiGroupMessageEvent;
import org.bukkit.Bukkit;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.plugin.java.JavaPlugin;

public class CommandExample extends JavaPlugin implements Listener {
    @Override // 启用插件
    public void onEnable() {
        Bukkit.getPluginManager().registerEvents(this, this);
    }

    @EventHandler
    public void onFriendMessageReceive(MiraiFriendMessageEvent e){
        if(e.getMessage().equals("在线人数")) {
            MiraiBot.getBot(e.getBotID()).getFriend(e.getSenderID()).sendMessage("当前在线人数：" + Bukkit.getServer().getOnlinePlayers().size()+"人");
        }
    }

    @EventHandler
    public void onGroupMessageReceive(MiraiGroupMessageEvent e){
        if(e.getMessage().equals("在线人数")) {
            MiraiBot.getBot(e.getBotID()).getGroup(e.getGroupID()).sendMessage("当前在线人数：" + Bukkit.getServer().getOnlinePlayers().size()+"人");
        }
    }
}
```

## 之后……

如果你想要依赖来自 mirai 的事件，或是想要使用 mirai 的接口，都可以在 [Javadoc](https://jd.miraimc.dreamvoid.me/) 中找到所有可用的方法。