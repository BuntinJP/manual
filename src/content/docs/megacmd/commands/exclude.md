---
title: exclude
description: 同期のデフォルト除外ルールを管理します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/exclude.md

同期のデフォルト除外ルールを管理します。

使用法: `exclude [(-a|-d) pattern1 pattern2 pattern3]`
<pre>
これらのデフォルトルールは新しい同期を作成するときに使用されます。既存の同期には影響しません。既存の同期の除外ルールを変更するには mega-sync-ignore を使用してください。

オプション:
 -a pattern1 pattern2 ...	除外リストにパターンを追加します
                         	          (* と ? ワイルドカードが使用可能)
 -d pattern1 pattern2 ...	除外リストからパターンを削除します

このコマンドは非推奨です。代わりに sync-ignore を使用してください。
</pre>
