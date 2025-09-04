---
title: FUSE
description: MEGAcmd を使って FUSE マウントを設定・管理する方法。
sidebar:
  order: 5
---

> 翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/FUSE.md

# MEGA-FUSE - MEGAcmd で「FUSE」としてファイルを提供する

これは、MEGAcmd で [FUSE](https://ja.wikipedia.org/wiki/Filesystem_in_Userspace) を設定および管理するための簡単なチュートリアルです。

FUSE マウントを設定すると、MEGA のファイルをあたかもコンピュータ内にあるかのようにアクセスできます。FUSE マウントを有効にした後は、お気に入りのツールを使って MEGA ファイルを閲覧、再生、編集できます。

注意: この機能はベータ版であり、Linux のみサポートされています。

## ローカルキャッシュ

MEGAcmd はマウントポイントで作業する際にファイルを置くためのキャッシュを使用します。このキャッシュは、MEGA からダウンロードしたファイルと MEGA にアップロードするファイルの両方を保存するために使われます。`$HOME/.megaCmd/fuse-cache` に自動的に作成されます。

このキャッシュは FUSE マウントで作業するために非常に重要です。キャッシュファイルは自動的に削除されます。キャッシュの使用領域を減らすために MEGAcmd サーバーを再起動すると効果的な場合があります。

### 重要な注意点

ローカルで作成したファイルやフォルダは、即座に MEGA クラウド上で利用可能になるわけではありません。マウントエンジンがバックグラウンドで透過的に転送を行います。これらの処理を完了させるためには、MEGAcmd サーバーが起動している必要があります。

## ストリーミング

現時点ではストリーミングは直接サポートされていません。FUSE マウントポイント内のファイルを開くには、ローカルキャッシュフォルダに完全にダウンロードされている必要があります。これらのファイルを格納するためのハードドライブの空き容量が必要です。

## 使い方

### 新しいマウントの作成

新しい FUSE マウントは以下で作成できます:

```
$ fuse-add /local/path/to/fuse/mountpoint /cloud/dir
```

マウントを作成すると、MEGAcmd はそれを有効化しようとします。失敗した場合はマウントは無効のまま残ります。利用可能なすべてのオプションや引数については [`fuse-add`](commands/fuse-add.md) を参照してください。

マウントには管理時に参照するための関連付けられた名前が付きます。この名前は一意でなければなりません。作成時に `--name=custom_name` 引数でカスタム名を指定できます。ローカルパスでマウントを参照することもできますが、これは必ずしも一意ではありません。複数のマウントが同じローカルパスを共有する場合は、区別するために名前を使う必要があります。

### マウントの表示

既存のマウント一覧は以下で表示できます:

```
$ fuse-show
NAME LOCAL_PATH                     REMOTE_PATH PERSISTENT ENABLED
dir /local/path/to/fuse/mountpoint  /cloud/dir  YES        YES
```

特定のマウントの詳細を表示するには `fuse-show <NAME|LOCAL_PATH>` を使います。利用可能なすべてのオプションや引数については [`fuse-show`](commands/fuse-show.md) を参照してください。

### マウントの有効化・無効化

クラウドファイルをローカルファイルシステムで利用可能にするには、マウントを有効化する必要があります。以下で有効化できます:

```
$ fuse-enable <NAME|LOCAL_PATH>
```

注意: マウントは作成時にデフォルトで有効化されます（`--disabled` が使われていない限り）。

同様に、クラウドファイルのローカル公開を停止するには以下を使います:

```
$ fuse-disable <NAME|LOCAL_PATH>
```

注意: 無効化されたマウントも存在し、`fuse-show` で表示されます。詳細は [`fuse-enable`](commands/fuse-enable.md) と [`fuse-disable`](commands/fuse-disable.md) を参照してください。

### 設定の調整

前述のように、マウントの詳細は以下で表示できます:

```
$ fuse-show dir
Showing details of mount "dir"
  Local path:         /local/path/to/fuse/mountpoint
  Remote path:        /cloud/dir
  Name:               dir
  Persistent:         YES
  Enabled:            YES
  Enable at startup:  YES
  Read-only:          NO
```

これらのフラグを設定するには [`fuse-config`](commands/fuse-config.md) コマンドを使います。例えばマウントを読み取り専用にするには以下のようにします:

```
$ fuse-config --read-only=yes dir
Mount "dir" now has the following flags
  Name:               dir
  Enable at startup:  YES
  Persistent:         YES
  Read-only:          YES
```

### マウントの削除

マウントは以下で削除できます:

```
$ fuse-remove <NAME|LOCAL_PATH>
```

注意: マウントは削除する前に無効化されている必要があります。

## 問題

時折、MEGAcmd 内で直接解決できない FUSE マウントの問題に遭遇することがあります（例えば、MEGAcmd サーバーが突然終了した場合など）。最も一般的な問題は「Error: cannot access '/local/path/to/fuse/mountpoint': Transport endpoint is not connected」です。これを解決するには `fusermount` コマンドを以下のように使う必要があります:

```
fusermount -u /local/path/to/fuse/mountpoint
```

上記が失敗した場合は `-z` オプションを付けると効果があるかもしれません。詳細は [fusermount マニュアルページ](https://www.man7.org/linux/man-pages/man1/fusermount3.1.html) を参照してください。
