#!/usr/env/bin/zsh

cd glaring-api && bundle install && rake db:setup
cd ../glaring-client && npm i
echo "Install complete!"