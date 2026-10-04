#!/usr/bin/env bash
# 一键推送到 GitHub Pages（Windows 用 Git Bash 运行）
#
# 用法（把 <> 换成你自己的）：
#   ./push-to-github.sh <GitHub用户名> "<提交署名>" "<GitHub邮箱>"
#
# 示例：
#   ./push-to-github.sh vincentxie "Vincent Xie" "vincent@example.com"
#
# 前置：已在 GitHub 网页建好名为 <用户名>.github.io 的空仓库（Public）

set -e

USERNAME="$1"
GIT_NAME="$2"
GIT_EMAIL="$3"

if [ -z "$USERNAME" ]; then
  echo "用法: ./push-to-github.sh <GitHub用户名> \"<提交署名>\" \"<GitHub邮箱>\""
  exit 1
fi

cd "$(dirname "$0")"

# 仅设置本仓库的身份，不动全局配置
git config user.name "$GIT_NAME"
git config user.email "$GIT_EMAIL"

git add -A
git commit -m "Add personal homepage" || echo "（没有新的改动可提交，继续推送）"
git branch -M main

git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/${USERNAME}/${USERNAME}.github.io.git"

echo "准备推送到 https://github.com/${USERNAME}/${USERNAME}.github.io.git"
echo "提示输入密码时，请填 Personal Access Token（不是登录密码）"
git push -u origin main

echo
echo "推送完成。下一步："
echo "  仓库页面 → Settings → Pages → Source: Deploy from a branch"
echo "  → Branch: main / 目录: /(root) → Save"
echo "  1-2 分钟后访问: https://${USERNAME}.github.io/"
