# 日本語訳レビュー 2026-11-13

sourceSha256: 323454cbdc1bdaba9300c8bf77d0350ea0cffcc9fd60fb24dd80e2bbf0a3c325
irSha256: 88cf15f6b34d9257b86dc84728c67757aaf81337d5eaed3bd8aebd81d551f5b5
draftSha256: 3053d6f33a239935ef56045baf675795c0e9d4868608d743ad9620a2ba85d82a

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
