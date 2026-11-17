# rpcclient 全634セグメント自己照合

2026-11-17。担当による自己照合（独立レビューではない）。

対象: manuals/samba/samba/4.25.0/upstream/1/rpcclient/e2c0b433c8ad

原文source.html、request、glossary、manifest、source-observationsを確認。原文body全文とIRの全ブロックを文書順に復元したテキストは空白除去後24579文字で完全一致。見出し29、literal/pre2、table0が一致。selector外の本文欠落なし。原文SHAとIR SHA一致。全634segおよび500/134の各subsetで既存validateTranslation成功。

原文・IR・日本語訳を全件照合し、コマンド名、プロトコル名、書式、例、保護トークンを保持。共通文はkind/text/protected一致で再利用し、rpcclientのクライアントオプションとして文脈を再確認。s0108はunless A or Bを「Aを指定せず、Bも指定していない場合」と明確化。

## 個別確認

- 認証と署名と暗号化を区別。connectは署名・暗号化なし、schannelsignは署名のみ、seal/schannelは暗号化。timeoutの単位はミリ秒。
- ドライバー情報の削除と実ファイルの削除を区別。アーキテクチャー無指定の対象、DPD値3、情報レベル1/2/3/5、Windows > 2k、Windows 2000(version3)を保持。
- enumdataの原文にある未実装の注意を保持。
- playgdiscriptonprinteric の説明は原文でも Create Printer IC のため、別の動作へ独自修正しない。samlookuprids も原文 Look up names のまま訳す。
- schannel説明s0616は原文で同文2回のため、訳も2回保持。
- 末尾のLuke Leightonの古い警告は原文の引用として翻訳。現在のMicrosoft文書状況に関する新規主張へ書き換えていない。
- manifestに追加ライセンス資料なし。原文の著者表記とバージョン4.25.0を保持。ライセンスの具体的条件を推測して加えていない。

sourceSha256: e2c0b433c8ad0ac1f077bae30ae0fe2de9321ae008d51800e155bda96f6cdf07
irSha256: 8f48a43b7bc2e40d217216a8c49d3c019c43d7a12f5ab0dc1535146b97a27120

候補: ff403ee7c2565715-ja.json
分割候補: ff403ee7c2565715-part-0001-0500-ja.json、ff403ee7c2565715-part-0501-0634-ja.json

queue/生成/commitなし。


## キュー受理の最終バインド

sourceSha256: e2c0b433c8ad0ac1f077bae30ae0fe2de9321ae008d51800e155bda96f6cdf07
irSha256: 8f48a43b7bc2e40d217216a8c49d3c019c43d7a12f5ab0dc1535146b97a27120
draftSha256: 52f7a347ed15e58855fbff5764ee443eaa877811d0dfa442636a2a120d30a982

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
