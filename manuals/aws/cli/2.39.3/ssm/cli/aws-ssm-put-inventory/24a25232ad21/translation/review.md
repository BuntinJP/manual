# 日本語訳レビュー 2026-11-13

sourceSha256: 24a25232ad21a8fe7f8e281409bc13cac9028bb8edb6ce4a8c35cda72bcbe9d1
irSha256: 60dc45b07ea8b6c7ef968a465752202eb882ea921a1f92fab95fd634528206f1
draftSha256: 64fa3e533a18974f349911e7e96640cca565adbc0122a313a0c28d29bb23fb22

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
