import { defineConfig } from "wxt";
import UnoCSS from "unocss/vite";

export default defineConfig({
	// 使用 Vue 模块
	modules: ["@wxt-dev/module-vue"],

	runner: {
		// 启动配置
		startUrls: ["https://www.bing.com"], // 可选：启动时打开的页面
	},

	// 插件基本信息
	manifest: {
		name: "Markdown富文本编辑器",
		description: "基于Tiptap的现代化Markdown编辑器，支持文件管理和富文本编辑",
		version: "1.0.0",

		// 权限配置
		permissions: ["activeTab", "storage", "tabs"],

		// 操作按钮配置
		action: {
			default_title: "打开Markdown编辑器",
		},

		// 图标配置
		icons: {
			16: "icon/16.png",
			32: "icon/32.png",
			48: "icon/48.png",
			128: "icon/128.png",
		},
	},

	// 开发配置
	vite: () => ({
		plugins: [UnoCSS()] as any,
		define: {
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false,
		},
		css: {
			preprocessorOptions: {
				less: {
					// Less 选项
					javascriptEnabled: true,
					math: "parens-division",
				},
			},
		},
		resolve: {
			alias: {
				"@": "/src",
			},
		},
		optimizeDeps: {
			include: ["element-plus", "@element-plus/icons-vue"],
		},
	}),
});
