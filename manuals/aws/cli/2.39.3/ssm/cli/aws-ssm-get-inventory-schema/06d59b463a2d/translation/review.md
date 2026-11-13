# 日本語訳レビュー 2026-11-13

sourceSha256: 06d59b463a2d40b2281742b510439bff9a786ca3c1ddc715460099c286aaa673
irSha256: 7ff8595f03f0589a174f954eef821701164ae1e5014bf8157bf87f7b33a8a925
draftSha256: a642fa8d6ce2208710e027b96aa857dbba138d7526cc5d577f151847d9a50bf2

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
