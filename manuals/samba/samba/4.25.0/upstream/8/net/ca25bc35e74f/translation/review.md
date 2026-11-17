# net全1130セグメント 翻訳自己レビュー

3分割すべて完成。全体validateTranslation成功。次の記録を統合して参照。

# net s0001–s0500 翻訳自己レビュー

2026-11-17。EMMA、自身で全文意味照合（独立レビューではない）。最初の分割は500seg。残り630segも後続2分割で完了し、この全体候補へ統合済み。未翻訳を英文で埋めていない。

原文/IR/訳について全対象を読み照合。共通CLI説明はkind/text/protected完全一致のみ再利用し文脈確認。コマンド名・コマンド書式の見出しと例は文字を維持。通常見出しと説明は翻訳。既存validateTranslationをsubset IRに対して実行し成功。sourceとmanifest materialsのSHA一致。

body全体/IR blocks全文の空白除去後69663文字完全一致（全文抽出監査のみで翻訳全体完成の意味ではない）。ISO-8859-1原文と明示的UTF-8変換sourceの区別はsource-observations参照。ライセンス材料なしは独自の再配布許諾確認とみなさない。

特に確認: ドメイン間信頼の方向（Sambaを信頼される側とするADDと外部を信頼するESTABLISH）、SIDとRID、削除済ADS KEYTABコマンドのSamba4.21境界、旧説明を現行利用可能と誤認させない見出し、パスワード未指定かつno-pass未指定時のみ要求する条件。RAP未実装の注意を保持。s0345の未閉じ括弧は原文由来。s0299の0x20(workstation)は原文どおりで独自修正なし。

sourceSha256: ca25bc35e74faa50f139b11a559ea1557b0684730a8c348203cc4f30ee5e7adf
irSha256: 6e2700bceea8d21b010e3f228e28a9cde1c14924bd3e9a821441a46af81df3fe

queue/生成/commitなし。


# net s0501–s1000 翻訳自己照合

2026-11-17。EMMA。全対象の原文/IR/候補を読み、意味照合。条件/否定/数値/既定値/保護トークンを保持。独立レビューではない。全1130seg統合候補で既存validateTranslation成功、source/materials SHA一致。原文body/IR全文は空白除去後69663文字一致。コマンド書式と数値列、PACタイプ名、暗号名、literal例は保持。未翻訳英文で補填していない。

個別確認: ADS KEYTAB削除済コマンドの版境界、暗号マスクと省略時28、IDMAP修復の既定動作、CONF IMPORTの全消去/単一section置換/試行実行の区別、usershareゲスト条件、WitnessのANDとregex内OR、all選択の排他性、nodeid=-1、CLUSTERLEVELの不可逆upgradeと試行既定を照合。

原文不整合: s0561のkerneros、s0785/0786のsdd1、s0920のstream2aboubleはコマンド綴りとしてそのまま維持。s1114のexitsはserverid存在確認という文脈で訳した。usershare説明の'*'は原文どおり1文字以上とし、ゼロ文字へ独自修正なし。入力元ISO-8859-1の原本とUTF-8変換後sourceのSHAは別個に検証。

sourceSha256: ca25bc35e74faa50f139b11a559ea1557b0684730a8c348203cc4f30ee5e7adf
irSha256: 6e2700bceea8d21b010e3f228e28a9cde1c14924bd3e9a821441a46af81df3fe

queue/生成/commitなし。


# net s1001–s1130 翻訳自己照合

2026-11-17。EMMA。全対象の原文/IR/候補を読み、意味照合。条件/否定/数値/既定値/保護トークンを保持。独立レビューではない。全1130seg統合候補で既存validateTranslation成功、source/materials SHA一致。原文body/IR全文は空白除去後69663文字一致。コマンド書式と数値列、PACタイプ名、暗号名、literal例は保持。未翻訳英文で補填していない。

個別確認: ADS KEYTAB削除済コマンドの版境界、暗号マスクと省略時28、IDMAP修復の既定動作、CONF IMPORTの全消去/単一section置換/試行実行の区別、usershareゲスト条件、WitnessのANDとregex内OR、all選択の排他性、nodeid=-1、CLUSTERLEVELの不可逆upgradeと試行既定を照合。

原文不整合: s0561のkerneros、s0785/0786のsdd1、s0920のstream2aboubleはコマンド綴りとしてそのまま維持。s1114のexitsはserverid存在確認という文脈で訳した。usershare説明の'*'は原文どおり1文字以上とし、ゼロ文字へ独自修正なし。入力元ISO-8859-1の原本とUTF-8変換後sourceのSHAは別個に検証。

sourceSha256: ca25bc35e74faa50f139b11a559ea1557b0684730a8c348203cc4f30ee5e7adf
irSha256: 6e2700bceea8d21b010e3f228e28a9cde1c14924bd3e9a821441a46af81df3fe

queue/生成/commitなし。


## キュー受理の最終バインド

sourceSha256: ca25bc35e74faa50f139b11a559ea1557b0684730a8c348203cc4f30ee5e7adf
irSha256: 6e2700bceea8d21b010e3f228e28a9cde1c14924bd3e9a821441a46af81df3fe
draftSha256: 09126b0c9a0f98bfe0509a244d08aa518985db03bf25372df98a917ce52772ee

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
