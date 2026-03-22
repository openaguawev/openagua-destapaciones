import sys
import os

try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def process_image(input_path, output_dir):
    try:
        if not os.path.exists(input_path):
            print(f"Error: file not found {input_path}")
            return

        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # white background removal
            if item[0] > 235 and item[1] > 235 and item[2] > 235:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)

        width, height = img.size
        size = min(width, height)
        left = (width - size)/2
        top = (height - size)/2
        right = (width + size)/2
        bottom = (height + size)/2
        img = img.crop((left, top, right, bottom))
        
        # resize and save
        icon_png = img.resize((512, 512), Image.Resampling.LANCZOS)
        icon_png.save(os.path.join(output_dir, "icon.png"), format="PNG")
        
        apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
        apple_icon.save(os.path.join(output_dir, "apple-icon.png"), format="PNG")
        
        favicon = img.resize((32, 32), Image.Resampling.LANCZOS)
        favicon.save(os.path.join(output_dir, "favicon.ico"), format="ICO")
        
        print("Icons successfully generated.")
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    process_image(r"C:\Users\Manus\Desktop\nueva\openagua\public\img\logo-gotita.jpg", r"C:\Users\Manus\Desktop\nueva\openagua\public")
