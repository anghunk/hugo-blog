---
slug: login-bitwarden-legacy-version
title: 如何登录旧版本 Bitwarden 密码管理器
date: 2025-07-25
categories: 
  - 技术
tags: 
  - Bitwarden
---

Bitwarden 是一款非常知名的密码管理器，其功能我就不赘述了，我来讲讲如何登录旧版本的 Bitwarden 密码管理器。

旧版官方安装包：[https://github.com/bitwarden/clients/releases/tag/browser-v2024.11.2](https://github.com/bitwarden/clients/releases/tag/browser-v2024.11.2)

肯定也有不少小伙伴喜欢旧版的 UI，因此就没有使用最新的版本，我用的是 `v2024.11.2`，也是官方更新 UI 前最后一个稳定版本，喜欢旧版的推荐用这个。

### 1.前景原因

但是在这个过程中，我发现了一个问题，那就是一旦退出登录旧版后，就再也登陆不上。

因为新版 Bitwarden 引入了一个输入二次密码的功能。也就是填写完主密码后，会给邮箱发一份邮件验证，填写验证后才可以登录。

而旧版是不存在二次密码这个功能的，因此正常输入主密码后接口会直接报错，从而导致无法登录。

我昨天就遇到了这个问题，研究了几个小时，还真让我找到一个办法，亲测非常简单好用，分享给大家。

核心就是获取新版的登录 cookie，手动插入到旧版中，就可以获取登录权限了。

---

话不多说，直接上教学。

首先下载一个新版 Bitwarden，这样扩展中就存在两个 Bitwarden 了。

![](https://imgurl.zishu.me/2025/07/1753405287321.webp)

### 2.复制 session 数据

正常登录新版 Bitwarden，然后在扩展中右键进入检查，点击 `console`，输入一条指令。

```js
// 读取 chrome.storage.session 数据
chrome.storage.session.get(null, data => console.log(JSON.stringify(data)));
```

这样你就可以获取到扩展的 `session` 数据，复制一下，替换到下面的数据，然后复制整段代码，打开旧版 Bitwarden，然后在扩展中右键进入检查，点击 `console`，粘贴即可。

```js
const sessionData = { key1: "value1", key2: "value2" }; // 替换为你的数据
// 存入 chrome.storage.session
chrome.storage.session.set(sessionData, () => {
  console.log("Session 数据导入成功！");
});
```

### 3.复制 local 数据

同理，local 数据也是一样的流程，在新版 Bitwarden 获取 local；

```js
// 读取 chrome.storage.local 数据
chrome.storage.local.get(null, data => console.log(JSON.stringify(data)));
```

到旧版粘贴数据进去；

```js
const localData = { key1: "value1", key2: "value2" }; // 替换为你的数据
// 存入 chrome.storage.local
chrome.storage.local.set(localData, () => {
  console.log("local 数据导入成功！");
});
```

### 4.重启扩展

大功告成，在旧版 Bitwarden 扩展右键刷新一下，这时候你会发现一个问题，那就是扩展图标为什么是灰色不可用状态，不用着急，回到浏览器扩展页面，点击 `刷新` 重启扩展即可。

又可以流畅使用 Bitwarden 了！

顺便吐槽一句，新版 Bitwarden 真是一团 shit.
