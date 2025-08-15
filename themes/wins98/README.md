# Windows 98 主题

这是一个为 Hugo 博客设计的 Windows 98 风格主题，完美还原了经典 Windows 98 操作系统的界面风格。

## 特性

- 🖥️ **经典 Windows 98 界面**: 完全还原 Windows 98 的视觉风格
- 🎨 **可拖拽窗口**: 支持窗口拖拽、最小化、最大化、关闭
- 🚀 **开始菜单**: 经典的开始菜单设计
- ⏰ **任务栏时钟**: 实时显示当前时间
- 📱 **响应式设计**: 支持各种设备尺寸
- 🎯 **完整功能**: 支持博客、文章、项目展示等所有功能

## 安装

1. 将主题文件夹复制到您的 Hugo 项目的 `themes/` 目录
2. 在 `config.toml` 或 `config.yml` 中设置主题：

```toml
theme = "wins98"
```

## 配置

### 基本配置

在您的 Hugo 配置文件中添加以下设置：

```yaml
params:
  title: "您的博客标题"
  description: "博客描述"
  logo: "头像图片URL"
  author:
    name: "您的姓名"
    email: "您的邮箱"
  favicon: "网站图标URL"
  buildDate: "2024-01-01"
  enableComments: true  # 是否启用评论
```

### 导航菜单

```yaml
params:
  socials:
    - name: "首页"
      link: "/"
    - name: "文章"
      link: "/blog/"
    - name: "关于"
      link: "/about/"
    - name: "项目"
      link: "/projects/"
```

## 使用方法

### 创建新文章

```bash
hugo new blog/my-new-post.md
```

### 文章前置信息

```markdown
---
title: "文章标题"
date: 2024-01-01
tags: ["标签1", "标签2"]
categories: ["分类"]
author: "作者名"
---
```

### 本地预览

```bash
hugo server -D
```

## 自定义

### 颜色主题

主题使用 CSS 变量，您可以轻松自定义颜色：

```css
:root {
    --wins98-bg: #008080;           /* 桌面背景色 */
    --wins98-window-bg: #c0c0c0;    /* 窗口背景色 */
    --wins98-titlebar-bg: #000080;  /* 标题栏背景色 */
    --wins98-button-bg: #c0c0c0;    /* 按钮背景色 */
    --wins98-text: #000000;         /* 文本颜色 */
    --wins98-link: #000080;         /* 链接颜色 */
}
```

### 添加自定义样式

在 `static/css/` 目录下创建自定义 CSS 文件，并在模板中引用。

## 文件结构

```
themes/wins98/
├── layouts/           # 模板文件
│   ├── _default/     # 默认模板
│   └── partials/     # 部分模板
├── static/           # 静态资源
│   ├── css/         # 样式文件
│   ├── js/          # JavaScript 文件
│   └── images/      # 图片资源
├── theme.toml        # 主题配置
└── README.md         # 说明文档
```

## 支持的页面类型

- 首页 (`/`)
- 文章列表 (`/blog/`)
- 单篇文章 (`/blog/post-name/`)
- 关于页面 (`/about/`)
- 项目页面 (`/projects/`)
- 标签页面 (`/tags/`)
- 搜索页面 (`/search/`)
- 留言页面 (`/message/`)

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个主题！

## 许可证

本项目采用 Apache-2.0 许可证。详见 [LICENSE](LICENSE) 文件。

## 致谢

- 灵感来源于经典的 Windows 98 操作系统
- 感谢 Hugo 静态网站生成器
- 感谢所有贡献者的支持

---

如果您喜欢这个主题，请给它一个 ⭐ 星标！
