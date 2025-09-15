---
title: cp
description: ファイル/フォルダを新しい場所にコピーします（すべてのリモートで）。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/cp.md

ファイル/フォルダを新しい場所にコピーします（すべてのリモートで）。

使用法: `cp [--use-pcre] srcremotepath [srcremotepath2 srcremotepath3 ..] dstremotepath|dstemail:`
<pre>
場所が存在しフォルダの場合、ソースはそこにコピーされます
場所が存在せず、1つのソースのみが指定された場合、
 ファイル/フォルダはコピーされ、指定された宛先名にリネームされます。

"dstemail:" が指定された場合、ファイル/フォルダはそのユーザーの受信箱 (//in) に送られます
 例: cp /path/to/file user@doma.in:
 末尾の ":" を忘れないでください。そうしないと "user@doma.in" という名前のファイルが作成されます
オプション:
 --use-pcre	PCRE 式を使用
</pre>
