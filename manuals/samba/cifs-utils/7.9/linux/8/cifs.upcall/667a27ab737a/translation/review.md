# cifs.upcall 翻訳自己照合

確認者: EMMA Samba batch-5担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/cifs-utils/7.9/linux/8/cifs.upcall/667a27ab737a
全51セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 7.9。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: licenses/COPYING。

sourceSha256: 667a27ab737a390633c4d3f16aae8c7706f424b04c9b67a78fbc2744f92ba932
irSha256: 7cdca44c92ba45e3570550e9a783042e7f7891868d6ba158baf1ba5da58639b6

未受理。queue/生成/commitなし。

原文抽出の逆方向監査: body全文とIR全文の空白除去後完全一致を確認。詳細は samba-batch-5-extraction-audit.md。

## 個別確認

UID=0では環境変数検査をしない、DNS逆引きを既定で信頼しない、creduidと旧uidを使う条件、600秒、keyutils>=1.5を照合。licenses/COPYINGはGNU GPLv3本文として確認、原本を変更していない。


## キュー受理の最終バインド

sourceSha256: 667a27ab737a390633c4d3f16aae8c7706f424b04c9b67a78fbc2744f92ba932
irSha256: 7cdca44c92ba45e3570550e9a783042e7f7891868d6ba158baf1ba5da58639b6
draftSha256: e11c6cfdb600a31044d37dc23ef07d53157d44b9659ff33f0a0af07ba21dd4e1

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
