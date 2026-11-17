# Tripwire 2.4.3.7 twconfig(4) 翻訳照合

確認者: EMMA Sol content担当（自己照合）。2026-11-17。

全68セグメントとsource.roff全文を照合。保存済みmandoc HTMLとIR文書順復元テキストは空白除去後8913文字が完全一致。10見出し、39段落、6literalを保持。必須変数5個の一覧や定義構文/ログ例はliteralのまま保持し、本文がないと誤認していない。空segment s0028/s0054は原文の空termに由来し、架空の見出しを補わず維持。既存validateTranslation 68/68成功。

- サイト鍵/パスフレーズでの署名、設定変数の大文字小文字、HOSTNAME/DATE変更不可を保持。
- 先頭列#コメント、変数置換構文、TEMP権限700、lateprompt既定false、loose directory対象プロパティーを照合。
- syslogの4イベントとuser/notice、REPORTLEVEL0–4/既定3、DBPRINTLEVEL0–2/既定2、EMAILREPORTLEVEL0–4/既定3と上書き条件を保持。
- MAILMETHODの許容2値、SMTP以外ではhost/port無視、sendmailの単独ピリオド処理、MAILNOVIOLATIONSの否定条件を照合。
- 原文のUnicodeハイフンをコマンドやプロパティーマスクで無断ASCII化していない。
- 配布物版2.4.3.7と本文説明系列2.4を区別。

許諾文の翻訳にはTripwire, Inc.承認条件があるため、3許諾段落および著作権表示を生成本文でも英語原文で保持し、日本語は非公式参考訳と明記した。ライセンス原文資料は不変。記載コマンドは資料として翻訳し、設定変更・メール送信などを実行していない。重大な未解決の誤訳/抽出漏れは検出していない。


## キュー受理の最終バインド

sourceSha256: 8cb973a9914c8a9e22037c05ecaa24c6279f873f00e0cf57993ed5164ad6302d
irSha256: 545794ce185ddaf999671aaa481fe85014ece893f9c2f21ae125f294e09d7485
draftSha256: 2ec6cafaf946c3533ea7b592556e3e8ecdc77290d7baec1409cedd284e2c64cf

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
