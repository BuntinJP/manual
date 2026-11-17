# GnuPG gpg 2.4.4 全606seg 翻訳候補最終自己照合

新job 123d6793f04b5459。旧IR454segの非LI子欠落は正式parser修正後の606segに移行済み。source.html不変。全606segを対象に原文HTMLとrequest/protectedの意味自己照合を完了。独立レビューではない。各partレビューに照合範囲・原文固有の問題・既定値/条件/否定/単位の確認を記録。文書版は末尾2.4.4/2024-01-25で、最新バイナリー版の主張ではない。

## 統合

各既報partを文字列不変で統合。重複ID0、欠落0。既報後の訳文修正なし。旧100segはkind/text/protected一意完全一致・文脈一致で移植し、対応はgpg-migration-map.json。新たに回復した152segも全訳済み。未訳英文の便宜的埋めはない。コード構文、名前だけの項目、原文例、識別子/文書フッターは意図的に保持。

## 許諾

保存済み公式gnupg-2.4.4 doc/gpg.texi冒頭のmanual所属とgnupg.texi参照、同doc/gnupg.texi @copyingの文書GPLv3-or-later、COPYING原文を確認。これらの全文/著作権告知はmanifest材料として保持。製品ライセンスからの推測ではない。オンラインHTMLとタグ再生成のバイト同一性は主張しない。非公式翻訳であり権利者承認は主張しない。

## 全文検証

- source.html: SHA256 62974da43a76a48c706d603bef0963d857436f266e228c2b859e29e55dcd379d
- ir.json: SHA256 066c024b9bc7c56fcde9f0be5cee6c4a6032cf43e6c41cfc80a50e83a449d071
- translation/request.ja.json: SHA256 6b6e71183b046f2987b73ffe9bff672d5dd45df81d614e492291e2081c2fb463

統合part一覧:
- 123d6793f04b5459-part-0078-0119-ja.json
- 123d6793f04b5459-part-0143-0175-ja.json
- 123d6793f04b5459-part-0176-0200-ja.json
- 123d6793f04b5459-part-0201-0230-ja.json
- 123d6793f04b5459-part-0231-0260-ja.json
- 123d6793f04b5459-part-0261-0290-ja.json
- 123d6793f04b5459-part-0291-0325-ja.json
- 123d6793f04b5459-part-0326-0350-ja.json
- 123d6793f04b5459-part-0351-0375-ja.json
- 123d6793f04b5459-part-0376-0400-ja.json
- 123d6793f04b5459-part-0401-0425-ja.json
- 123d6793f04b5459-part-0426-0450-ja.json
- 123d6793f04b5459-part-0451-0480-ja.json
- 123d6793f04b5459-part-0481-0530-ja.json
- 123d6793f04b5459-part-0531-0565-ja.json
- 123d6793f04b5459-part-0566-0606-ja.json
- 123d6793f04b5459-part-migrated-0100-ja.json

各詳細レビュー:


---

# GnuPG 回復箇所42seg 自己照合

新IR s0078–s0119。保存source.html行830付近～1135のedit-key配下サブコマンド・前後段落と新requestを全文意味自己照合。旧IRでは欠落していたため全て新訳。独立レビューではない。元HTMLの不正なリスト構造を修正IRが文書順に保存しており、訳で隣項目への所属関係を新たに推測していない。

選択の*/0、local/non-exportableとnon-revocableの区別、1秒のタイムスタンプ、写真ID/通常IDそれぞれのprimary、notation削除の3形式、暗黙の3DES/SHA-1/Uncompressed、カード転送後のsave条件と取出不可、TPMは鍵を内部に移すのではなくその場で暗号化すること、TPM不可逆性/バックアップ警告、delkeyは公開部分のみ、trust即時保存、clean/minimizeの差、save/quitの違いを確認。s0093先頭のprimaryはコマンド名なので原文維持し、本文の鍵文脈では「主」を使う（汎用glossary「一次式」は不適用）。ライセンス資料の確認はmigrated-0100-reviewを参照。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0143–s0175 自己照合

33seg。source.html --noから--trustdb-nameまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。回復したlist-options/verify-optionsの各表示条件を含む。両者でpolicy URLs/notations/keyserver URLsの既定値が異なる点、show-sig-subpacketsの併用条件、RSA8192の非推奨警告、DSA1024境界、photo-viewerの大文字小文字の展開差・標準入力・ミリ秒待機、keyring追加と単独利用/keyboxdの差を照合。s0173原文--recv-fromは保護トークンのまま保持。汎用glossaryのprimary=一次式は鍵リング文脈には不適用。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0176–s0200 自己照合

25seg。source.html --homedirからtrust model alwaysまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。ホームディレクトリ設定の優先順位/portable限定、文字集合と暗号対象データの再符号化の無関係、Windows引数処理、圧縮0/-1/6と短形式限定の強制、BZIP2メモリー/速度比、証明レベル0例外、TOFUの5ポリシーとbatch時undefined、tofu+pgpの信頼順序、alwaysでも期限切れ等禁止を照合。s0180のiso-8859-15=Latin1別名とs0186のダッシュなしzは保存原文の記述を保持。現在の一般的実装について独自訂正しない。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0201–s0230 自己照合

30seg。source.html trust model autoから--tofu-default-policyまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。assert-signerの必要十分条件、署名鍵/主鍵双方の照合、auto-key-locate既定local,wkdとclear/nodefault順序、auto-key-import検証成功後のインポート、auto-key-retrieveの4段階順序と情報漏えい警告、鍵ID8/16文字、HKP不適用、LDAP既定値例外を確認。s0225はオプション名のみで、raw原文の未展開@var{value}もそのまま保存。s0222のaliasは原文にダッシュがないのでtoken維持。s0218の歴史的鍵サーバーの動作は原文の主張であり、現時点の稼働確認ではない。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0231–s0260 自己照合

30seg。source.html --max-cert-depthから--groupまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。lock-once/multiple/neverの解放条件と破損警告、N-1回とn=1時の挿入要求なし、権限警告のgpg.confからの抑止不可、安全メモリー既定no、cross-certification既定yes、recipientファイルに鍵がちょうど1つで完全有効とみなすこと、encrypt-toは他受信者がある場合のみで信頼検査なし、グループ展開1段階を確認。s0255/56は本文が同じでも異なる保護トークン（通常/hidden宛先）を個別確認。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0261–s0290 自己照合

30seg。source.html --ungroupから--import-filter/--export-filter導入まで全対応本文と新requestを読み、意味自己照合。独立レビューではない。senderの署名/検証両用途とユーザーID不明時のTRUST意味、試行復号のwindow-close/cancel差、AEADの2^n・6/22・64byte/4MiB、input hintの正の10進数、インポート時ownertrust消去と保持、PKS修復の不完全性、self-sigs-onlyとimport-clean併用時の最終clean抑止、restoreの優先を確認。s0280のsbbは原文の綴りを保持し、ssbへ勝手に修正しない。s0264原文status-fd（ダッシュなし）もtoken保持。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0291–s0325 自己照合

35seg。source.html keep-uidからexport-daneまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。drop-subkeyはexportのみ、drop-sigはimportのみで自己署名除外、scope別pub/sub/uid/sig、0と空文字列の日付表現、usageの順序ecsa?、backupで矛盾オプション上書き、export-clean/minimalはローカル鍵不変を確認。s0324原文は実際に「revocations of 3rd party certificate revocations」と失効を重ねており、訳もその記述を保持して意味を勝手に正常化しない。s0322の全署名削除はimport-cleanの自己署名を残す記述とは異なり原文どおり。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0326–s0350 自己照合

25seg。source.html mode1003から--s2k-digest-algoまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。mode1003の保護なし鍵の危険と2.4.0以前の非対応、コロンUTF-8固定、fingerprint/v5表現、CRLF正規化とno-textmode既定、MDC/AEAD選択、include-key-blockの副鍵/ユーザーID削減、個人優先設定でも全受信者対応に制限、AES128/SHA1既定を確認。s0340は名前だけの原文をそのまま保持。s0344はdisable-signer-uidの説明が既定動作のみを述べる原文なので、独自に無効化動作の説明を追加していない。s0328原文--with-colon単数形をtoken保持。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0351–s0375 自己照合

25seg。source.html --s2k-modeからdebug-level expertまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。S2Kの0/1非推奨と3既定、1024–65011712両端含む/切上げ、準拠モード単一、RFC2440のMDCなし危険警告、PGP7/8アルゴリズム制約、de-vs限定の失敗終了、dry-run不完全実装、debug数値境界を確認。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0376–s0400 自己照合

25seg。source.html debug guruから--set-filenameまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。guruキーワード時のみhash trace、4EiB/62、時刻!固定、status/logger/attribute FD区別、コメント60文字未満と署名保護なし、バージョン1/2/3/4回、notationの署名対象鍵と署名する鍵の各展開、critical/known-notation、空ファイル名の効果を確認。s0398/399の原文%-expandosはIRの部分保護token＋xpandosとして厳守し、「展開」を補って自然化。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0401–s0425 自己照合

25seg。source.html for-your-eyes-onlyからcommand-fileまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。埋込ファイル名の上書き危険/--output優先、暗号指定の相互運用性警告、受信者非表示の限界、5ダッシュ/空白と改行のハッシュ、From末尾空白、パスフレーズ再入力n+1と2.0/2.1条件、ファイル/引数の安全性警告、loopback誤入力時再質問なしを確認。PGP全版ZIPのみ等の原文の歴史的記述を現在の独自知識で修正していない。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0426–s0450 自己照合

25seg。source.html allow-non-selfsigned-uidからdefault-cert-expireまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。時刻検査の警告化とCRC/MDC警告、64/128bitと150MiByte、MD5/SHA1の別条件、no-default-keyringとno-keyringの差、list-sigs検証なし、session鍵と秘密鍵の区別/プロセス一覧漏えい警告、有効期限0/d/w/m/y/絶対日付を確認。s0445の「私たち」は原著者の立場の翻訳で、訳者の主張ではない。s0441例はIR literalで不変保存。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0451–s0480 自己照合

30seg。source.html default-new-key-algoから例のlist-keysまで全対応本文と新requestを読み、意味自己照合。独立レビューではない。現在/将来既定値は文書時点の記述として保持、special filenameは非負10進数FD、chuidのPATH/GNUPGHOME変更条件とWindows無効、list-config併用条件、廃止版2.2.8/2.3.9、例の構文/引数を確認。s0456名前のみを原文維持。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0481–s0530 自己照合

50seg。保存source.htmlの例fingerprint/verify、HOW TO SPECIFY A USER ID、FILTER EXPRESSIONS、TRUST VALUES neverまでの全対応本文は直前のsource読取で全文確認し、新requestと意味自己照合。独立レビューではない。鍵ID/フィンガープリント20byte/主副鍵!、DNとkeygrip40桁、メール完全/部分一致、未実装接頭辞、論理積優先、文字列/数値演算子と否定、0比較、flagの空白要件を確認。s0514/515のvalueは評価対象、括弧のno value allowedは演算子引数禁止として保持。例の式の引用符の乱れとtest/Testは原文/IR literal不変で勝手に修正しない。s0482の署名ファイル推定は原文例の説明で、前方s0029の非推奨警告も維持済み。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0531–s0565 自己照合

35seg。TRUST VALUES残りは先行source全文表示で確認、source.html FILESからNOTES/Programmatic見出しまでの全対応本文を再読し、新requestと意味自己照合。独立レビューではない。pubring.gpg/kbx両存時条件と2.1以前、ownertrustバックアップと復元順、秘密鍵リング旧版非使用、失効証明書の第三者アクセス危険、LANGUAGEフォールバック順を確認。s0539は原文がuse-keyboxd/use_keyboxdの2表記なので区別して保持。s0560 process text fileは実行コードのファイルの意味で訳出。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG s0566–s0606 自己照合

41seg。source.html Programmatic use本文から文書末尾まで全対応本文を再読し、新requestと意味自己照合。独立レビューではない。一時ホームディレクトリ終了、Key-Type先頭・パラメーター非継承・生成トリガー、%制御文の部分保護token、鍵保護なし/弱い乱数のテスト限定、default時Key-Usage省略/cert常時、ECC長無視と曲線必須、作成UTC/期限単位・2105・overflow未検査、指定失効者v4/v5、Handle100文字、メモリーロックと休止時の漏えいを確認。s0575原文は『next parameter』でパラメーター名が空欄のままであり、推測してKey-Typeを補わない。原文のsetuid/root助言や古いDSA1024/abcの例は文書の歴史的記述として保持しており実行していない。例はIR literal不変。ライセンス確認はmigrated-0100-review参照。既報part変更なし。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

---

# GnuPG 修正IRへの既存100seg移植

旧候補4partの100segを、新requestのkind/text/protectedの完全一致・一意一致を確認して移植。旧s0001–s0077→同ID、旧s0078–s0100→新s0120–s0142。対応はgpg-migration-map.json。--edit-keyの後に回復したサブコマンド説明が挿入された以外、旧対象本文の順序・所属節・前後のコマンド名は維持され、移植対象の意味に変化はない。既報4partの訳文は文字列不変。原文source hash不変。各範囲の意味自己照合は旧part reviewを参照。独立レビューではない。

追加された保存資料を確認。provenance/gpg-gnupg-2.4.4.texi冒頭がGnuPG manualの一部でcopyingはgnupg.texi参照と明記。licenses/gnupg-manual-gnupg-2.4.4.texi @copyingは文書そのもののcopy/distribute/modifyをGPLv3-or-laterで許可。COPYING.gnupg-2.4.4はGPLv3原文。保存済み著作権/許諾文を保持し、翻訳者による承認訳の主張はしない。タグとHTMLのバイト同一性は主張しない。旧レビューの「許諾根拠未保存」はこの資料追加で解消。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。

最終source全体監査: .y2m全文とIR blocksを文書順に復元し空白を除去した文字列が完全一致（135091文字、heading 30、literal 21）。部分一致だけでなく全文の順序/欠落なしを確認。


## キュー受理の最終バインド

sourceSha256: 62974da43a76a48c706d603bef0963d857436f266e228c2b859e29e55dcd379d
irSha256: 066c024b9bc7c56fcde9f0be5cee6c4a6032cf43e6c41cfc80a50e83a449d071
draftSha256: 8be008d3c8e0f31b045daaa70f33e9fff6a81726890b9a371c270a33e6c95eb3

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
