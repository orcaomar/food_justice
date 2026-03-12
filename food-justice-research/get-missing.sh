for file in src/assets/challenges/*.{jpg,png,svg}; do
  if ! grep -q "$(basename "$file")" -r src/; then
    echo "$file is unused"
  fi
done
