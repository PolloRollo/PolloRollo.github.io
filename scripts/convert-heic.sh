#!/bin/bash

# Check if a filename or directory was provided
if [ -z "$1" ]; then
    echo "Usage: $0 <filename.HEIC> or $0 <directory_path>"
    exit 1
fi

convert_file() {
    local input="$1"
    local extension="${input##*.}"
    local filename_no_ext="${input%.*}"
    local output="${filename_no_ext}.webp"
    local temp_jpg="${filename_no_ext}.temp.jpg"

    # Only process HEIC files
    if [[ ! "$extension" =~ ^(HEIC|heic)$ ]]; then
        return
    fi

    echo "--- Processing: $input ---"

    # 1. Convert to high-quality JPEG using sips (handles Apple's tiled HEIC correctly)
    if ! sips -s format jpeg "$input" --out "$temp_jpg" > /dev/null 2>&1; then
        echo "❌ Error: Failed to decode $input with sips"
        return 1
    fi

    # 2. Convert JPEG to WebP using ffmpeg (q:v 80 is high quality)
    if ! ffmpeg -i "$temp_jpg" -q:v 80 "$output" -y > /dev/null 2>&1; then
        echo "❌ Error: Failed to encode $output with ffmpeg"
        rm -f "$temp_jpg"
        return 1
    fi

    # 3. Clean up intermediate JPEG
    rm -f "$temp_jpg"
    echo "✅ Success: $output created"
}

# Check if input is a directory or a file
if [ -d "$1" ]; then
    echo "Folder detected. Converting all HEIC files in: $1"
    # Use find to handle case-insensitivity and spaces in filenames
    find "$1" -maxdepth 1 -iname "*.heic" | while read -r f; do
        convert_file "$f"
    done
elif [ -f "$1" ]; then
    convert_file "$1"
else
    echo "❌ Error: '$1' is not a valid file or directory"
    exit 1
fi

echo "--- Done ---"


