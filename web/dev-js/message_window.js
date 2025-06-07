// ui-manager.js (UI 管理模块)
let messageOverlay;
let connectionErrorElement;
let currentLogLevel = config.defaultLogLevel;

function createUI() {
    // 创建消息悬浮窗
    messageOverlay = document.createElement('div');
    messageOverlay.id = 'messageOverlay';
    document.body.appendChild(messageOverlay);

    // 设置初始位置为右上角
    function setInitialPosition() {
        messageOverlay.style.top = config.messageOverlayTop; // 距离顶部 20px
        messageOverlay.style.right = config.messageOverlayRight; // 距离右侧 20px
        messageOverlay.style.left = 'auto'; // 移除 left 属性，使用 right 属性
    }
    setInitialPosition();

    // 创建穿透模式切换按钮
    const toggleThroughButton = document.createElement('button');
    toggleThroughButton.id = 'toggleThrough';
    toggleThroughButton.textContent = config.toggleThroughButtonText;
    messageOverlay.appendChild(toggleThroughButton);

    let isDragging = false;
    let offsetX, offsetY;

    // 拖动事件
    messageOverlay.addEventListener('mousedown', (e) => {
        if (e.target !== toggleThroughButton) {
            isDragging = true;
            offsetX = e.clientX - messageOverlay.offsetLeft;
            offsetY = e.clientY - messageOverlay.offsetTop;
            messageOverlay.style.cursor = 'grabbing';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        messageOverlay.style.cursor = 'move';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        messageOverlay.style.left = (e.clientX - offsetX) + 'px';
        messageOverlay.style.top = (e.clientY - offsetY) + 'px';
        messageOverlay.style.right = 'auto'; // 拖动时移除 right 属性，使用 left 属性
    });

    // 切换穿透模式
    toggleThroughButton.addEventListener('click', () => {
        messageOverlay.classList.toggle('through');
        toggleThroughButton.textContent = messageOverlay.classList.contains('through') ? config.toggleThroughButtonTextCancel : config.toggleThroughButtonText;
    });

    // 创建连接错误提示元素
    connectionErrorElement = document.createElement('div');
    connectionErrorElement.id = 'connectionError';
    connectionErrorElement.textContent = config.connectionErrorText;
    messageOverlay.appendChild(connectionErrorElement);

    // 创建级别过滤选择器
    const levelFilterSelect = document.createElement('select');
    levelFilterSelect.id = 'levelFilter';
    config.logLevels.forEach(level => {
        const option = document.createElement('option');
        option.value = level;
        option.textContent = level.toUpperCase();
        levelFilterSelect.appendChild(option);
    });
    levelFilterSelect.value = currentLogLevel; // 设置默认值
    messageOverlay.appendChild(levelFilterSelect);

    // 级别过滤事件
    levelFilterSelect.addEventListener('change', () => {
        currentLogLevel = levelFilterSelect.value;
        console.log("日志级别已设置为:", currentLogLevel);
    });
}

function logMessage(message, level) {
    if (config.logLevels.indexOf(level) < config.logLevels.indexOf(currentLogLevel)) {
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

function showConnectionError(message) {
    connectionErrorElement.textContent = message;
    connectionErrorElement.style.display = 'block';
    connectionErrorElement.classList.add('error');
}

function hideConnectionError() {
    connectionErrorElement.style.display = 'none';
    connectionErrorElement.classList.remove('error');
}
