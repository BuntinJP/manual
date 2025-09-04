---
title: autocomplete
description: タブ補完の動作を変更します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/autocomplete.md

タブ補完の動作を変更します。

使用法: `autocomplete [dos | unix]`
<pre>
デフォルトではネイティブプラットフォームのように動作します。ただし、必要に応じて「dos」モードと「unix」モードの間で切り替えることができます。
オプション:
 dos	Tabを押すごとに次のオプションがコマンドラインに配置されます
 unix	オプションは表に一覧表示されます。1つしかない場合はインラインに配置されます

注意: このコマンドは一部のWindowsバージョンでのみ利用可能です
</pre>
