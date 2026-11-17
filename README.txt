DOKKYO Mark Assistant BETA 6.11
=================================

BETA 6.11 修正
- updateLiveReadings() の未定義 cfg 参照を settings().course に修正
- レース運営用CSSの文字列化された改行を実改行へ修正
- フッターの旧バージョン表記をBETA 6.11へ統一
- レース運営モードの地図に適用していた contain: paint / isolation の強制指定を撤去
- Leaflet標準のpane配置・transform管理を尊重するよう変更
- 地図表示領域の高さを明示
- レース運営タブ表示後に2段階でinvalidateSizeを実行
- タイルレイヤー初期化後に海図・帆走区域レイヤーを追加する順序に整理

配布
- GitHub Pages公開ディレクトリへ、index.html / manifest.webmanifest / sw.js / assets をすべて配置してください。
- 古いService Workerが残る場合は、ページ再読み込み後に時間を置いて再確認してください。

確認事項
- この修正はLeafletの標準レイヤー配置に戻すものです。
- 実機Chromeでの地図タイル取得・表示は最終確認が必要です。
