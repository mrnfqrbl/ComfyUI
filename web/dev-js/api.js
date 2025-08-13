
// api-.js (API 请求模块)
let 请求体; // 保存请求体，用于重新发送
let wsBaseUrl;


// 新增：配置中心（支持前后端分离预留）
const API_CONFIG = {
    // 未来前后端分离时，可配置为后端服务地址（如"https://api.yourdomain.com/"）
    backendBaseUrl: "",
    // WebSocket服务地址（可选，默认使用backendBaseUrl）
    wsBaseUrl: ""
};

// 新增：动态获取基准路径（兼容代理和非代理场景）
function getBaseUrl() {
    // 1. 优先使用显式配置的后端地址（前后端分离场景）
    if (API_CONFIG.backendBaseUrl) {
        return formatUrl(API_CONFIG.backendBaseUrl);
    }

    // 2. 其次使用base标签（代理场景）
    const baseTag = document.querySelector('base');
    if (baseTag) {
        return formatUrl(baseTag.href);
    }

    // 3. 最后使用comfyAPI的api_host（原有逻辑，兼容非代理场景）
    return formatUrl(window.location.protocol + "//" + window.comfyAPI.api.api.api_host);
}

// 新增：URL格式化工具（确保路径以斜杠结尾）
function formatUrl(url) {
    // return url.endsWith('/') ? url : url + '/';
    if (url[url.length - 1] === '/') {
        return url.slice(0, -1);
    }
    return url;
}


async function resendPostRequest() {
    try {
        const 响应 = await fetch(config.infoUrl, {
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
        setTaskId(数据.任务id); // 保存新的任务 ID
        console.log("获取到的新的 任务id:", 数据.任务id);
        sendTaskId(); // 发送新的任务 ID

    } catch (错误) {
        console.error("重新发送 POST 请求失败:", 错误);
    }
}

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
        setTaskId(数据.任务id); // 保存任务 ID
        console.log("获取到的 任务id:", 数据.任务id);
        return 数据; // 返回响应数据，方便后续处理
    } catch (错误) {
        console.error("请求失败:", 错误);
        throw 错误; // 重新抛出错误，让调用者处理
    }
}

// 初始化函数
function initialize() {
    let intervalId = setInterval(() => {
        if (window.comfyAPI && window.comfyAPI.api && window.comfyAPI.api.api) {
            // 1. 设置 file_url (如果需要)
            baseurl = getBaseUrl();
            window.comfyAPI.api.api.file_url = baseurl;

            console.log("file_url 设置成功:", window.comfyAPI.api.api.file_url);

            // 2. 修改 fileURL 函数
            window.comfyAPI.api.api.fileURL = function(route) {
                return window.comfyAPI.api.api.file_url + route;
            };
            console.log("fileURL 函数已修改");

            clearInterval(intervalId); // 停止定时器

            // 创建 UI
            createUI();

            请求体 = {
                "基础url": window.comfyAPI.api.api.file_url,
                "获取列表接口": "/api/mrnf/get",
                "下载接口": "/api/mrnf/down",
            };

            // 调用发起请求函数
            发起请求(config.infoUrl, 请求体)
                .then((数据) => {
                    // 在这里处理响应数据

                    console.log("处理响应数据:", 数据);
                    const ws接口 = 数据.ws接口为; // 获取返回的 ws 接口
                    console.log("获取到的 ws 接口:", ws接口);


                    wsUrl = config.baseUrl + ws接口; // 拼接 WebSocket URL
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
    }, 300); // 每 100 毫秒检查一次
}

// 在 ComfyUI 页面加载完成后调用初始化函数
initialize();
// 新增：暴露配置接口（方便未来动态修改）
window.API_CONFIG = API_CONFIG;
window.updateBackendBaseUrl = function(newUrl) {
    API_CONFIG.backendBaseUrl = newUrl;
    // 如需立即生效，可在这里重新初始化相关配置
};


