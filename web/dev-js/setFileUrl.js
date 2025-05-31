const intervalId = setInterval(() => {
    if (window.comfyAPI && window.comfyAPI.api && window.comfyAPI.api.api) {
        // 1. 设置 file_url (如果需要)
        window.comfyAPI.api.api.file_url = window.location.protocol + "//" + window.comfyAPI.api.api.api_host;
        console.log("file_url 设置成功:", window.comfyAPI.api.api.file_url);

        // 2. 修改 fileURL 函数
        window.comfyAPI.api.api.fileURL = function(route) {
            return window.comfyAPI.api.api.file_url + route;
        };
        console.log("fileURL 函数已修改");

        clearInterval(intervalId); // 停止定时器

        // 创建消息悬浮窗
        messageOverlay = document.createElement('div');
        messageOverlay.id = 'messageOverlay';
        document.body.appendChild(messageOverlay);

        // 设置初始位置为右上角
        function setInitialPosition() {
            messageOverlay.style.top = '20px'; // 距离顶部 20px
            messageOverlay.style.right = '20px'; // 距离右侧 20px
            messageOverlay.style.left = 'auto'; // 移除 left 属性，使用 right 属性
        }
        setInitialPosition();

        // 创建穿透模式切换按钮
        const toggleThroughButton = document.createElement('button');
        toggleThroughButton.id = 'toggleThrough';
        toggleThroughButton.textContent = '穿透';
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
            toggleThroughButton.textContent = messageOverlay.classList.contains('through') ? '取消穿透' : '穿透';
        });

        // 创建连接错误提示元素
        connectionErrorElement = document.createElement('div');
        connectionErrorElement.id = 'connectionError';
        connectionErrorElement.textContent = '服务器连接失败，正在重试...';
        messageOverlay.appendChild(connectionErrorElement);

        // 创建级别过滤选择器
        const levelFilterSelect = document.createElement('select');
        levelFilterSelect.id = 'levelFilter';
        logLevels.forEach(level => {
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

        // 页面渲染完毕后执行的代码

        请求体 = {
            "基础url": window.comfyAPI.api.api.file_url,
            "获取列表接口": "/api/mrnf/get",
            "下载接口": "/api/mrnf/down",
        };

        async function 发起请求(info_url, 请求体) {
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
                console.log("请求成功! 响应数据:", 数据);
                任务id = 数据.任务id; // 保存任务 ID
                console.log("获取到的 任务id:", 任务id);
                return 数据; // 返回响应数据，方便后续处理
            } catch (错误) {
                console.error("请求失败:", 错误);
                throw 错误; // 重新抛出错误，让调用者处理
            }
        }

        // 调用发起请求函数
        发起请求(info_url, 请求体)
            .then((数据) => {
                // 在这里处理响应数据

                console.log("处理响应数据:", 数据);
                const ws接口 = 数据.ws接口为; // 获取返回的 ws 接口
                console.log("获取到的 ws 接口:", ws接口);


                wsUrl = baseurl + ws接口; // 拼接 WebSocket URL
                console.log("拼接后的 WebSocket URL:", wsUrl);

                // 连接 WebSocket
                connectWebSocket();

            })
            .catch((错误) => {
                // 在这里处理错误
                console.error("处理错误:", 错误);
            });
    } else {
        console.log("等待 window.comfyAPI.api.api...");
    }
}, 100); // 每 100 毫秒检查一次