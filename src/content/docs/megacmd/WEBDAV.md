---
title: WEBDAV
description: MEGAcmd を使って WEBDAV サーバーを設定する方法。
sidebar:
  order: 4
---

> 翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/WEBDAV.md

# MEGA-WEBDAV - MEGAcmd でファイルを WEBDAV サーバーとして提供する

これは [webdav](https://wikipedia.org/wiki/WebDAV) サーバーを設定するための簡単なチュートリアルです。

WEBDAV サーバーを設定することで、MEGA のファイルにまるで自分のコンピュータ上にあるかのようにアクセスできます。  
主要なプラットフォームはすべて WEBDAV サーバーへのアクセスをサポートしています。[`Platform`](#platforms) の使用法を参照してください。

注意: ここに記載されているコマンドは対話モードでの使用を想定しています。MEGAcmdShell 内で実行してください。

## フォルダを提供する

例:

```
webdav /path/mega/folder
```

これにより "myfolder" を提供する WEBDAV サーバーが設定されます。アクセス用の URL が表示されます。  
その URL を使って、[お使いの OS に応じた設定](#platforms) を行ってください。  
設定が完了すると、ローカルファイルのようにブラウズ、編集、コピー、削除が可能になります。  
注意点: それらはローカルのファイルではなく、MEGAcmd が透過的にダウンロード/アップロードや暗号化/復号化を行います。  
そのため、ローカルファイルに比べてスループットが低下します。気長にお待ちください。

## ストリーミング

ファイルを "webdav" することで、ストリーミングアクセスを提供できます:

```
webdav /path/to/myfile.mp4
```

お気に入りの動画プレーヤーで使える URL が返されます。

## 問題点

一部のソフトウェアで、webdav で提供された場所にファイルを保存しようとすると問題が検出されています。  
特に一時ファイルを作成するソフトウェアで起こりやすいです。  
これらの問題を回避できるよう引き続き対応を検討しています。

Linux では、gvfsd-dav（Gnome のデフォルトの webdav クライアント）を使う際に、  
一部のグラフィックエディタで既に編集済みのテキストファイルを開こうとすると問題が発生することがあります。  
これは gvfsd-dav が実際のファイルの URL とは異なる URL を取得しようとするためです。  
コンソールからファイルを読む場合は問題ありません。Ubuntu 16.04 で検出されています。

Windows XP では、MEGA webdav の場所からファイルをコピーしてローカルフォルダに貼り付けても何も起こりません。

もし他に問題があれば、support@mega.nz まで問題の内容と再現方法を添えてご連絡ください。

## 一覧表示

webdav で提供されている場所は `webdav` と入力すると一覧表示されます:

```
WEBDAV SERVED LOCATIONS:
/path/mega/folder: http://127.0.0.1:4443/XXXXXXX/myfolder
/path/to/myfile.mp4: http://127.0.0.1:4443/YYYYYYY/myfile.mp4
```

これらの場所は MEGAcmd が動作している間利用可能です。設定は永続化され、MEGAcmd を再起動しても復元されます。

# 追加機能/設定

## ポート & 公開サーバー

最初に場所を提供すると、WEBDAV サーバーはデフォルトでポート `4443` に設定されます。  
`--port=PORT` を webdav コマンドに渡すことでポートを変更できます。  
デフォルトではサーバーはローカルマシンからのみアクセス可能です。  
`--public` を webdav コマンドに渡すとリモートアクセスを許可します。  
その場合はサーバーの IP アドレスを使ってアクセスしてください。

## HTTPS

MEGA のファイルは暗号化されていますが、HTTP の webdav サーバーはファイルを暗号化せずに提供します。  
webdav サーバーの認証性やデータ転送の整合性・プライバシーを確保したい場合は、  
[TLS](https://wikipedia.org/wiki/Transport_Layer_Security) で保護することができます。  
`--tls` と証明書と鍵ファイル（PEM 形式）のパスを渡してください:

```
webdav /path/mega/folder --tls --certificate=/path/to/certificate.pem --key=/path/to/certificate.key
```

\*これらのパスはローカルマシン上のパスであり、MEGA 内のパスではありません。

現状、MEGAcmd は一つのサーバーのみサポートしています。複数の場所を提供しても設定は一つだけです。  
使用される設定は最初に提供した場所のものになります。  
設定を変更したい場合は、すべての場所の提供を停止してから再設定してください。

## 提供停止

MEGA の場所の提供を停止するには:

```
webdav -d /path/mega/folder
```

成功すると、以下のようなメッセージが表示されます:

```
/path/mega/folder no longer served via webdav
```

## プラットフォーム

主要なプラットフォームはすべて webdav の場所にアクセス/マウントできます。  
以下に Windows、Linux、Mac での設定方法を示します。

### Windows

これは Windows 10 の手順ですが、他の Windows でもほぼ同様です。

エクスプローラーを開き、「PC」を右クリックして「ネットワークドライブの割り当て...」を選択します。

![webdavMenuWin.png](public/assets/mega-cmd/webdavMenuWin.png?raw=true 'webdavMenuWin.png')

MEGAcmd が表示した URL を入力します。

![webdavConnectToServerWin.png](public/assets/mega-cmd/webdavConnectToServerWin.png?raw=true 'webdavConnectToServerWin.png')

ナビゲーションパネルに新しい場所が表示されます。

### Mac

Finder を開き、メニューの「移動」から「サーバへ接続」を選択するか、**⌘ - k** を押します。

![webdavMenuMac.png](public/assets/mega-cmd/webdavMenuMac.png?raw=true 'webdavMenuMac.png')

MEGAcmd が表示した URL を入力します。

![webdavConnectToServerMac.png](public/assets/mega-cmd/webdavConnectToServerMac.png?raw=true 'webdavConnectToServerMac.png')

執筆時点では認証機構はありません。  
ユーザー名やパスワードの入力は不要です。デフォルトのまま進めてください。  
ナビゲーションパネルに新しい場所が表示されます。

### Linux

これは Nautilus の手順です。他のファイルブラウザでも似たような操作です。  
「ファイル」→「サーバーへ接続」をクリックします。

![webdavMenuLinux.png](public/assets/mega-cmd/webdavMenuLinux.png?raw=true 'webdavMenuLinux.png')

MEGAcmd が表示した URL を入力します。

![webdavConnectToServerLinux.png](public/assets/mega-cmd/webdavConnectToServerLinux.png?raw=true 'webdavConnectToServerLinux.png')

ナビゲーションパネルに新しい場所が表示されます。
