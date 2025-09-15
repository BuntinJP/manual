---
title: deleteversions
description: 以前のバージョンを削除します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/deleteversions.md

以前のバージョンを削除します。

使用法: `deleteversions [-f] (--all | remotepath1 remotepath2 ...)  [--use-pcre]`
<pre>
これはファイルのすべての履歴バージョンを永久に削除します。
ファイルの現在のバージョンは残ります。
注意: 連絡先から共有されたファイルバージョンは、その人によって削除される必要があります。

オプション:
 -f   	強制 (確認なし)
 --all	すべてのノードのバージョンを削除します。これはすべてのファイルのバージョン履歴を削除します (現在のファイルは削除されません)。
 --use-pcre	PCRE 式を使用

ファイルのバージョンを表示するには "ls --versions" を使用してください。
ファイルバージョンが占めるスペースを表示するには "du --versions" を使用してください。
</pre>
