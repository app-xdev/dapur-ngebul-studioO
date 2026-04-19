#!/bin/bash
# Script push otomatis ke GitHub menggunakan GITHUB_TOKEN
set -e

REPO="https://${GITHUB_TOKEN}@github.com/app-xdev/dapur-ngebul-studioO.git"

echo "⚙️  Menyiapkan git..."
git config user.email "replit@agent.com"
git config user.name "Replit Agent"

echo "📦 Menambahkan semua file..."
git add -A

echo "💬 Membuat commit..."
git commit -m "feat: pure HTML + Google login UI + deploy workflow" || echo "Tidak ada perubahan baru."

echo "🚀 Push ke GitHub..."
git push "$REPO" HEAD:main --force

echo "✅ Berhasil! Cek GitHub Actions di:"
echo "   https://github.com/app-xdev/dapur-ngebul-studioO/actions"
