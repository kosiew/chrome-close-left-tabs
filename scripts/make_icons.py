"""Generate the extension icons. Usage: python3 scripts/make_icons.py [out_dir]"""

import os
import sys

from PIL import Image, ImageDraw

default_out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "icons")
out_dir = sys.argv[1] if len(sys.argv) > 1 else default_out
os.makedirs(out_dir, exist_ok=True)

S = 1024
img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
d = ImageDraw.Draw(img)

d.rounded_rectangle([0, 0, S - 1, S - 1], radius=220, fill=(26, 115, 232, 255))

white = (255, 255, 255, 255)
# Wall on the left.
d.rounded_rectangle([210, 230, 310, 794], radius=40, fill=white)
# Arrow pointing left toward the wall.
d.polygon([(380, 512), (600, 292), (600, 432), (820, 432),
           (820, 592), (600, 592), (600, 732)], fill=white)

for size in (16, 32, 48, 128):
    img.resize((size, size), Image.LANCZOS).save(
        os.path.join(out_dir, f"icon{size}.png"))
