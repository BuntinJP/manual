---
title: permissions
description: MEGAcmd によって作成されるファイルやフォルダのデフォルト権限を表示/設定します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/permissions.md

MEGAcmd によって作成されるファイルやフォルダのデフォルト権限を表示/設定します。

使用法: `permissions [(--files|--folders) [-s XXX]]`
<pre>
権限は Unix ライクなもので、3つの数字 (所有者、グループ、その他) で表されます
オプション:
 --files	ファイルのデフォルト権限を表示/設定
 --folders	フォルダのデフォルト権限を表示/設定
 --s XXX	新しく作成されるファイル/フォルダの新しい権限を設定
        	 注意: ファイルの最小権限は 600、
        	 フォルダの最小権限は 700 です
        	 所有者に対するさらなる制限は許可されません (誤動作を防ぐため)
        	 すでに存在するファイル/フォルダの権限は変更されません

注意: 権限は次回 MEGAcmd サーバーを実行するときに保存されます。ログアウトすると削除されます。Windows では利用できません。
</pre>
