# mount.cifs 翻訳自己照合

確認者: EMMA Samba large mount.cifs担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/cifs-utils/7.9/linux/8/mount.cifs/c03946ba5da2
全310セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 7.9。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: licenses/COPYING。

sourceSha256: c03946ba5da23c55910b619cd5e2d3dda05169703f2dcc257733f007e42aaf29
irSha256: 1c109c3fb5d2092e051f8576e0560c9685b5b5a1f43e62652134f6034b07a0df

未受理。queue/生成/commitなし。

## 全文抽出・意味レビュー

source.html bodyとIR blocks（全segment/term/literalの文書順復元）は空白除去後37558文字で完全一致。original.rstとlicenses/COPYINGもmanifest SHAと一致。COPYINGはGNU GPLv3。原文とライセンスは改変せず保持。

310segすべてについて読み書き方向、Unix拡張の有無、クライアント/サーバー、既定値・カーネル版・数値・否定を照合。passwordとpassword2のプロンプト有無、uid/gidとcruid、nopermでもサーバー検査は残ること、looseのデータ破損注意、バックアップ目的の対象者制限を維持。

原文の不整合は独自修正しない。s0074/s0286 dynpermは原文がserverと記すためserverと訳す。s0205は正の整数と述べつつ0を許可する原文を保持。s0164の角括弧は原文に閉じがない。s0289の保護トークン%pと後続asswordは原文からusername%passwordを復元する。文書末尾のVFS版2.18/概ねkernel5.0は原文の記述で、取り込み製品版cifs-utils7.9とは区別する。


## キュー受理の最終バインド

sourceSha256: c03946ba5da23c55910b619cd5e2d3dda05169703f2dcc257733f007e42aaf29
irSha256: 1c109c3fb5d2092e051f8576e0560c9685b5b5a1f43e62652134f6034b07a0df
draftSha256: 5a86d2e243d758ddb98d756adb7babebab3417bac0812fe23d18cea3036f2f5e

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
