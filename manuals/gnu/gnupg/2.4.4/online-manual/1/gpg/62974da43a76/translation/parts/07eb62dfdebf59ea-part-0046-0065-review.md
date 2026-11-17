# GnuPG gpg 部分翻訳自己照合

対象 s0046–s0065、20seg。request/protectedと保存原文HTMLのdelete-secret-and-public-keyからunwrapまで全文を読み、候補を意味自己照合。独立レビューではない。ライセンス根拠の未保存についてはpart-0001-0045-reviewを参照。

秘密/公開鍵の削除順、書込専用鍵サーバーの不可逆性、鍵エクスポートの危険、主鍵の秘密部分の無効化、ownertrust未設定鍵の除外、cronとbatch/yes条件、乱数品質0/1/2と特別値16/30を確認。s0050のsshファイル名authorized_keyは原文の単数形を保持し、既知の一般的名称へ勝手に訂正していない。s0054原文--recv-keyも保護トークンのまま。s0058/59の例は翻訳segmentではなくIR blocks内literalとして保存されていることを確認。s0063のLukeは原文の冗談を保持。範囲外は含めていない。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。
