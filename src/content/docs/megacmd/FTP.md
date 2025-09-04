---
title: FTP
description: MEGAcmd を使って FTP サーバーを設定する方法。
sidebar:
  order: 2
---

> 翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/FTP.md

# MEGA-FTP - MEGAcmd でファイルを FTP サーバーとして公開する

これは [ftp](https://en.wikipedia.org/wiki/File_Transfer_Protocol) サーバーを設定する方法についての簡単なチュートリアルです。

FTP サーバーを設定すると、MEGA のファイルを自分のパソコン上にあるかのようにアクセスできます。
主要なすべてのプラットフォームで FTP サーバーへのアクセスがサポートされています。[プラットフォーム](#platforms)ごとの使い方を参照してください。

注意: ここに記載されているコマンドは対話モード（MEGAcmdShell 内）で実行することを想定しています。

## フォルダを公開する

例:

```
ftp /path/mega/folder
```

このコマンドで "myfolder" を公開する FTP サーバーが設定されます。アクセス用の URL が表示されますので、その URL を[ご利用の OS に応じて](#platforms)設定してください。
設定が完了すれば、お好みの FTP クライアントでファイルの閲覧・編集・コピー・削除ができたり、ネットワークロケーションとしてマウントしてローカルファイルのように操作できます。
注意: ファイルはローカルに存在するわけではなく、MEGAcmd が透過的にダウンロード/アップロード・復号/暗号化を行います。
そのため、ローカルファイルへのアクセスと比べて転送速度は低下します。ご注意ください。

## ストリーミング

ファイルを "ftp" することで、ストリーミングアクセスを提供できます:

```
ftp /path/to/myfile.mp4
```

お好みの動画プレイヤーで使用できる URL が表示されます。

## 問題点

さまざまなソフトウェアで、FTP で公開した場所にファイルを保存しようとすると問題が発生することがあります。特に一時ファイルを作成するソフトで顕著です。
今後もこれらの問題の回避策を検討していきます。

FileZilla では、デフォルトの 20 秒タイムアウト（編集 → 設定 → 接続）が原因でアップロードが完了前に停止することがあります。アップロード開始時に一時ファイルが作成され、完了後に本当のアップロード（MEGA への転送）が始まりますが、この間 FileZilla からは追加の通信が検出されません。アップロードに 20 秒以上かかるとタイムアウトします。正しく動作させるにはこの値を増やしてください。

Linux で gvfsd-dav（Gnome 標準の FTP クライアント）を使う場合、FTP 公開場所内の動画再生で問題が発生することがあります。おすすめの代替手段は VLC です。VLC を開いてファイルをウィンドウにドラッグ＆ドロップしてください。FTP URL が開かれ、動画のストリーミングが始まります。

他にも問題を見つけた場合は、support@mega.nz まで問題の内容と再現手順を添えてご連絡ください。

## 公開中の場所の一覧

`ftp` と入力することで、現在 FTP で公開中の場所を一覧表示できます:

```
FTP SERVED LOCATIONS:
/path/mega/folder: ftp://127.0.0.1:4990/XXXXXXX/myfolder
/path/to/myfile.mp4: ftp://127.0.0.1:4990/YYYYYYY/myfile.mp4
```

これらの場所は MEGAcmd が起動している間利用可能です。設定は保存されており、MEGAcmd を再起動すると自動で復元されます。

# 追加機能・設定

## ポート番号と公開サーバー

最初の場所を公開すると、ポート `4990` で FTP サーバーが設定されます。
ポート番号は `--port=PORT` オプションで変更できます。
現在、*パッシブモードのみ*サポートされています。クライアントがパッシブ FTP モードに対応していない場合は利用できません。
データ接続はデフォルトで 1500 ～ 1600 番ポート範囲で動作します。`--data-port=BEGIN-END` で変更可能です。
デフォルトでは、サーバーはローカルマシンからのみアクセス可能です。
リモートアクセスを許可するには `--public` オプションを付けてください。
その場合はサーバーの IP アドレスを使ってアクセスしてください。

## FTPS

MEGA 上のファイルは暗号化されていますが、FTP サーバー自体はファイルを暗号化せずに提供します。\
FTP サーバーに認証やデータ転送の機密性・完全性を追加したい場合は、[TLS](https://wikipedia.org/wiki/Transport_Layer_Security) で保護できます。なお、FTPS は [SFTP](https://es.wikipedia.org/wiki/SSH_File_Transfer_Protocol) とは異なり、SFTP はサポートされていません。

FTPS で公開するには、`--tls` と証明書・鍵ファイル（PEM 形式）のパスを指定してください:

```
ftp /path/mega/folder --tls --certificate=/path/to/certificate.pem --key=/path/to/certificate.key
```

※これらのパスは MEGA 上ではなくローカルマシン上のパスです。

現在、MEGAcmd ではサーバー構成は 1 つのみサポートされています。複数の場所を公開できますが、設定は最初の公開場所のものが適用されます。
設定を変更したい場合は、すべての公開を停止してから再度公開し直してください。

## 公開の停止

MEGA の公開場所を停止するには以下のコマンドを実行します:

```
ftp -d /path/mega/folder
```

成功すると、以下のようなメッセージが表示されます:

```
/path/mega/folder no longer served via ftp
```

## プラットフォーム別手順

主要なすべてのプラットフォームで FTP ロケーションへのアクセスやマウントが可能です。ここでは Windows、Linux、Mac での手順を紹介します。

### Windows

ここでは Windows 10 の例を示しますが、他のバージョンでも同様です。

エクスプローラーを開き、「PC」を右クリックして「ネットワークの場所を追加...」を選択します。

![ftpMenuWin.png](public/assets/mega-cmd/ftpMenuWin.png?raw=true 'ftpMenuWin.png')

MEGAcmd が表示した URL を入力します。

![ftpConnectToServerWin.png](public/assets/mega-cmd/ftpConnectToServerWin.png?raw=true 'ftpConnectToServerWin.png')

「匿名でログオンする」を選択します。

![ftpConnectToServerWin2.png](public/assets/mega-cmd/ftpConnectToServerWin2.png?raw=true 'ftpConnectToServerWin2.png')

新しい場所がナビゲーションパネルに表示されるはずです。
Windows 標準の FTP クライアントでは書き込みができません。ファイルを編集したい場合は他のクライアント（FileZilla など）を使うか、FTP ではなく WEBDAV で公開してください。

### Mac

Finder を開き、メニューの「移動」から「サーバへ接続」を選択するか、**&#x2318; - k** を押します。

![webdavMenuMac.png](public/assets/mega-cmd/webdavMenuMac.png?raw=true 'webdavMenuMac.png')

MEGAcmd が表示した URL を入力します。

![ftpConnectToServerMac.png](public/assets/mega-cmd/ftpConnectToServerMac.png?raw=true 'ftpConnectToServerMac.png')

本ドキュメント執筆時点では認証機構はありませんので、ユーザー名やパスワードの入力は不要です。デフォルトのまま進めてください。
新しい場所がナビゲーションパネルに表示されるはずです。

### Linux

ここでは Nautilus の例を示しますが、他のファイルブラウザでも同様です。
なお、`gvfs` は現在 FTPs をサポートしていません。

「ファイル」→「サーバーへ接続」をクリックします。

![webdavMenuLinux.png](public/assets/mega-cmd/webdavMenuLinux.png?raw=true 'webdavMenuLinux.png')

MEGAcmd が表示した URL を入力します。

![ftpConnectToServerLinux.png](public/assets/mega-cmd/ftpConnectToServerLinux.png?raw=true 'ftpConnectToServerLinux.png')

新しい場所がナビゲーションパネルに表示されるはずです。
