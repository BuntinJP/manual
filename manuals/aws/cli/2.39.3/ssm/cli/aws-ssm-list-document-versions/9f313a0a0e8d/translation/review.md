# 日本語訳レビュー 2026-11-13

sourceSha256: 9f313a0a0e8d9e736c268f60f940a859e9438f8f5d3b83a8d2b3ce0e6c7f5d4e
irSha256: da4994c76f5e0fd3883e740761a66688b0709e402a539a4e0ca805210558012b
draftSha256: d0f29bc1e2ce54235eda8cd3fae5dfa43cf1561a4e64ed5512fb935f72c9bf92

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
