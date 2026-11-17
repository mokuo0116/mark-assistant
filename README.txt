DOKKYO Mark Assistant BETA 6.9
================================

BETA 6.9
- GitHub Pages / HTTPS向けにService Workerを追加
- Chrome AndroidのWebアプリ判定に必要なfetchイベントハンドラーを登録
- ホーム画面用アイコン候補を安全領域付き画像に統一
- Manifestに安定したidを追加

GitHub Pagesへの配置
- index.html
- manifest.webmanifest
- sw.js
- assets/ フォルダ
上記を同じ公開ディレクトリに配置してください。

更新後の手順
1. GitHub PagesへBETA 6.9一式をアップロード・公開
2. ChromeでDMAのページを開き、再読み込み
3. 既存のホーム画面ショートカットを削除
4. Chromeのメニューから「ホーム画面に追加」を実行
5. アイコンが更新されるか確認

注意
- Service Workerはfetchを横取りせず、キャッシュもしません。通常のネットワーク読み込みを維持します。
- 既存のショートカットは古いアイコンを保持する場合があるため、削除して再追加してください。
- GitHub Pagesのリポジトリ配下パスでも動くよう、登録・Manifest・アイコン参照は相対パスです。
- 実機Chromeの最終判定・アイコン更新は端末で確認してください。
