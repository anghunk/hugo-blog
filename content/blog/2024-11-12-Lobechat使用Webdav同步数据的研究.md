---
slug: 247
title: Lobechat 使用 Webdav 同步数据的研究
date: 2024-11-12
categories:
  - 技术
tags:
  - Lobechat
  - Webdav
  - 数据同步
keywords: "Lobechat，Webdav，数据同步，Tampermonkey，开源，IndexedDB，云同步"
description: "本文探讨如何利用 Webdav 技术在社区版 Lobechat 中实现数据同步，提供详细的操作流程及代码实现，帮助用户 在无额外成本下完成数据的云端备份与恢复。"
---

## 1. 前言

Lobechat 就不做过多介绍了，一个开源、现代设计的人工智能聊天框架。

今天就来聊聊同步的问题，Lobechat 分为社区版和正式版，正式版需要付费订阅套餐，支持全局云同步，但是最便宜的套餐都要 4.9 刀，这让我 API 用户感觉有点难以接受。因为我需要的功能社区版都已经满足了，并不打算单独对云同步付费。

官方之前有通过 WebRTC 同步数据的方案，但在某个版本被废弃了，其实我也能理解，WebRTC 同步方案太过麻烦，且具有不稳定性，必须保证同时两台设备在线，而且实现原理让我感觉有一丝不安全性。

对 WebRTC 概念感兴趣的话可以看下官方的一篇文章：  
[https://github.com/lobehub/lobe-chat/discussions/368](https://github.com/lobehub/lobe-chat/discussions/368)

---

其实除了正式版之外，还有服务器自建数据库等同步方法，但都需要一定的成本和技术壁垒。

因此我在社区版的基础上构思了一个脚本，通过 Webdav 技术实现对话记录、设置等同步。此方案成本基本为零，坚果云免费额度都绰绰有余。

## 2. Webdav / Tampermonkey

但研究开始之前，有两个概念需要先了解一下。

1. Webdav

大多数网盘都支持通过 Webdav 技术进行同步，网盘会提供一套账号密码以及服务器地址，在前端调用 API，能够实现增删改查等操作。

2. 油猴管理器（Tampermonkey）

油猴管理器（Tampermonkey）无疑是浏览器插件的伟大创作之一，可以对网页注入 js 脚本来实现一些功能。

## 3. 那么如何获取 Lobechat 数据呢？

我研究过 Lobechat 源码，它数据都存放在本地的 IndexedDB 数据库中，这是浏览器的一个存储机制，可以存放大量的数据，显示则是以数据库的格式。

![](https://imgurl.zishu.me/2024/11/1731404378265.webp)

然后我先手动导出一份 json 格式的全局数据（社区版只支持手动导入导出文件），拿这份文件跟 IndexedDB 数据库 做对比，发现字段基本保持一致，数据格式也不用转，全部都在其中。

于是我翻阅了一下官方文档，有可以利用的 API，操作查询这些数据，下面是我的一些思路。

先声明我想要拿到的数据，这些都在上面的截图中存在。

```js
const dbName = "LOBE_CHAT_DB";
const storeNames = ["messages", "sessionGroups", "sessions", "topics", "users"];
```

```js
let request = indexedDB.open(dbName);

request.onsuccess = (event) => {
  const db = event.target.result;
  let state = {
    messages: [],
    sessionGroups: [],
    sessions: [],
    topics: [],
    users: [],
  };

  let pendingStores = 0;

  storeNames.forEach((storeName) => {
    if (db.objectStoreNames.contains(storeName)) {
      pendingStores++;
      const transaction = db.transaction([storeName], "readonly");
      const objectStore = transaction.objectStore(storeName);
      const allRecords = objectStore.getAll();

      allRecords.onsuccess = (event) => {
        const result = event.target.result;
        state[storeName] = result;
        pendingStores--;

        if (pendingStores === 0) {
          /*
          * 整个数据库的数据都可以导出
          * 在此回调执行操作
          */ 
        }
      };
    } 
  });
};
```

## 4. 操作流程原型

既然可以查询，就可以覆盖，同样也有 API 支持，所以我就构思了一下流程，利用 Webdav 的增删改查，把这些数据传到网盘中，然后在另一台设备拉取，最后优化一下整个流程，让它更加可视化。

大致原型如下：

![](https://imgurl.zishu.me/2024/11/1731404855162.webp)

点击同步到云端，会通过 Webdav API 在网盘创建一个指定的文件夹 `lobechat-webdav-backup`(我自己随意命名的)，在本地程序中生成一个 json 文件，IndexedDB 数据会被放入该文件中，然后通过 Webdav API 传输到网盘中。

点击下载到本地，会先通过 Webdav API 获取`lobechat-webdav-backup`下的 json 文件内容，利用 IndexedDB API 覆盖在浏览器 IndexedDB 数据库中。

---

在实际体验中，可以随时保存本地数据到云端，下载数据到本地，同步就很方便，使用了三天，没有出现同步出错的问题，脚本很稳定。

最终我把该脚本发布到 Greasyfork，可供大家直接使用，代码也已开源。

- 安装：[https://greasyfork.org/scripts/516358](https://greasyfork.org/scripts/516358)
- Github：[https://github.com/anghunk/UserScript](https://github.com/anghunk/UserScript)
