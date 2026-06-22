import os
import re

directory = "/Users/votienthuan97/Documents/Web/Web/LiquidBoardWeb/src/views/About/content"

for filename in os.listdir(directory):
    if not filename.endswith(".tsx"):
        continue
    filepath = os.path.join(directory, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to ensure there is a space before <Link> if preceded by word characters or > 
    # But using {' '} is safer.
    # Actually, replacing all instances of `<Link` with ` <Link` and `</Link>` with `</Link> ` is easiest,
    # and then replacing double spaces with single spaces.
    
    # 1. Add space before <Link> if not already there
    content = re.sub(r'([^\s])<Link', r'\1 <Link', content)
    
    # 2. Add space after </Link> if followed by a letter or a word (not punctuation)
    # Be careful not to add space before a period or comma.
    # We match </Link> followed by any character that is NOT a space, period, comma, colon, semicolon, right parenthesis
    content = re.sub(r'</Link>([^\s\.,:;\)])', r'</Link> \1', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done fixing links.")
