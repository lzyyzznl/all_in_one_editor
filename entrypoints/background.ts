export default defineBackground(() => {
	// 监听插件图标点击事件
	chrome.action.onClicked.addListener((tab) => {
		// 打开文件浏览器页面
		chrome.tabs.create({
			url: chrome.runtime.getURL("file-browser.html"),
		});
	});

	console.log("Markdown编辑器后台脚本已启动");
});
