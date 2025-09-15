---
title: sync-issues
description: 現在の同期に関するすべての問題を表示します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/sync-issues.md

現在の同期に関するすべての問題を表示します。

使用法: `sync-issues [[--detail (ID|--all)] [--limit=rowcount] [--disable-path-collapse]] | [--enable-warning|--disable-warning]`
<pre>
MEGAcmd が同期データに競合を検出すると、同期問題が発生します。
 競合があるデータの同期は停止し、進行しません。通常はユーザーの操作が必要です。

同期問題が検出されると警告通知が表示されます。必要に応じて無効化できます。
 注意: 通知はすでに問題が存在していた場合でも表示されることがあります。

同期問題のリストは要求時点で検出されたもののスナップショットです。
 したがって最新の更新データが含まれていない場合があります。

オプション:
 --detail (ID | --all) 	特定の同期問題に関する追加情報を表示
                       	ID, ローカルおよびクラウドのパスを表示
                       	すべてのパスに次の列が含まれます:
                       	 PATH: 競合するローカルまたはクラウドパス (クラウドパスは "<CLOUD>" で始まる)
                       	 PATH_ISSUE: 問題の説明
                       	 LAST_MODIFIED: 更新日時
                       	 UPLOADED: クラウドパスの場合、アップロードまたは作成日時。ローカルパスは空
                       	 SIZE: ファイルサイズ。ディレクトリは空
                       	 TYPE: パスのタイプ (ファイル/ディレクトリ)。不要な場合は非表示
 --limit=rowcount 	表示する行数を制限 (0 で無制限)。デフォルトは 10
 --disable-path-collapse 	すべてのパスを完全表示。デフォルトでは長いパスは省略
 --enable-warning 	問題検出時の通知を有効化。次回 MEGAcmd 起動時まで保存されるが、ログアウトすると削除される
 --disable-warning 	問題検出時の通知を無効化。次回 MEGAcmd 起動時まで保存されるが、ログアウトすると削除される
 --col-separator=X	列区切り文字を "X" に指定
 --output-cols=COLUMN_NAME_1,COLUMN_NAME2,...	表示する列と順序を指定

表示される列:
 ISSUE_ID: 同期問題の一意識別子
 PARENT_SYNC: この問題がある同期の識別子
 REASON: 問題の概要。--detail で詳細を確認可能
</pre>
