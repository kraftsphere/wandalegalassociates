#!/bin/bash

# Safety check: Only run if current folder is correctt
if [[ "$(pwd)" != "/var/www/html/app/live/winshine_website/frontend" ]]; then
  echo "Error: You are not in the correct project directory!"
  exit 1
fi

echo "Discarding local changes..."
# Discard any local changes and reset to the latest commit from the remote
git reset --hard
git clean -fd

# Pull the latest code from the main branch
echo "Pulling the latest code..."
git pull origin main

# If 'install' is passed as an argument, run npm install
if [ "$1" == "install" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build the project
echo "Building the project..."
npm run build

# Restart PM2 for frontend
echo "Restarting PM2 for the frontend..."
pm2 restart winshine_frontend

# Save PM2 process list
echo "Saving PM2 process list..."
pm2 save

echo "Frontend deployment finished."
