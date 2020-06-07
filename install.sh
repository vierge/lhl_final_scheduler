#!/usr/env/bin/zsh

cd glaring-api && bundle install
cd ../glaring-client && npm i

echo "Install complete!"