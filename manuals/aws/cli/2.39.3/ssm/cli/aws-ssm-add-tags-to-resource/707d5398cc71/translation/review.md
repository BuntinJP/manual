# 日本語訳レビュー 2026-11-13

sourceSha256: 707d5398cc712b266f3c0f7b725a6d3d5bf373dd9bc99e29704973dd623bdcc9
irSha256: d3adeb00fa6992ffbc330dbcb3e35f34ef638ac90efbe483ea5526924098b090
draftSha256: 7fe9f395c0ccedd2ba325d2ee279e5d55ef071ba733aa3c8cf19a4eba1eeda97

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
