// config.js (合并后的配置)
const config = {
    baseUrl: "https://mrnfqrbl.dynv6.net:5555",
    infoUrl: "https://mrnfqrbl.dynv6.net:5555/api/cd/comfyui_info",
    maxReconnectAttempts: 4,
    reconnectDelayBase: 2,
    logLevels: ['info', 'debug', 'error'],
    defaultLogLevel: 'info',
    wsMessage: "ComfyUI 页面已上线!",
    repostWarningMessage: "请重新提交 ComfyUI 信息以启动任务",
    repostWarningLevel: 'warning',
    taskIdMessage: "发送任务 ID",
    messageOverlayTop: '20px',
    messageOverlayRight: '20px',
    toggleThroughButtonText: '穿透',
    toggleThroughButtonTextCancel: '取消穿透',
    connectionErrorText: '服务器连接失败，正在重试...'
};