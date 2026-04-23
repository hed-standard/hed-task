import glob
import re

count = 0
for filepath in glob.glob('docs/processes/*.md'):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Capture the inside of the note
    new_content = re.sub(r':::\\\{note\}(.*?):::', r':::{note}\n\1\n:::', content, flags=re.DOTALL)
    
    # Fix the extra spaces around the captured content
    new_content = re.sub(r':::{note}\n\s+', ':::{note}\n', new_content)
    new_content = re.sub(r'\s*\n:::', '\n:::', new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
print(f'Fixed {count} files')
