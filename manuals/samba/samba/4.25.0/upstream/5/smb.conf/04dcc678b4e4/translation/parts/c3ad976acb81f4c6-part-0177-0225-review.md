# smb.conf 部分翻訳レビュー 0177-0225

- 対象: Samba 4.25.0、49 セグメント。全文4315セグメントの部分候補であり、全文完了ではない。
- 自己レビュー: request / IR / 保存済み公式 HTML と照合。glossary を確認。独立レビューではない。
- validateTranslation を IR の対象部分に適用し成功。source と manifest materials の SHA-256 一致を確認。
- 保護トークン、コード、パラメーター名、値、条件、否定、既定値を保持。設定名の見出しは正式識別子のまま。
- 最初の ACL パラメーター群。実行権の False/True、削除のオープン時/クローズ時、AD DC のみかつ機能レベル2012以降、無効化は一部のみ、DI/DR の unless 条件とディスク非保存、プライマリー所有グループ制限、FULL CONTROL 対応付けの真偽を照合。原文の非推奨バージョン記述を現在の挙動で上書きしない。
- 全文逆方向監査は samba-large-extraction-audit.md を参照。body と IR の空白除去テキスト354435文字一致。
- ライセンス/原文記録は既存 manifest と source-observations を保持し変更していない。queue、生成、コミット操作なし。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-0177-0225-ja.json: `6551c70e70d90ba6b3252f974e986d29c61ee1a5bc9100125d63d58582b8100a`
