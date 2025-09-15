---
title: fuse-remove
description: 指定された FUSE マウントを削除します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/fuse-remove.md

指定された FUSE マウントを削除します。

使用法: `fuse-remove (name|localPath)`
<pre>
削除する前にマウントは無効化されている必要があります。fuse-disable を参照してください。

パラメータ:
 name|localPath   削除するマウントの識別子。以下のいずれかです:
                   Name: 追加時や fuse-config で指定されたユーザーフレンドリーな名前
                   Local path: ファイルシステム内のローカルマウントポイント

注意: FUSE コマンドは初期 BETA 状態です。Linux のみで利用可能です。問題がある場合は support@mega.nz までご連絡ください。
</pre>
