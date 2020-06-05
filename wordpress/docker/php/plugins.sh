#!/bin/ash

root="/usr/src/wordpress/wp-content/plugins"
zip="enable-media-replace.3.3.11.zip"

curl -L "https://downloads.wordpress.org/plugin/${zip}" --output "${root}/${zip}"
unzip -o "${root}/${zip}" -d "${root}/"
rm -rf "${root}/${zip}"