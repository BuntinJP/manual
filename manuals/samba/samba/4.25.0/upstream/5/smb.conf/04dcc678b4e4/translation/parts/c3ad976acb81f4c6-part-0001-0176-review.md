# smb.conf 部分翻訳レビュー 0001-0176

- 対象: Samba 4.25.0、176 セグメント。全文4315セグメントの部分候補であり、全文完了ではない。
- 自己レビュー: request / IR / 保存済み公式 HTML と照合。glossary を確認。独立レビューではない。
- validateTranslation を IR の対象部分に適用し成功。source と manifest materials の SHA-256 一致を確認。
- 保護トークン、コード、パラメーター名、値、条件、否定、既定値を保持。設定名の見出しは正式識別子のまま。
- 導入、特殊セクション、変数置換、名前の大文字小文字、レジストリ構成、ID 対応付けを原文と照合。guest homes のパスワード不要公開、共有名の優先順位、レジストリ構成の破損防止、ID 対応付け変更の情報漏えい危険を保持。原文の YYYYYmmdd_HHMMSS と case preserve = no は勝手に訂正しない。
- 全文逆方向監査は samba-large-extraction-audit.md を参照。body と IR の空白除去テキスト354435文字一致。
- ライセンス/原文記録は既存 manifest と source-observations を保持し変更していない。queue、生成、コミット操作なし。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-0001-0176-ja.json: `d2c58427e2edc8f73423f22b4e638c4c67bfd1d0b8e269d476423e2e77525022`
