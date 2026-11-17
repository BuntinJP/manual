# Swaks全546セグメント 最終自己照合

EMMA diff-intake担当。2026-11-17。翻訳者による自己照合、独立レビューではない。
保存source.html article全文とrequest/glossaryを5範囲に分けて読み、全説明/条件/数値/例/識別子を照合。原文は公式GitHub v20240103.0のPOD表示。末尾にGPL-2.0-or-later声明あり。保存原文維持、別ライセンスファイルなし。

先行partとの差分: なし。s0001–s0450は送付済み各partと文字列完全一致。残りs0451–s0546を追加し全文を構成。原文の誤記候補は修正せず下記に記録。

sourceSha256: 806746c4abf34f191b73af96d6b7cdfbac11c57a598cfd2a239186673ede0ab9
irSha256: de9b0e89363caa785f9d35d09eb8618585d7e2b8b811c5eda87a169bcd910de6

# Swaks部分翻訳自己照合
EMMA diff-intake担当。2026-11-17。翻訳者による自己照合。実照合範囲 s0001–s0120、120件。request/glossaryと保存source.html articleの対応本文・例を読んで意味照合。本文とDATA、エンベロープとヘッダーを区別。設定ファイル→環境変数→CLI、no-解除、空引数/未指定、--configの最初指定優先、環境変数のソート、From-Fileの@/@@/STDIN、送信者既定/最後の受信者ドメインを重点確認。オプション仕様の識別ラベルArg-Required等は保持。source/IR変更なし。全文完了ではない。コード例はIR literal保持。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。


# Swaks s0121–s0240 部分翻訳自己照合
EMMA diff-intake担当。2026-11-17。翻訳者による自己照合。実照合範囲120件。保存HTML articleのPROXY停止点〜CRAM-MD5本文を全文で読み、request/glossaryと対応照合。QUIT/切断/送信直後の差、実際に試みない任意段階の扱い、タイムアウト0と30s、ポート24/25/465、TLS任意とoptional-strict、既定では証明書検証不要、CA/host検証の区別と転送方式制約を照合。表のプロトコル名/オプションは原文保持。

原文の注意: s0143/s0145はDATA/末尾dotがserverから送られると書かれているため、clientへ無断訂正しない。s0213末尾もcertificate contains a specific certificateという原文表現を保持し、特定hostnameと推測で置き換えない。s0219秘密鍵の項でも原文がcertificateと書くので「証明書」のまま。いずれも翻訳者が仕様を断定するものではなく、保存原文の記述を訳す。

全546件の完成ではない。queue/原文/IR変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。


# Swaks s0241–s0350 部分翻訳自己照合
EMMA diff-intake担当。2026-11-17。翻訳者による自己照合。実照合110件。保存articleのDIGEST-MD5以降、XCLIENT/PROXY/DATA導入を読み、全requestと意味照合。認証失敗と認証未試行のstrict挙動、パスワード出力秘匿と入力秘匿の違い、XCLIENT属性グループと開始順序、PROXY v1/v2と相互排他/必須項目/12byteヘッダー、DATAファイル自動推定の非推奨・@/@@を照合。

原文s0322は--proxy-commandの説明でもtransport protocolと記すため、原文どおり転送プロトコルと訳し、LOCAL/PROXY・既定PROXYを保持。s0305原文continue to XCLIENT was not advertisedは文脈に従い未広告時続行と訳す。%NEWLINE%などが保護トークン途中分割でも残りの文字列を厳密維持。全文完成ではない。原文/IR/queue変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。


# Swaks s0351–s0450 部分翻訳自己照合
EMMA diff-intake担当。2026-11-17。翻訳者による自己照合。実照合100件。保存article対応箇所を読み、DATAトークン/MIME添付/ヘッダー/出力制御をrequest/glossaryと照合。パスワードを含むdumpと含まないdump-as-body、次の添付だけへ適用する名前、後続全添付へ適用するtype、本文とその他の間のtypeリセット、no-header-Subjectが全header設定を除去、silent1/2/3と例外、千分の1秒と整数秒を確認。

原文%NEWLINE%の別名が..BODY..であるためそのまま保持。s0423は原文でもオプション名を伴わない独立説明であり、意味を変えて別項へ移動しない。コードと出力記号は維持。全文完成ではない。原文/IR/queue変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。


# Swaks s0451–s0546 部分翻訳自己照合
EMMA diff-intake担当。2026-11-17。翻訳者による自己照合。実照合96件。保存articleのdump以後を全文読み、終了コード/移植性/ライセンス/連絡先まで意味照合。dumpは送信しないがパスワードを隠さないこと、終了6より具体的な23優先、2025-02-01は原文の削除予定の下限で現在の仕様確認ではないこと、Windowsの未検証機能を保持。GPL2以降の許諾文/無保証とFSF住所を省略しない。通知案内を訳しただけでメール送信/登録はしない。


queue受理/生成/commitは未実施。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。


## キュー受理の最終バインド

sourceSha256: 806746c4abf34f191b73af96d6b7cdfbac11c57a598cfd2a239186673ede0ab9
irSha256: de9b0e89363caa785f9d35d09eb8618585d7e2b8b811c5eda87a169bcd910de6
draftSha256: 0a4eec7df0e9eade8c5bb7db41260fa8803bdc8e92f1329ac025f866cdd3fa62

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
