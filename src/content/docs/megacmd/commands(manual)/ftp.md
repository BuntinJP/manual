---
title: ftp
description: MEGA 内の場所を提供する FTP サーバーを設定します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/ftp.md

MEGA 内の場所を提供する FTP サーバーを設定します。

使用法: `ftp [-d ( --all | remotepath ) ] [ remotepath [--port=PORT] [--data-ports=BEGIN-END] [--public] [--tls --certificate=/path/to/certificate.pem --key=/path/to/certificate.key]] [--use-pcre]`
<pre>
これをファイルのストリーミングに使用することもできます。サーバーは MEGAcmd サーバーが動作している間実行されます。
引数が指定されていない場合、FTP が有効化されている場所が一覧表示されます。

オプション:
 --d        	その場所の提供を停止します
 --all      	-d と一緒に使用すると、すべての場所の提供を停止 (サーバーも停止)
 --public   	*localhost 以外からのアクセスを許可
 --port=PORT	*提供するポート (デフォルト=4990)
 --data-ports=BEGIN-END	*データチャンネル (パッシブモード) で使用するポート範囲 (デフォルト=1500-1600)
 --tls      	*TLS (FTPs) で提供
 --certificate=/path/to/certificate.pem	*PEM 形式の証明書へのパス
 --key=/path/to/certificate.key	*PEM 形式の鍵へのパス
 --use-pcre	PCRE 式を使用

*複数の場所を提供する場合、これらのパラメータは無視され、最初の場所のものが使用されます。
 これらを変更するには、すべての場所の提供を停止し、再度設定し直す必要があります。
注意: FTP の設定と場所は次回 MEGAcmd を起動するときまで保存されますが、ログアウトすると削除されます。

注意: この機能は BETA 状態です。すべてのプラットフォームで利用可能とは限りません。問題がある場合は support@mega.nz までご連絡ください。
</pre>
