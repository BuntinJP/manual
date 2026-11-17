# samba-tool s0001–s0500 自己レビュー

2026-11-17 EMMA。全500セグメントを原文/IR/訳で意味照合。共通CLI説明はkind/text/protected完全一致のみ再利用。コマンド書式の見出しは構文を保持し、説明文は翻訳。既存validateTranslationのsubset検証成功。原文SHA検証成功。文書全体body/IRは空白除去後60575文字完全一致（抽出の確認であり訳全体完了ではない）。

RSA2048/DER/PEM条件、Key Credential LinkのOR削除条件、DNS静的/動的の方向、認証ポリシーのfrom/toとユーザー/サービス/コンピューター/デバイスの役割、監査/強制と保護/解除の排他条件を照合。サイロ割当・メンバーシップ・認証条件のANDを省略していない。

s0139の<title>computer keytrust delete</title>は原文に見える文字列を保持。原文VERSIONの4.25.0表記に従う新版pathで、古いcurrent注記はsource-observationsの追記で訂正済み。ライセンス資料なしを独自許諾確認としない。未翻訳s0501–s1452は本候補に含めていない。

sourceSha256: 5fdaae311af27039a37468a44e105dc20c74d473522704f7467411eb86d60058
irSha256: 2e3ef408fb8118c8a191b586c530b9cce2bea1a970419832ddee84b3e858df83

queue/生成/commitなし。
