# pbcopy / pbpaste / xcode-select 候補訳の自己照合

確認者: EMMA diff-intake担当（翻訳者による自己照合。独立レビューではない）。2026-11-17。

## pbcopy / pbpaste

対象: manuals/apple/macos/27.0.1/26a434/1/{pbcopy,pbpaste}/b2a70eec58e3
候補: /workspace/shared/manual-translations/apple-pbcopy-ja.json および apple-pbpaste-ja.json

各19セグメントを保存済みsource.roff全文とIRに照合。pbpasteのprovenance/original-alias.roffは `.so man1/pbcopy.1` であり、manifestが別途ハッシュ保管していることを確認。pbpasteの本文はpbcopyの同一原文であり、独立した別本文として捏造していない。両者の原文・IRハッシュ一致を確認したうえで同じ候補訳を使用。

- generalの既定、EPS/RTFヘッダーによる入力型の選択、出力検索順序（text→EPS→RTF）、該当型がない場合の無出力を保持。
- 原文のremovesは「取り出す」と訳した。クリップボード消去の追加断定はしていない。
- LANG=en_US.UTF-8、他のロケール設定がない場合という条件、判定不能時のCエンコーディング、UTF-8推奨を保持。
- -Preferは最初に探す型であり、未発見時に他形式へフォールバックすること、txt/asciiの関係を保持。
- s0019のonlyは既存IRの保護トークンなので「だけ（only）」として保持し、型の限定取得ができないという否定を明示。
- 書式、参照文書名・分類、改行と強調の保護トークンを保持。

sourceSha256: b2a70eec58e3cc7ae85a6cdc80e0627c4b481973664acc407e9a580ee0bcdf27
irSha256: cb44ff49a5381821233ab50136b984c341d65ffd62c949aa18e5ecad5aa276e8

## xcode-select

対象: manuals/apple/macos/27.0.1/26a434/1/xcode-select/5cc6afa914d7
候補: /workspace/shared/manual-translations/apple-xcode-select-ja.json

全49セグメントをsource.roff全文と照合。6オプション、環境変数、5例、Xcodeツール17パスとBSDツール70パスを保持。

- --switch / --resetのスーパーユーザー権限要求と全ユーザーへの影響を保持。
- DEVELOPER_DIRによるシステム設定の上書き、権限不要または現在のシェルだけに適用する選択肢を保持。
- Xcode.appとContents/Developerの区別、自動変換、--print-pathよりxcrunをスクリプトで使用する指針を保持。
- --installはインストール要求のダイアログを開く機能であり、即座にインストール完了すると訳していない。
- 実行例のパス・コマンド・環境変数、全ツールパスの保護トークンを保持。マニュアル中のsudo等は翻訳資料として扱い、コマンドは実行していない。

sourceSha256: 5cc6afa914d70689c057158160338e7263db7be2eac02c8135b6dbc2b4164356
irSha256: eb53938f7c8ffa210018fedfa06d4630e1ac8f9a1ba055c252befdc6f2d3b0d3

## 検証・留意事項

validateTranslationは19/19、19/19、49/49で成功。原文/IRの本文欠落や未解決の誤訳は検出していない。原文やmanifestは変更していない。pbcopy原文にはApple Computer, Inc.のAll Rights Reserved表記があり、今回読んだ原文には翻訳・再配布を明示する許諾文はない。xcode-select原文にも明示的な再配布許諾を確認できない。これは権利調査完了の主張ではなく運営者向けの留意事項であり、依頼された翻訳は継続した。

queue操作、受理、生成、commitは未実施。管理者がsave後のdraftSha256と最終検証を追加すること。


この記録の対象: pbpaste
sourceSha256: b2a70eec58e3cc7ae85a6cdc80e0627c4b481973664acc407e9a580ee0bcdf27
irSha256: cb44ff49a5381821233ab50136b984c341d65ffd62c949aa18e5ecad5aa276e8
draftSha256: 024039c54c1794857a7908a86ba83edbc883e4808d686e949cd2efecf3a64826
