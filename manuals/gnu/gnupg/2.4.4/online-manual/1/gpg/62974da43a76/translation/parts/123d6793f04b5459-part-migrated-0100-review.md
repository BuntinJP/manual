# GnuPG 修正IRへの既存100seg移植

旧候補4partの100segを、新requestのkind/text/protectedの完全一致・一意一致を確認して移植。旧s0001–s0077→同ID、旧s0078–s0100→新s0120–s0142。対応はgpg-migration-map.json。--edit-keyの後に回復したサブコマンド説明が挿入された以外、旧対象本文の順序・所属節・前後のコマンド名は維持され、移植対象の意味に変化はない。既報4partの訳文は文字列不変。原文source hash不変。各範囲の意味自己照合は旧part reviewを参照。独立レビューではない。

追加された保存資料を確認。provenance/gpg-gnupg-2.4.4.texi冒頭がGnuPG manualの一部でcopyingはgnupg.texi参照と明記。licenses/gnupg-manual-gnupg-2.4.4.texi @copyingは文書そのもののcopy/distribute/modifyをGPLv3-or-laterで許可。COPYING.gnupg-2.4.4はGPLv3原文。保存済み著作権/許諾文を保持し、翻訳者による承認訳の主張はしない。タグとHTMLのバイト同一性は主張しない。旧レビューの「許諾根拠未保存」はこの資料追加で解消。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。
