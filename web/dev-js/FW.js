
    let ws;
    let baseurl ="https://mrnfqrbl.dynv6.net:5555";
    let info_url = "https://mrnfqrbl.dynv6.net:5555/api/cd/comfyui_info";

    let reconnectAttempts = 0;
    const maxReconnectAttempts = 4;
    const reconnectDelayBase = 2; // 指数退避的基数
    let wsUrl;
    let messageOverlay;
    let connectionErrorElement;
    let 任务id; // 保存任务 ID
    let 请求体; // 保存请求体，用于重新发送

    const logLevels = ['info', 'debug', 'error'];
    let currentLogLevel = 'info'; // 默认级别



    function connectWebSocket() {
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
    console.log("WebSocket 连接成功!");
    reconnectAttempts = 0; // 重置重连次数
    connectionErrorElement.style.display = 'none'; // 隐藏错误消息
    logMessage("ComfyUI 页面已上线!", 'info');

    ws.send(JSON.stringify({"msessage": "ComfyUI 页面已上线", "level": "info"}))
    // 发送任务 ID
    sendTaskId();
};

    ws.onmessage = (event) => {
    try {
    const data = JSON.parse(event.data);
    const message = data.message;
    const level = data.level || 'info'; // 默认级别为 info
    logMessage(message, level);

    // 检查是否需要重新发送 POST 请求
    if (message.includes("请重新提交 ComfyUI 信息以启动任务") && level === 'warning') {
    console.warn("收到服务器警告，重新发送 POST 请求...");
    重新发送Post请求();
}
} catch (e) {
    logMessage(event.data, 'info'); // 无法解析 JSON，按普通消息处理
}
};

    ws.onclose = () => {
    console.log("WebSocket 连接关闭");
    reconnect();
};

    ws.onerror = (error) => {
    console.error("WebSocket 发生错误:", error);
    reconnect();
};
}

    function reconnect() {
    if (reconnectAttempts < maxReconnectAttempts) {
    reconnectAttempts++;
    const delay = reconnectDelayBase ** reconnectAttempts; // 指数退避
    console.log(`尝试重新连接 (第 ${reconnectAttempts} 次) 在 ${delay} 秒后...`);
    connectionErrorElement.style.display = 'block'; // 显示错误消息
    setTimeout(() => {
    connectWebSocket();
}, delay * 1000);
} else {
    console.error("达到最大重连次数，放弃重连");
    connectionErrorElement.textContent = '服务器连接失败，请检查服务器状态。';
    connectionErrorElement.classList.add('error'); // 添加错误样式
    connectionErrorElement.style.display = 'block';
}
}

    function logMessage(message, level) {
    if (logLevels.indexOf(level) < logLevels.indexOf(currentLogLevel)) {
    return; // 级别低于当前过滤级别，不显示
}

    const messageLine = document.createElement('div');
    messageLine.classList.add('messageLine');
    messageLine.textContent = `[${level.toUpperCase()}] ${message}`;

    if (level === 'error') {
    messageLine.classList.add('error');
}

    messageOverlay.appendChild(messageLine);
    messageOverlay.scrollTop = messageOverlay.scrollHeight;
}

    function sendTaskId() {
    if (ws && ws.readyState === WebSocket.OPEN && 任务id) {
    ws.send(JSON.stringify({ 任务id: 任务id, message: "发送任务 ID", level: 'info' }));
    console.log("已发送任务 ID:", 任务id);
} else {
    console.warn("WebSocket 未连接或任务 ID 未定义，无法发送任务 ID");
}
}

    async function 重新发送Post请求() {

    try {
    const 响应 = await fetch(info_url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
},
    body: JSON.stringify(请求体),
});

    if (!响应.ok) {
    throw new Error(`HTTP 错误! 状态: ${响应.status}`);
}

    const 数据 = await 响应.json();
    console.log("重新发送 POST 请求成功! 响应数据:", 数据);
    任务id = 数据.任务id; // 保存新的任务 ID
    console.log("获取到的新的 任务id:", 任务id);
    sendTaskId(); // 发送新的任务 ID

} catch (错误) {
    console.error("重新发送 POST 请求失败:", 错误);
}
}
