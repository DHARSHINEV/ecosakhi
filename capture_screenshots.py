import os
import subprocess
import time
from PIL import Image

def capture():
    os.makedirs("screenshots", exist_ok=True)
    temp_profile = os.path.expandvars(r"%TEMP%\edge_screenshot_profile")
    edge_bin = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    
    tabs = [
        ("landing", "http://127.0.0.1:5174/#landing"),
        ("dashboard", "http://127.0.0.1:5174/#dashboard"),
        ("pickup", "http://127.0.0.1:5174/#pickup"),
        ("collector", "http://127.0.0.1:5174/#collector"),
        ("ecovision", "http://127.0.0.1:5174/#ecovision"),
        ("calculator", "http://127.0.0.1:5174/#calculator"),
        ("wallet", "http://127.0.0.1:5174/#wallet"),
        ("climate_score", "http://127.0.0.1:5174/#climate-score"),
        ("finance", "http://127.0.0.1:5174/#finance"),
        ("traceability", "http://127.0.0.1:5174/#traceability"),
        ("recycler", "http://127.0.0.1:5174/#recycler"),
        ("admin", "http://127.0.0.1:5174/#admin"),
    ]
    
    for name, url in tabs:
        target_path = os.path.abspath(f"screenshots/{name}.png")
        cmd = [
            edge_bin,
            "--headless=new",
            "--disable-gpu",
            f"--user-data-dir={temp_profile}",
            f"--screenshot={target_path}",
            "--window-size=1280,800",
            url
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if os.path.exists(target_path):
            # Optimize image with PIL
            img = Image.open(target_path)
            # Crop slightly if needed or convert to RGB JPEG/optimized PNG
            opt_path = f"screenshots/{name}_opt.jpg"
            img.convert("RGB").save(opt_path, "JPEG", quality=85)
            print(f"Captured {name}: {os.path.getsize(opt_path)} bytes")
        else:
            print(f"Failed to capture {name}")

if __name__ == "__main__":
    capture()
