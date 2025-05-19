import io
import base64
from PIL import Image
import numpy as np
import torch
import os

class 图像转Base64节点:
    """
    ComfyUI 自定义节点，用于将各种图像数据转换为 Base64 编码。
    """
    CATEGORY = "图像处理"

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "图像数据": ("IMAGE",),  # 统一使用 "IMAGE" 类型，可以接收多种图像数据
                "图像格式": (["PNG", "JPEG", "GIF", "WEBP"], {"default": "PNG"}),
            }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("Base64 字符串",)

    FUNCTION = "图像转base64"

    def 图像转base64(self, 图像数据, 图像格式):
        """
        将各种图像数据转换为 Base64 编码的字符串。

        参数:
            图像数据: 可以是 ComfyUI 图像数据 (PyTorch Tensor)、PIL Image 对象或图像文件路径。
            图像格式: 图像的格式。

        返回值:
            包含 Base64 编码字符串的元组。
        """
        try:
            # 1. 统一转换为 PIL Image 对象
            if isinstance(图像数据, torch.Tensor):  # ComfyUI 图像数据 (PyTorch Tensor)
                # 将 PyTorch Tensor 转换为 PIL Image
                图像_scaled = torch.clamp(图像数据 * 255.0, 0, 255)
                图像_uint8 = 图像_scaled.byte()
                图像_np = 图像_uint8.cpu().numpy()
                图像_pil = Image.fromarray(图像_np[0])  # 取第一张图像 (假设批次大小为 1)
            elif isinstance(图像数据, Image.Image):  # PIL Image 对象
                图像_pil = 图像数据
            elif isinstance(图像数据, str):  # 图像文件路径
                if not os.path.exists(图像数据):
                    print(f"错误：文件路径 {图像数据} 不存在。")
                    return ("",)  # 返回空字符串
                图像_pil = Image.open(图像数据)
            else:
                print("错误：不支持的图像数据类型。")
                return ("",)  # 返回空字符串

            # 2. 将 PIL Image 对象转换为 Base64 编码的字符串
            buffered = io.BytesIO()
            图像_pil.save(buffered, format=图像格式)
            img_base64 = base64.b64encode(buffered.getvalue()).decode()

            return (img_base64,)  # 返回 Base64 字符串

        except Exception as e:
            print(f"发生错误：{e}")
            return ("",)  # 返回空字符串

# 将节点添加到 ComfyUI
NODE_CLASS_MAPPINGS = {
    "图像转Base64": 图像转Base64节点
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "图像转Base64": "图像转 Base64"
}
