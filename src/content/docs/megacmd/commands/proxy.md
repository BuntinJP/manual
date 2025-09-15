---
title: proxy
description: プロキシ設定を表示または設定します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/proxy.md

プロキシ設定を表示または設定します。

使用法: `proxy [URL|--auto|--none] [--username=USERNAME --password=PASSWORD]`
<pre>
パラメータが指定されない場合、現在のプロキシ設定を表示します。

オプション:
 URL	プロキシ URL (例: https://127.0.0.1:8080)
 --none	プロキシを使用しない
 --auto	システムで設定されたプロキシを使用
 --username=USERNAME	認証付きプロキシのユーザー名
 --password=PASSWORD	認証付きプロキシのパスワード。パスワードに " または ' を含めるのは避けてください

注意: プロキシ設定は次回 MEGAcmd を開いたときに保存されますが、ログアウトすると削除されます。
</pre>
