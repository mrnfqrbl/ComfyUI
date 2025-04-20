@echo on
chcp 65001
set PYTHONUNBUFFERED=1
set PYTHONUTF8=1
cd /d I:\我的云端硬盘\ComfyUI

echo -= 检查是否需要安装依赖 =-
if "%1"=="-i" (
  echo 接收到 -i 参数，执行安装依赖步骤
  echo -= Install custom nodes dependencies =-
  D:\参考\ComfyUI\.venv\Scripts\pip.exe install GitPython

  D:\参考\ComfyUI\.venv\Scripts\python.exe .\custom_nodes/ComfyUI-Manager/cm-cli.py restore-dependencies
) else (
  echo 未接收到 -i 参数，跳过安装依赖步骤
)

echo -= 启动 ComfyUI =-
D:\参考\ComfyUI\.venv\Scripts\python.exe .\main.py --directml --lowvram --listen 0.0.0.0

cmd /k
