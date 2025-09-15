---
title: fuse-enable
description: 指定された FUSE マウントを有効化します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/fuse-enable.md

指定された FUSE マウントを有効化します。

使用法: `fuse-enable [--temporarily] (name|localPath)`
<pre>
マウントが有効化されると、そのクラウドエンティティはマウントのローカルパス経由でアクセス可能になります。

パラメータ:
 name|localPath   有効化するマウントの識別子。以下のいずれかです:
                   Name: 追加時や fuse-config で指定されたユーザーフレンドリーな名前
                   Local path: ファイルシステム内のローカルマウントポイント

オプション:
 --temporarily   サーバー再起動までのみ一時的に有効化するかどうかを指定
                 一時的マウントでは効果がありません。これらは常に一時的です。

注意: FUSE コマンドは初期 BETA 状態です。Linux のみで利用可能です。問題がある場合は support@mega.nz までご連絡ください。
</pre>
