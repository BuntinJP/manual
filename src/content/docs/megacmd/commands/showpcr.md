---
title: showpcr
description: 受信および送信中の連絡先リクエストを表示します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/showpcr.md

受信および送信中の連絡先リクエストを表示します。

使用法: `showpcr [--in | --out] [--time-format=FORMAT]`
<pre>
オプション:
 --in	受信したリクエストを表示
 --out	送信した招待を表示
 --time-format=FORMAT	利用可能なフォーマットで時間を表示。例:
               RFC2822:  例: Fri, 06 Apr 2018 13:05:37 +0200
               ISO6081:  例: 2018-04-06
               ISO6081_WITH_TIME:  例: 2018-04-06T13:05:37
               SHORT:  例: 06Apr2018 13:05:37
               SHORT_UTC:  例: 06Apr2018 13:05:37
               CUSTOM. 例: --time-format="%Y %b":  例: 2018 Apr
                 任意の strftime 準拠フォーマットを使用可能

受信した招待を管理するには "mega-ipc" を使用してください  
連絡先を確認するには "mega-users" を使用してください
</pre>
