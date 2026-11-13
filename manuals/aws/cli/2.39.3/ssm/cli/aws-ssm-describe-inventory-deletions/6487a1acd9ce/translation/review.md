# 日本語訳レビュー 2026-11-13

sourceSha256: 6487a1acd9cef40903228e872342ad5f95e0b865ab529ca22741b772f306d638
irSha256: 927dffb23b45c87e3ac062f719def9c74057a70ae506d79554986cb3ca416e6f
draftSha256: 14171d8a1762d40e1414d10c585b3fa6e9980e19c4747545efbccbb06ae593e9

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
