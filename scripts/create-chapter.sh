#!/bin/bash

read -p "Enter the directory where you want to generate the files (leave blank to generate in current directory): " dir

if [ -z "$dir" ]; then
  dir="."
fi

read -p "Enter the unit number: " unit
read -p "Enter the starting chapter number: " start_chapter
read -p "Enter the number of chapters to generate: " num_chapters
read -p "Do you want to generate files in descending order? (y/n): " descending

if [ "$num_chapters" = "0" ]; then
    filename="$unit.md"
    touch "$dir/$filename"
  done
fi

if [ "" = "" ]

if [ "$start_chapter" = "0" ]; then
  filename="$unit-$chapter"

if
  for (( i=$start_chapter; i<=$start_chapter+$num_chapters-1; i++ ))
  do
    filename="$unit-$i.md"
    touch "$dir/$filename"
  done
fi

echo "Files generated successfully in $dir."
