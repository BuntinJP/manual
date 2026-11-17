# smbclient 全361セグメント自己照合

2026-11-17。担当による自己照合（独立レビューではない）。

対象: manuals/samba/samba/4.25.0/upstream/1/smbclient/84aeb1965235

原文source.html、request、glossary、manifest、source-observationsを確認。原文body全文とIR全ブロックの文書順復元テキストは空白除去後34504文字で完全一致。見出し11、literal/pre1、table0一致。selector外の本文欠落なし。原文SHA・IR SHA確認、既存validateTranslationで全361件成功。

原文/IR/訳文を全文照合。共通オプションはkind/text/protected完全一致の場合にだけ再利用し、smbclientの文脈で確認。s0140のunless A or Bは「Aを指定せず、Bも指定していない場合」で条件を明確化。書式・コマンド・例・保護トークンを保持。s0066/s0172のバックスラッシュ表記も原文の2文字を保持。

## 条件・数値の重点照合

- 転送方向get/mget（remote→local）、put/mput（local→remote）、ディレクトリcd/lcd、再帰有無とmaskの対象の違いを確認。
- archive 0/1/2/3、blocksize既定20、タイムアウト20秒、バッファー0–16776960 (0xFFFF00)、長いパス1024バイト未満、WinPopup1600バイトを保持。
- deltreeはrecurse未設定でも再帰削除し、失敗時は未処理分を残す条件を保持。
- CIFS UNIX拡張未対応時の失敗条件を全該当コマンドで保持。
- インストール時setuid/setgid禁止、rootだけ書込可、ログは本人だけ読書可を保持。

## 原文上の留意点

- s0053 は原文が creation times (mtime) と記述するため、作成時刻(mtime)と訳し独自に更新時刻へ訂正していない。
- s0062 は見出し Set archive bit に続いて本文 reset と記す。双方を原文どおり保持。
- s0317 symlink説明が symbolic hard link と記すため、訳は「シンボリックハードリンク」と引用符を付けて保持。原文の用語混同を無断修正しない。
- 原文バージョンは4.25.0。manifestに追加license資料なし。著者・版表記を保持し、権利条件を推測していない。

sourceSha256: 84aeb19652358e3f5bb8956547ee0896c98cd622921a8f85ff3923fd4b5358bb
irSha256: 243b795d583ccab356634ba52280cba373f76197b23a4d55b7784730f1f2d084

候補: c937d2ae55c207f3-ja.json
同一範囲part: c937d2ae55c207f3-part-0001-0361-ja.json
queue/生成/commitなし。


## キュー受理の最終バインド

sourceSha256: 84aeb19652358e3f5bb8956547ee0896c98cd622921a8f85ff3923fd4b5358bb
irSha256: 243b795d583ccab356634ba52280cba373f76197b23a4d55b7784730f1f2d084
draftSha256: 5b586e0eeb3648d12c8160eb23bb7d85532cbb1b8f841787eb0a26fc9dec7daf

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
