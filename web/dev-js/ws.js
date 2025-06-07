// websocket-manager.js (WebSocket 连接管理模块)
let ws;
let reconnectAttempts = 0;
let wsUrl;
let 任务id; // 保存任务 ID

function connectWebSocket() {
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
        console.log("WebSocket 连接成功!");
        reconnectAttempts = 0; // 重置重连次数
        hideConnectionError(); // 隐藏错误消息
        logMessage(config.wsMessage, 'info');

        ws.send(JSON.stringify({"msessage": config.wsMessage, "level": "info"}))
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
            if (message.includes(config.repostWarningMessage) && level === config.repostWarningLevel) {
                console.warn("收到服务器警告，重新发送 POST 请求...");
                resendPostRequest();
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
    if (reconnectAttempts < config.maxReconnectAttempts) {
        reconnectAttempts++;
        const delay = config.reconnectDelayBase ** reconnectAttempts; // 指数退避
        console.log(`尝试重新连接 (第 ${reconnectAttempts} 次) 在 ${delay} 秒后...`);
        showConnectionError(config.connectionErrorText); // 显示错误消息
        setTimeout(() => {
            connectWebSocket();
        }, delay * 1000);
    } else {
        console.error("达到最大重连次数，放弃重连");
        showConnectionError('服务器连接失败，请检查服务器状态。');
    }
}

function sendTaskId() {
    if (ws && ws.readyState === WebSocket.OPEN && 任务id) {
        ws.send(JSON.stringify({ 任务id: 任务id, message: config.taskIdMessage, level: 'info' }));
        console.log("已发送任务 ID:", 任务id);
    } else {
        console.warn("WebSocket 未连接或任务 ID 未定义，无法发送任务 ID");
    }
}

function setTaskId(taskId) {
    任务id = taskId;
}