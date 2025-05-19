import io
import base64
from PIL import Image
import numpy as np
import torch
import os  # 导入 os 模块

class 图像加载API:
    """
    自定义节点：图像加载API

    接收两个参数：数据类型和数据内容，并将其转换为 ComfyUI 中标准的
    IMAGE 类型 (torch.Tensor, float32, 0.0 到 1.0, RGB, (batch, height, width, channels))。
    """

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "数据类型": (["Base64", "二进制流", "Base64文件"],),  # 数据类型选择，添加 "Base64文件"
                "图像数据": ("STRING", {"multiline": True, "default": ""}),  # 图像数据，可以是 Base64 字符串或其他格式
            },
            "optional": {
                "Base64文件路径": ("STRING", {"default": "", "multiline": False}),  # Base64 文件路径，可选
            }
        }

    RETURN_TYPES = ("IMAGE",)  # 返回 ComfyUI 图像格式
    RETURN_NAMES = ("图像",)
    FUNCTION = "加载图像"
    CATEGORY = "自定义节点"

    def 加载图像(self, 数据类型, 图像数据, Base64文件路径=None):
        """
        加载图像数据并转换为 ComfyUI 中标准的 IMAGE 类型。

        Args:
            数据类型 (str): 图像数据的类型，如 "Base64" 或 "二进制流"。
            图像数据 (str): 图像数据，根据数据类型进行解析。
            Base64文件路径 (str, optional): 包含 Base64 编码图像内容的文件路径。默认为 None。

        Returns:
            torch.Tensor: ComfyUI 图像格式的张量 (float32, 0.0 到 1.0, RGB, (batch, height, width, channels))。
        """
        try:
            if 数据类型 == "Base64":
                # 解码 Base64 字符串
                图像数据 = 图像数据  # 不需要 split，因为图像数据已经是纯 Base64 字符串
                图像数据 = base64.b64decode(图像数据)
                图像 = Image.open(io.BytesIO(图像数据))
            elif 数据类型 == "二进制流":
                # 直接从二进制流加载
                图像 = Image.open(io.BytesIO(图像数据.encode('latin-1'))) # 假设二进制流是 latin-1 编码的字符串
            elif 数据类型 == "Base64文件":
                # 从文件中读取 Base64 数据
                if Base64文件路径:
                    try:
                        with open(Base64文件路径, "r") as f:
                            图像数据 = f.read()
                        图像数据 = base64.b64decode(图像数据)
                        图像 = Image.open(io.BytesIO(图像数据))
                    except FileNotFoundError:
                        print(f"文件未找到: {Base64文件路径}")
                        return (None,)
                    except Exception as e:
                        print(f"读取 Base64 文件失败: {e}")
                        return (None,)
                else:
                    print("Base64文件路径未提供")
                    return (None,)
            else:
                raise ValueError(f"不支持的数据类型: {数据类型}")

            # 1. 转换为 RGB 模式
            图像 = 图像.convert("RGB")

            # 2. 转换为 NumPy 数组，并缩放到 0.0 到 1.0 范围
            图像_np = np.array(图像).astype(np.float32) / 255.0

            # 3. 转换为 ComfyUI 图像格式 (torch.Tensor)
            图像_tensor = torch.from_numpy(图像_np).unsqueeze(0)  # 添加批次维度

            # 4. 调整维度顺序为 (batch, height, width, channels)
            图像_tensor = 图像_tensor.permute(0, 1, 2, 3)

            return (图像_tensor,)

        except Exception as e:
            print(f"图像加载失败: {e}")
            return (None,)  # 返回 None 表示加载失败


# ComfyUI 注册信息
NODE_CLASS_MAPPINGS = {
    "图像加载API": 图像加载API
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "图像加载API": "图像加载 API (ComfyUI IMAGE - 最终版)"
}
