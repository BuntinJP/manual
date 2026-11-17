# FreeBSD paste(1) 候補訳の自己照合

確認者: EMMA FreeBSD 抽出担当（翻訳者による自己照合。独立レビューではない）

保存原文の本文 pre と再生成 IR、候補訳の全 37 セグメントを照合した。
原文バイト列 SHA-256 を確認。NAME から AUTHORS と末尾の版・日付行を含み、サイトナビは除外。原文の構文と実例は literal として保持。

最後のファイル以外の改行置換、EOF後の空行扱い、-d文字列の循環とリセット条件、\0 がヌル文字ではなく空文字列である点、-sのファイルごとの連結と最後の改行の保持、複数の標準入力指定、終了値、POSIX互換が期待されるという強さを照合。例は4つともコードを保持。

sourceSha256: 0dcb792cbc9fab9539c3d7d560e0b9441bbba819335feed32fe46fe994f56dd7
irSha256: decb7cff12a0ae1c8cbc286d953170ebc1a287943fa95c8f202e08f12abbf84d

候補: /workspace/shared/manual-translations/freebsd-paste-ja.json
validateTranslation による全ID・保護トークン・書式の検証に成功。キュー管理者が save 後の draftSha256 を記録し、最終受理・生成・検証を行うこと。


sourceSha256: 0dcb792cbc9fab9539c3d7d560e0b9441bbba819335feed32fe46fe994f56dd7
irSha256: decb7cff12a0ae1c8cbc286d953170ebc1a287943fa95c8f202e08f12abbf84d
draftSha256: b08eccaa3b941df6e68d8d0936d835abed17744e7f6616fba24438c3f6686561
