# Markdown富文本编辑器

基于Tiptap的现代化Markdown编辑器浏览器插件，支持文件管理和富文本编辑。

## 功能特性

### ✍️ 富文本编辑
- **Tiptap编辑器**: 基于ProseMirror的现代编辑器框架
- **双模式**: WYSIWYG和Markdown源码模式无缝切换
- **丰富格式**: 支持粗体、斜体、标题、列表、表格等
- **代码高亮**: 多语言代码块支持
- **图表支持**: 内置Mermaid图表渲染

### 📁 文件管理
- **文件树**: 可折叠的目录结构导航
- **多标签页**: 支持同时编辑多个文件
- **拖拽排序**: 标签页支持拖拽调整顺序
- **文件操作**: 创建、重命名、删除文件和文件夹
- **系统集成**: 一键在系统文件管理器中打开

### 🎨 界面设计
- **现代化UI**: 卡片式设计，渐变背景
- **响应式布局**: 适配不同屏幕尺寸
- **暗色主题**: 支持明暗主题切换
- **UnoCSS**: 原子化CSS样式系统

## 技术栈

- **Vue 3**: Composition API
- **TypeScript**: 类型安全
- **Tiptap**: 富文本编辑器
- **Element Plus**: UI组件库
- **UnoCSS**: 原子化CSS
- **File System Access API**: 本地文件操作

## 快速开始

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
pnpm dev
```

### 生产构建
```bash
pnpm build
```

### 打包发布
```bash
pnpm zip
```

## 安装使用

1. 在Chrome中启用开发者模式
2. 选择`.output/chrome-mv3`目录加载扩展
3. 点击工具栏图标打开编辑器
4. 选择本地文件夹开始编辑

## 系统要求

- Chrome 86+ (支持File System Access API)
- 现代浏览器环境

## 许可证

MIT License
