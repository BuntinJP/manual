# 日本語訳レビュー 2026-11-13

sourceSha256: cea630512d2a5ff824d350e4405d40434490aebdfffcab6c170da0880449f7d9
irSha256: af3be84beb9f9b9c306227ba5d952f98e265adb754459b6285a74e6df742c35a
draftSha256: 2a056abe89e5a0fdb3075d2201590acd33cb98a83d2dc1321c76df2cc3170217

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
