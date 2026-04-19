#!/bin/bash
set -e

REPO="https://${GITHUB_TOKEN}@github.com/app-xdev/dapur-ngebul-studioO.git"

echo "⚙️  Setup git..."
git config user.email "replit@agent.com"
git config user.name "Replit Agent"

echo "📦 Tambah semua file..."
git add index.html login.html downloads.html server.js push.sh
git add .github/workflows/deploy.yml
git add public/

echo "💬 Commit..."
git diff --cached --quiet && echo "Tidak ada perubahan." || git commit -m "feat: HTML pages + Google login + fixed deploy workflow"

echo "🚀 Push ke GitHub..."
git push "$REPO" HEAD:main

echo ""
echo "✅ BERHASIL PUSH!"
echo "   Tunggu 1-2 menit lalu cek:"
echo "   🌐 https://app-xdev.github.io/"
echo "   🔐 https://app-xdev.github.io/login.html"
echo "   📦 https://app-xdev.github.io/downloads.html"
