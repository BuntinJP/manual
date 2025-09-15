---
title: fuse-show
description: FUSE マウントの一覧と情報を表示します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/fuse-show.md

FUSE マウントの一覧と情報を表示します。名前またはローカルパスが指定された場合、そのマウントの情報を表示します。

使用法: `fuse-show [--only-enabled] [--disable-path-collapse] [[--limit=rowcount] | [name|localPath]]`
<pre>
すべてのマウントが表示されると、次の列が表示されます:
   NAME: マウントのユーザーフレンドリーな名前
   LOCAL_PATH: ファイルシステム内のローカルマウントポイント
   REMOTE_PATH: ローカルに公開されるクラウドディレクトリまたは共有
   PERSISTENT: 再起動をまたいで保存される場合は "YES"
   ENABLED: 現在有効化されている場合は "YES"

パラメータ:
 name|localPath   表示するマウントの識別子。以下のいずれかです:
                   Name: 追加時や fuse-config で指定されたユーザーフレンドリーな名前
                   Local path: ファイルシステム内のローカルマウントポイント
                    指定されない場合は一覧が表示されます

オプション:
 --only-enabled           有効なマウントのみ表示
 --disable-path-collapse  すべてのパスを完全に表示 (デフォルトでは長いパスは省略)
 --limit=rowcount         表示行数を制限 (0で無制限)。デフォルトは無制限
 --col-separator=X	列区切り文字を "X" に指定。デフォルトでは列を揃えるためにスペースが追加されます
 --output-cols=COLUMN_NAME_1,COLUMN_NAME2,...	表示する列と順序を指定

注意: FUSE コマンドは初期 BETA 状態です。Linux のみで利用可能です。問題がある場合は support@mega.nz までご連絡ください。
</pre>
