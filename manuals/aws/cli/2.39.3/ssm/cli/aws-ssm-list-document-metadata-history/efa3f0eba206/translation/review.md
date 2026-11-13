# 日本語訳レビュー 2026-11-13

sourceSha256: efa3f0eba2065d507202d79dcf687e6d792777f3266a45f1185f87f0c6301454
irSha256: 59d29b132e09afe146fc33b076301b87f143362a7eb6fdcd7a01a67b730c7628
draftSha256: 5497518094ceccfa354499d23afab49c2c6a5e049866239a66dd774d4d02c0c8

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
