import os
import shutil

brain_dir = r"C:\Users\Sumaiya\.gemini\antigravity\brain\6fa15a14-958d-484c-afc3-56f1e758d450"
temp_dir = os.path.join(brain_dir, ".tempmediaStorage")
artifacts_dir = os.path.join(brain_dir, "artifacts")

latest_file = None
latest_time = 0

for f in os.listdir(temp_dir):
    if f.endswith('.png'):
        full_path = os.path.join(temp_dir, f)
        mtime = os.path.getmtime(full_path)
        if mtime > latest_time:
            latest_time = mtime
            latest_file = full_path

if latest_file:
    dest = os.path.join(artifacts_dir, "hero_fixed_latest.png")
    shutil.copy2(latest_file, dest)
    print(f"Copied: {latest_file} -> {dest}")
