# Windows 98 主题图标文件

这个目录包含 Windows 98 主题所需的所有图标文件。

## 必需的图标文件

### 系统图标
- `start-button.svg` - 开始按钮图标 (16x16px) - **已创建SVG版本**
- `start-button.png` - 开始按钮图标PNG版本 (16x16px)
- `home-icon.png` - 首页图标 (16x16px)
- `blog-icon.png` - 博客图标 (16x16px)
- `about-icon.png` - 关于图标 (16x16px)
- `project-icon.png` - 项目图标 (16x16px)
- `friends-icon.png` - 友链图标 (16x16px)
- `message-icon.png` - 留言图标 (16x16px)

### 功能图标
- `document-icon.svg` - 文档图标 (14x14px) - **已创建SVG版本**
- `document-icon.png` - 文档图标PNG版本 (14x14px)
- `calendar-icon.png` - 日历图标 (16x16px)
- `user-icon.png` - 用户图标 (16x16px)
- `tag-icon.png` - 标签图标 (16x16px)
- `arrow-left.png` - 左箭头图标 (16x16px)
- `arrow-right.png` - 右箭头图标 (16x16px)

### 其他图标
- `author.png` - 作者头像 (80x80px)
- `favicon.ico` - 网站图标 (16x16px)

## 图标风格要求

所有图标都应该遵循 Windows 98 的经典设计风格：

1. **颜色**: 使用经典的 Windows 98 调色板
   - 主要颜色: #000080 (深蓝色)
   - 背景色: #c0c0c0 (浅灰色)
   - 高亮色: #ffffff (白色)
   - 阴影色: #808080 (深灰色)

2. **尺寸**: 
   - 系统图标: 16x16 像素
   - 功能图标: 14x14 或 16x16 像素
   - 头像: 80x80 像素

3. **风格**: 
   - 像素风格，保持清晰
   - 使用简单的几何形状
   - 避免过度复杂的细节

## 已创建的图标

### start-button.svg
- **设计特点**: 
  - 浅灰色按钮主体 (#c0c0c0)
  - 白色高光边框（左上角）
  - 深灰色阴影边框（右下角）
  - Windows标志（四个深蓝色小方块）
  - 中间装饰方块
  - 经典的Windows 98 3D按钮效果
- **用途**: 在任务栏和开始菜单中显示开始按钮图标
- **优势**: SVG格式，可缩放，文件小，清晰度高

### document-icon.svg
- **设计特点**: 
  - 白色文档主体
  - 深蓝色标题栏
  - 右上角折叠效果
  - 浅灰色内容区域
  - 黑色文字线条
  - 经典的Windows 98边框样式
- **用途**: 在任务栏和窗口标题栏中显示文档图标
- **优势**: SVG格式，可缩放，文件小，清晰度高

## 获取图标的方法

### 方法1: 使用在线图标生成器
- [Favicon.io](https://favicon.io/) - 生成网站图标
- [IconArchive](https://iconarchive.com/) - 下载免费图标

### 方法2: 使用图标字体
可以使用 Font Awesome 或其他图标字体库：

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

然后在模板中使用：
```html
<i class="fas fa-home"></i>
```

### 方法3: 创建自定义图标
使用图像编辑软件如 GIMP、Photoshop 或在线工具如 Canva 创建符合 Windows 98 风格的图标。

### 方法4: 使用SVG图标（推荐）
SVG图标具有以下优势：
- 可无限缩放而不失真
- 文件大小小
- 可以通过CSS修改颜色
- 支持动画效果

## 图标优化建议

1. **文件格式**: 优先使用 SVG 格式，PNG 作为备用
2. **文件大小**: SVG文件控制在 2KB 以内，PNG文件控制在 5KB 以内
3. **压缩**: 使用工具如 SVGO 压缩SVG，TinyPNG 压缩PNG
4. **备用方案**: 为每个图标提供 SVG 和 PNG 两个版本

## 示例图标代码

### 使用SVG图标（推荐）
```html
<!-- 开始按钮 -->
<img src="{{ "images/start-button.svg" | relURL }}" alt="Start" class="start-icon">

<!-- 文档图标 -->
<img src="{{ "images/document-icon.svg" | relURL }}" alt="Document" class="taskbar-icon">
```

### 使用PNG图标
```html
<!-- 开始按钮 -->
<img src="{{ "images/start-button.png" | relURL }}" alt="Start" class="start-icon">

<!-- 文档图标 -->
<img src="{{ "images/document-icon.png" | relURL }}" alt="Document" class="taskbar-icon">
```

### 使用Font Awesome图标
```html
<i class="fas fa-play window-icon"></i>
<i class="fas fa-file-alt window-icon"></i>
```

## 注意事项

- 确保所有图标文件都存在，否则页面会显示破损图片
- 图标文件名要与模板中的引用完全匹配
- SVG图标可以通过CSS变量修改颜色，实现主题切换
- 定期检查和更新图标，确保它们符合现代浏览器的要求
- 考虑为高分辨率显示器提供 2x 版本的PNG图标作为备用

## 下一步计划

我们将继续创建其他必需的图标文件，优先使用SVG格式：
1. ✅ start-button.svg - 已完成
2. ✅ document-icon.svg - 已完成
3. ⏳ home-icon.svg - 待创建
4. ⏳ blog-icon.svg - 待创建
5. ⏳ about-icon.svg - 待创建
6. ⏳ project-icon.svg - 待创建
7. ⏳ friends-icon.svg - 待创建
8. ⏳ message-icon.svg - 待创建
