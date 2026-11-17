# WireGuard tools 1.0.20260223 wg(8) 翻訳照合

確認者: EMMA Sol content担当（翻訳者による自己照合。独立レビューではない）。2026-11-17。

保存済みsource.roff全文をrequest64セグメントおよび候補と照合。parser/mandoc.htmlの.manual-textとIR文書順復元テキストは空白除去後8563文字が完全一致。見出し10、表0、pre0。原文コード例はこのIRではparagraph内の保護トークンであり、書式・鍵生成パイプライン・設定例・デバッグ例を変更せず保持した。

- showのインターフェース既定all、interfaces列挙、dumpの列順、スクリプト向けのTAB/LFを保持。
- set/remove、未指定または0のランダムポート、空鍵ファイルによる削除、事前共有鍵の任意性を保持。
- allowed-ipsは既定置換と+/-による差分適用、接頭辞なしの追加、空文字で全削除を区別。
- keepaliveの既定off、1–65535秒（両端含む）、0/off無効、例25秒、FwMark32ビット/0xを照合。
- setconf/addconf/syncconfの上書き/追加/差分とセッション非中断の区別を保持。
- Interface1つ/Peer複数、PrivateKey/PublicKey必須、AllowedIPsの受信送信方向、Endpointの認証済み最新送信元への更新を照合。
- WG_HIDE_KEYSはneverの場合に秘密鍵を表示する逆転しやすい条件を照合。DNS再試行既定15回と非恒久エラー条件を保持。
- 原文にある公開サンプル鍵をそのまま保持。ユーザーの実際の秘密鍵ではない。記載コマンドは翻訳資料であり実行していない。

既存validateTranslationで64/64成功。保存原文内に独立した翻訳/再配布許諾文は確認できず、別リリースの許諾をこの文書へ推定適用していない。公開判断の観察として記録し、ローカル生成とは区別する。重大な未解決の抽出漏れ/誤訳は検出していない。


## キュー受理の最終バインド

sourceSha256: 9e434e23208befc87b5c3efe1b8d0890d2fd297f33ab18d5d9cbe811a809c0c0
irSha256: 4ef78714a2de8fdb62d19d5d62a5b822847f7a405d579d6c4a3b7aa13789a20b
draftSha256: 57eff8677f2b60b340ed1b19f81cb9cf8a9f14c17e86100440fc3f334fe0ae30

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
