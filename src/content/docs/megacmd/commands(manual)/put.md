---
title: put
description: ファイル/フォルダをリモートフォルダにアップロードします。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/put.md

ファイル/フォルダをリモートフォルダにアップロードします。

使用法: `put  [-c] [-q] [--ignore-quota-warn] localfile [localfile2 localfile3 ...] [dstremotepath]`
<pre>
オプション:
 -c	リモートフォルダ宛先が存在しない場合に作成
 -q	アップロードをキューに入れる: バックグラウンドで実行し、終了を待たない
 --ignore-quota-warn	クォータ超過警告を無視
                    	  アップロードはそれでも試みられます

注意: dstremotepath は、ローカルパスが1つだけ指定された場合にのみ省略可能です。
 その場合、現在のリモート作業ディレクトリがアップロードの宛先になります。
 非対話モードでサポートされるコンソール (例: bash) でローカルパスにワイルドカードを使用すると、
 MEGAcmd に複数のパスが渡される可能性があります。
</pre>
