# 日本語訳レビュー 2026-11-13

sourceSha256: e60f0fb54514a707b54e399427dc848bf80576305897c11d379d2bce1cc4f8d6
irSha256: 3433f840677978f73bdfeecd4a2be91775906005844aaa03798672b9d405f4f3
draftSha256: 6c9b7e68187c0591d5da9280801ef4eef97c403cb874c7473958a6c9a41aa747

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
