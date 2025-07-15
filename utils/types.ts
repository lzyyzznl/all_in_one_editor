// 文件系统相关类型定义 - 使用浏览器原生类型
export type FileSystemHandle = globalThis.FileSystemHandle;
export type FileSystemFileHandle = globalThis.FileSystemFileHandle;
export type FileSystemDirectoryHandle = globalThis.FileSystemDirectoryHandle;

// 文件树节点
export interface FileTreeNode {
	id: string;
	label: string;
	handle: FileSystemHandle;
	isDirectory: boolean;
	isFile: boolean;
	children?: FileTreeNode[];
}

// 文件内容
export interface FileContent {
	handle: FileSystemFileHandle;
	content: string;
	modified: boolean;
}

// 支持的文件类型
export type SupportedFileType =
	| ".md"
	| ".txt"
	| ".log"
	| ".json"
	| ".js"
	| ".ts"
	| ".html"
	| ".css"
	| ".vue";

// 文件浏览器状态
export interface FileBrowserState {
	rootHandle: FileSystemDirectoryHandle | null;
	selectedNode: FileTreeNode | null;
	openFiles: Map<string, FileContent>;
	currentFile: FileContent | null;
	isLoading: boolean;
}

// 通知类型
export interface NotificationOptions {
	title: string;
	message?: string;
	type?: "success" | "warning" | "error" | "info";
	duration?: number;
	position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

// 主题类型
export type Theme = "light" | "dark" | "auto";
