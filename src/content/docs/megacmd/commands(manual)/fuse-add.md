---
title: fuse-add
description: 新しい FUSE マウントを作成します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/fuse-add.md

新しい FUSE マウントを作成します。

使用法: `fuse-add [--name=name] [--disabled] [--transient] [--read-only] localPath remotePath`
<pre>
マウントは追加後自動的に有効化され、指定した MEGA フォルダがローカルファイルシステム内でアクセス可能になります。
マウントが無効化されると、その設定は保存されますがクラウドフォルダはローカルにマウントされません (fuse-disable を参照)。
マウントは再起動後も保持され、デフォルトで書き込み可能です。これらや他のオプションは fuse-config で変更できます。
fuse-show でマウント一覧を表示できます。

パラメータ:
 localPath    remotePath 内のファイルがローカルファイルシステム上で見える場所を指定
 remotePath   ローカルに公開されるディレクトリ (または共有) を指定

オプション:
 --name=name  マウントを識別するためのユーザーフレンドリーな名前。指定されない場合、remotePath の表示名が使用されます。
 --read-only  読み取り専用マウントに指定
 --transient  一時的なマウントとして指定 (再起動で失われる)
 --disabled   追加後に自動的に有効化されないように指定 (fuse-enable で手動有効化が必要)

注意事項:
    - ストリーミングはサポートされません。ファイル全体をダウンロードしてから開く必要があります。
    - FUSE は MEGAcmd 設定フォルダ内にローカルキャッシュを使用します。十分なディスク容量を確保してください。
    - ファイルの書き込みは遅延する場合があります。ローカルで更新すると転送が開始され、転送完了後にのみ MEGA 内で利用可能になります。

FUSE コマンドは初期 BETA 状態です。Linux のみで利用可能です。問題がある場合は support@mega.nz までご連絡ください。
</pre>
