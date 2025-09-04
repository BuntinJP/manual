---
title: fuse-config
description: 指定された FUSE マウントの設定を変更します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/fuse-config.md

指定された FUSE マウントの設定を変更します。

使用法: `fuse-config [--name=name] [--enable-at-startup=yes|no] [--persistent=yes|no] [--read-only=yes|no] (name|localPath)`
<pre>
パラメータ:
 name|localPath   削除したいマウントの識別子。以下のいずれかです:
                   Name: 追加時や fuse-config で指定されたユーザーフレンドリーな名前
                   Local path: ファイルシステム内のローカルマウントポイント

オプション:
 --name=name                  マウントを一意に識別するユーザーフレンドリーな名前を設定
 --enable-at-startup=yes|no   起動時に自動的に有効化するかどうかを制御
 --persistent=yes|no          再起動をまたいで保存されるかどうかを制御
 --read-only=yes|no           読み取り専用か書き込み可能かを制御

注意: FUSE コマンドは初期 BETA 状態です。Linux のみで利用可能です。問題がある場合は support@mega.nz までご連絡ください。
</pre>
