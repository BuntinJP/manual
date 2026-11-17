# GnuPG gpg 部分翻訳自己照合・旧IR受理保留

対象 s0081–s0100、20seg。request/protectedと保存source.htmlの--quick-add-uidから--yesまで全対応本文を読み、意味を自己照合。独立レビューではない。旧IR全体の欠落修正待ちであり、この範囲を正しい新IRへ移植してから受理する。part-0066-0080-reviewとgpg-non-li-audit.jsonを参照。

ユーザーIDの最後の1個を失効できない条件、1秒進めるタイムスタンプ、dry-runでパスフレーズ変更しないこと、複数default-keyの最後の利用可能鍵、--batchでもSTDIN/TTYが使われることを確認。s0085原文の--key-editは保護トークンのまま維持し、--edit-keyに勝手に訂正していない。s0082の失効理由の係り受けは、最後のIDの禁止とは区別して、失効コマンドが使う理由として自然に訳出。範囲外の未訳を含めない。

既存validateTranslationを対象subset IR＋全IR hashで実行し成功。原文token復元article照合不一致0件: 。
