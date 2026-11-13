# 日本語訳レビュー 2026-11-13

sourceSha256: b7c45bbf86a5dfce9c3441313d62b14da44cff211c4b1b9ca38a7d1946d315ac
irSha256: a252abec08138530151ce87fa1942c8af1d5e566cbfd2477e68b73148c06cad4
draftSha256: 11e67906ffbc3bcf088827af48a6b0034cdc22b6297bb7ec88da44a02d49ea57

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
