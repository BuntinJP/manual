# 日本語訳レビュー 2026-11-13

sourceSha256: ba6a448cde21388ece0256a6df7299dc3bf82312083c23bd6ad4e7c154a9fa39
irSha256: a28849ad2a474ff086ea4278e7f163c7e9596435927702d652681fabbff2d97a
draftSha256: 04f8cb0d65f764595ab9a4cad65ce8c4e1fbd2c99db2bc9a6e71a98066ab4f27

## 確認者と範囲
翻訳担当とは独立したレビュー担当が原文と訳文を比較。実際の確認範囲: Exact reuse only when kind/text/protected/JA agree; all new non-identical natural-language pairs read, unchanged schemas/code/token-only not semantic retranslation.

原文HTML div.body とIRの文書順テキストは空白を除き完全一致。独立監査でも15文字超本文ノードの欠落なし。短い断片/ブラウザDOM全体や実API実行の検証とは区別する。

全ID、保護トークン、style入れ子、source/IR SHAを公式validateTranslationで確認し、公式IRから表・コードを保持して生成した。自動検証だけを意味レビューとみなしていない。

重大な翻訳上の問題は確認されなかった。原文の版は固定し、最新サービス仕様を独自補正していない。公開前にサイト全体verifyとE2Eを別途実施する。Gitマージは運営者が行う。
