# 部署到 GitHub Pages

站点是纯静态（只有 `index.html` / `styles.css` / `app.js`），GitHub Pages 免费托管，无需构建。

> 还没 GitHub 账号？先去 github.com 注册（免费）。**用户名决定网址**，建议一次定好，见下方表格。

## 本站的信息（已填好，照抄即可）

| 项 | 值 |
| --- | --- |
| GitHub 用户名 | `vincentxie1996` |
| 仓库名 | `vincentxie1996.github.io` |
| 网址 | https://vincentxie1996.github.io/ |
| 推送命令 | `./push-to-github.sh vincentxie1996 "Vincent Xie" "你的GitHub邮箱"` |

## 两种仓库名，对应两种地址

| 仓库名 | 访问地址 | 建议 |
| --- | --- | --- |
| `<用户名>.github.io` | `https://<用户名>.github.io/` | **推荐**：最短，像个人主页该有的样子 |
| 任意名（如 `profile`） | `https://<用户名>.github.io/profile/` | 已有同名仓库时用它 |

## 步骤

### 1. 在 GitHub 上建空仓库
网页右上角 `+` → New repository：
- Repository name：`<用户名>.github.io`（换成你的 GitHub 用户名）
- 选 **Public**（Pages 免费版要求公开）
- **不要**勾 Add a README / .gitignore / license，保持空仓库

### 2. 本地推送（在本目录执行）

**方式 A：一键脚本（推荐）** —— Git Bash 里运行：

```bash
./push-to-github.sh <用户名> "<署名>" "<GitHub邮箱>"
# 例：./push-to-github.sh vincentxie "Vincent Xie" "me@example.com"
```
脚本会自动设置本仓库身份、建 main 分支、加 remote 并推送。

**方式 B：手动命令**

```bash
git config user.name "你的名字"
git config user.email "你的GitHub邮箱"
git add -A
git commit -m "Add personal homepage"
git branch -M main
git remote add origin https://github.com/<用户名>/<用户名>.github.io.git
git push -u origin main
```

若提示输入账号密码：密码处填 **Personal Access Token**（GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)，勾选 `repo` 权限）。Windows 上若弹出浏览器登录窗口，直接登录即可。

### 3. 开启 Pages
仓库页面 → **Settings** → 左侧 **Pages** → Source 选 `Deploy from a branch` → Branch 选 `main`、目录选 `/ (root)` → Save。

约 1–2 分钟后可访问。

## 绑定自定义域名（可选）

1. 域名商处加一条 CNAME 记录，指向 `<用户名>.github.io`
2. 仓库根目录放一个 `CNAME` 文件，内容写你的域名（如 `vincentxie.com`）
3. Pages 设置里填同一个域名，建议勾 `Enforce HTTPS`

## 说明

- `.nojekyll`：跳过 Jekyll 构建，文件按原样发布（纯静态站点推荐保留）
- 改内容后：本地 `git commit` + `git push`，1–2 分钟生效
- 与现在的 WorkBuddy 链接互不冲突，两个地址可以同时存在；正式主页建议用 GitHub Pages，方便长期维护和绑域名

## 隐私

页面只公开邮箱，未放手机与微信。若之后加回手机号，请确认是否愿意公开。
