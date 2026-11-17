# samba-tool 全1452セグメント自己レビュー

3分割の候補を統合済み。全件翻訳・意味照合完了。以下は各範囲の確認記録。

# samba-tool s0001–s0500 自己レビュー

2026-11-17 EMMA。全500セグメントを原文/IR/訳で意味照合。共通CLI説明はkind/text/protected完全一致のみ再利用。コマンド書式の見出しは構文を保持し、説明文は翻訳。既存validateTranslationのsubset検証成功。原文SHA検証成功。文書全体body/IRは空白除去後60575文字完全一致（抽出の確認であり訳全体完了ではない）。

RSA2048/DER/PEM条件、Key Credential LinkのOR削除条件、DNS静的/動的の方向、認証ポリシーのfrom/toとユーザー/サービス/コンピューター/デバイスの役割、監査/強制と保護/解除の排他条件を照合。サイロ割当・メンバーシップ・認証条件のANDを省略していない。

s0139の<title>computer keytrust delete</title>は原文に見える文字列を保持。原文VERSIONの4.25.0表記に従う新版pathで、古いcurrent注記はsource-observationsの追記で訂正済み。ライセンス資料なしを独自許諾確認としない。この分割の対象外だったs0501–s1452も後続分割で完了し、全体候補へ統合済み。

sourceSha256: 5fdaae311af27039a37468a44e105dc20c74d473522704f7467411eb86d60058
irSha256: 2e3ef408fb8118c8a191b586c530b9cce2bea1a970419832ddee84b3e858df83

queue/生成/commitなし。

# samba-tool s0501–s1000 自己照合

2026-11-17 EMMA。全500segを原文/IR/訳で読み意味照合、subset validateTranslationとsource SHA成功。全体body/IRは60575文字一致。前範囲と完全同一のkind/text/protectedのみ再利用し文脈を確認。書式見出しとキー名を保持。

機能準備forest/domain両指定・無指定時の動作、KDS秘密属性の表示条件、パスワード既定値と単位、DC複製だけで参加しない条件、GPO CSE永続パス要件、JSON配列のbyte扱いとWindows/Linuxの拡張GUID条件を照合。

原文の疑義を独自修正しない: PSO show/userとshow-user/psoの引数表記、domain provision説明がdcpromoと同文、gpo aclcheck直後のCreate an empty GPO、winbind向けだがonly AD DCというsecurity設定説明、removegpo直後のShow informationは原文を保持。source/licenseは変更しない。

sourceSha256: 5fdaae311af27039a37468a44e105dc20c74d473522704f7467411eb86d60058
irSha256: 2e3ef408fb8118c8a191b586c530b9cce2bea1a970419832ddee84b3e858df83

s1001–s1452も後続分割で完了し、全体候補へ統合済み。queue/生成/commitなし。

# samba-tool s1001–s1452 自己照合

2026-11-17 EMMA。全452segを原文/IR/訳で読み意味照合。subset validateTranslation成功、source SHA一致。全体body/IR60575文字一致。コマンド構文・literal保持、完全同じkind/text/protectedの再利用のみで文脈確認。残りを英文で補填していない。

NT ACLだけ更新する直接操作とVFS操作の差、OU再帰削除、RFC2307 UID一意性とgidNumber/default home/shell、無効化時primary group維持、KeyTrust OR条件、単一DCでのパスワード同期を照合。原文s1277の---gecos'、末尾visualize説明の「2サブコマンド」だが列挙3つという不整合、<title>文字列はそのまま保持し、独自訂正しない。

sourceSha256: 5fdaae311af27039a37468a44e105dc20c74d473522704f7467411eb86d60058
irSha256: 2e3ef408fb8118c8a191b586c530b9cce2bea1a970419832ddee84b3e858df83

queue/生成/commitなし。



## キュー受理の最終バインド

sourceSha256: 5fdaae311af27039a37468a44e105dc20c74d473522704f7467411eb86d60058
irSha256: 2e3ef408fb8118c8a191b586c530b9cce2bea1a970419832ddee84b3e858df83
draftSha256: 105d60cc3bec8b7ce1bef5968a8b32434a82e0dad41d89d6bd247d02f487423f

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
