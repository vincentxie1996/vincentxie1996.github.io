# 部署到 GitHub Pages

站点是纯静态（`index.html` / `styles.css` / `app.js`），GitHub Pages 免费托管，无需构建。

> 还没 GitHub 账号？先去 github.com 注册（免费）。**用户名决定网址**，建议一次定好，见下方表格。

## 本站的信息（已核对）

| 项 | 值 |
| --- | --- |
| GitHub 用户名 | `vincentxie1996` |
| 仓库名 | `vincentxie1996.github.io` |
| 网址 | https://vincentxie1996.github.io/ |
| 提交邮箱 | vincentxie1996@gmail.com |

## 当前进度

- ✅ 仓库已在 GitHub 网页建好（Public，空仓库）
- ✅ 本地已初始化 git 并提交：`d2bd735 Add personal homepage`
- ✅ remote 已配好：`https://github.com/vincentxie1996/vincentxie1996.github.io.git`
- ✅ 身份已设：Vincent Xie &lt;vincentxie1996@gmail.com&gt;（仅对本仓库生效）
- ⬜ **推送**（需你在自己的终端或 GitHub Desktop 完成）
- ⬜ 开启 Pages

## 推送：三选一

### 方式 A：GitHub Desktop（最省事，推荐非开发者）

1. 装 GitHub Desktop：https://desktop.github.com/ ，打开后用浏览器登录 GitHub
2. `File` → `Add local repository…` → 选目录 `C:\Users\10593\WorkBuddy\2026-10-04-22-14-17\xie-wencheng`
3. 若提示 Publish → 填 Repository name `vincentxie1996.github.io`，取消勾选 Keep this code private（Pages 需 Public）→ Publish
4. 右上角 `Push origin` 推送

### 方式 B：Git Bash 一行命令（本地已准备好，只差推送）

在自己的 Git Bash 里执行（不是受限的沙箱终端）：

```bash
cd /c/Users/10593/WorkBuddy/2026-10-04-22-14-17/xie-wencheng
git push -u origin main
```

若弹出浏览器登录窗，直接登录即可；若在终端要密码，密码处填 **Personal Access Token**
（GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)，勾 `repo`）。

### 方式 C：网页拖拽上传（完全不用命令行）

1. 打开 https://github.com/vincentxie1996/vincentxie1996.github.io
2. 点页面中间 **uploading an existing file**（若仓库非空则点 `Add file` → `Upload files`）
3. 把这 5 个文件拖进去：`index.html`、`styles.css`、`app.js`、`.nojekyll`、`README.md`
   （`.nojekyll` 是隐藏文件，若资源管理器看不到可在地址栏直接进目录复制出来）
4. 下方填写提交信息 → `Commit changes`

## 开启 Pages

推完文件后：仓库页面 → **Settings** → 左侧 **Pages** → Source 选 `Deploy from a branch`
→ Branch 选 `main`、目录选 `/ (root)` → Save。

约 1–2 分钟后访问 https://vincentxie1996.github.io/

## 常见问题

| 报错 | 原因 / 处理 |
| --- | --- |
| `CRYPT_E_REVOCATION_OFFLINE` | Windows 证书吊销服务器离线。本仓库已设 `http.schannelCheckRevoke=false`；若仍报，改用命令 `git -c http.sslBackend=openssl push -u origin main` |
| `CONNECT tunnel failed, response 502` | 终端被代理接管，代理不放行 github.com。换自己的 Git Bash（不经代理）或用方式 A / C |
| `Failed to connect ... after 21053 ms` | 网络直连 github.com 不通。同上，换方式 A / C |

## 后续改内容

改完 `index.html` 之后：

```bash
git add -A
git commit -m "Update homepage"
git push
```

1–2 分钟生效。GitHub Desktop 用户就是改完点 Commit to main → Push origin。

## 说明

- `.nojekyll`：跳过 Jekyll 构建，文件按原样发布（纯静态站点推荐保留）
- 与现在的 WorkBuddy 链接互不冲突，两个地址可并存；正式主页建议用 GitHub Pages，便于长期维护和绑域名

## 绑定自定义域名（可选）

1. 域名商处加一条 CNAME 记录，指向 `vincentxie1996.github.io`
2. 仓库根目录放一个 `CNAME` 文件，内容写你的域名（如 `vincentxie.com`）
3. Pages 设置里填同一个域名，建议勾 `Enforce HTTPS`

## 隐私

页面只公开邮箱，未放手机与微信。若之后加回手机号，请确认是否愿意公开。
