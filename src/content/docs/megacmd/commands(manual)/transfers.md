---
title: transfers
description: 転送を一覧または操作します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/transfers.md

転送を一覧または操作します。

使用法: `transfers [-c TAG|-a] | [-r TAG|-a]  | [-p TAG|-a] [--only-downloads | --only-uploads] [SHOWOPTIONS]`
<pre>
オプションなしで実行すると最初の10件の転送を一覧表示します。

オプション:
 -c (TAG|-a)	指定タグの転送をキャンセル (または -a ですべて)
 -p (TAG|-a)	指定タグの転送を一時停止 (または -a ですべて)
 -r (TAG|-a)	指定タグの転送を再開 (または -a ですべて)
 --only-uploads	アップロード転送のみ表示/操作
 --only-downloads	ダウンロード転送のみ表示/操作

表示オプション:
 --summary	進行中の転送の概要を表示
 --show-syncs	同期転送を表示
 --show-completed	完了した転送を表示
 --only-completed	完了したダウンロードのみ表示
 --limit=N	最初の N 件の転送のみ表示
 --path-display-size=N	パス表示に最低 N 文字を
