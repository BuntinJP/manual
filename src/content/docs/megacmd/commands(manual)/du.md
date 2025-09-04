---
title: du
description: ファイル/フォルダが使用しているサイズを表示します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/du.md

ファイル/フォルダが使用しているサイズを表示します。

使用法: `du [-h] [--versions] [remotepath remotepath2 remotepath3 ... ] [--use-pcre]`
<pre>
remotepath はパターンにできます ("--use-pcre" を使った Perl 互換正規表現
   または f*00?.txt のような ? や * を使ったワイルドカード式)

オプション:
 -h	人間が読みやすい
 --versions	すべてのバージョンを含めたサイズを計算します。
   	すべてのバージョンを削除するには "deleteversions" を、一覧表示するには "ls --versions" を使用できます
 --path-display-size=N	パスに固定サイズ N 文字を使用
 --use-pcre	PCRE 式を使用
</pre>
