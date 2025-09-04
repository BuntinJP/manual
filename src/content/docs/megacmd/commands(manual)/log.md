---
title: log
description: ログレベルを表示/変更します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/log.md

ログレベルを表示/変更します。

使用法: `log [-sc] level`
<pre>
オプション:
 -c	CMD ログレベル (高レベルメッセージ)。
   	 MEGAcmd サーバーによって捕捉されるメッセージ。
 -s	SDK ログレベル (低レベルメッセージ)。
   	 エンジンやライブラリによって捕捉されるメッセージ
注意: この設定は次回 MEGAcmd を開いたときに保存されますが、ログアウトすると削除されます。

対話型シェルのログレベルに関係なく、任意のコマンドに "-v" ("-vv", "-vvv", ...) を渡すことで表示情報を増やすことができます。
</pre>
