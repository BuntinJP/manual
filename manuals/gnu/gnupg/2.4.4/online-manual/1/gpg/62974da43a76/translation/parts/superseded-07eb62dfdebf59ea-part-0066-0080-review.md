# GnuPG gpg 部分翻訳自己照合・受理保留

対象 s0066–s0080（15seg）。保存原文HTMLの対応箇所、request/protectedを読み、各訳の条件、否定、既定値、期限形式、鍵機能、署名対象一致を自己照合。独立レビューではない。原文s0080の「from the passphrase」は不自然だが原文どおり訳し、入力を求めない等への意訳はしていない。s0070では「*」指定は未失効かつ未期限切れ、フィンガープリント指定は未失効のみ、という条件差を維持。

重大なIR欠落を発見したためこの旧IRに対する受理は保留。source.html行823の--edit-key後～1136の--sign-key前にある全サブコマンドや説明が欠落。parse.tsのUL/OL変換で直下LIのみを処理するため、UL直下UL・裸テキスト・SAMPが捨てられる。全文監査結果gpg-non-li-audit.jsonに23個の非空非LI子要素を記録。list-options/verify-options/trust-model/auto-key-locate/import/export/filter/debug/pinentry等にも及ぶ。原文不変で正式解析入力修正・新IR/ジョブが必要。翻訳JSONで勝手な補完はしていない。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。
