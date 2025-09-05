# Apocalypse 2099 — 極簡末日官網模板

這是一個 **零基礎可上線** 的末日科幻風官網模板：純 HTML/CSS/JS，免後端、免打包。

## 功能
- 黑底霓虹、掃描線、粒子背景
- RWD 響應式版面
- Hero 區、卡片、時間線、圖片檔案庫、表單假提交
- 字體：Orbitron + Chakra Petch（Google Fonts）

## 快速開始
1. 將整個資料夾上傳到 GitHub repo（例如 `apocalypse-site`）。
2. 到 GitHub → **Settings → Pages**，Source 選擇 `main` 分支，Save。
3. 等一下，網頁就會出現（網址會顯示在 Pages 設定頁）。

## 本地預覽
直接雙擊 `index.html` 用瀏覽器開也可。

## 客製化
- `index.html`：修改文案與區塊順序。
- `style.css`：調整色票 `--neon` / `--alert`、背景效果。
- `script.js`：調整粒子數量、連線距離。

## 小訣竅
- 圖片放在 `assets/`，現在附的是可替換的 SVG 佔位圖。
- 想加聲音：在 `index.html` 的 `<main>` 前加 `<audio src="你的音效.mp3" autoplay loop></audio>`（注意版權 & 音量）。
