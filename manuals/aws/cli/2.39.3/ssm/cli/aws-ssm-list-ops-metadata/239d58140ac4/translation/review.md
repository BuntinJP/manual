# 日本語訳レビュー 2026-11-13

sourceSha256: 239d58140ac44062ebe05ace90b2cbd35465ad3fc78e3cb9d1eb1a0d216a8e11
irSha256: fc90f4c56bf04bac02468dbe33134e8654022076df8abbffc61364f4aedd5f22
draftSha256: 67ae550af0510a42ee8adf831ec6f058a8cc11099e537988261ce5e26c1915d9

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
