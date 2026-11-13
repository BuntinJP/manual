# 日本語訳レビュー 2026-11-13

sourceSha256: c7fcd8a6939eceec97211bf0be0ac3d63b11b79464b03b1bfb8694dee2174347
irSha256: 6315eaa426c8d196536d7cd1d0df6d6ef6ee9f2b9ab1315144eb104e67891249
draftSha256: c714586a9c113175d05b5e9d6a24d8291892089a39de1414b3f0a0b0ee95dd1b

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
