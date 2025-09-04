---
title: users
description: 連絡先を一覧表示します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/users.md

連絡先を一覧表示します。

使用法: `users [-s] [-h] [-n] [-d contact@email] [--time-format=FORMAT] [--verify|--unverify contact@email.com] [--help-verify [contact@email.com]]`
<pre>
オプション:
 -d	contact@email	指定した連絡先を削除
 --help-verify	一般的な連絡先検証に関する情報を表示
 --help-verify contact@email	自身と相手の認証情報を表示し、
                            	検証を進めるための手順を表示
 --verify contact@email	指定した連絡先を検証
                       	注意: まず手動で認証情報が一致することを確認する必要があります
 --unverify contact@email	指定した連絡先の検証を解除。
                          	このユーザーとの新しい共有は再度検証が必要になります

一覧表示オプション:
 -s	指定した連絡先と共有しているフォルダを表示
 -h	すべての連絡先を表示 (非表示、ブロック済みなども含む)
 -n	ユーザー名を表示
 --time-format=FORMAT	利用可能なフォーマットで時間を表示。例:
               RFC2822:  例: Fri, 06 Apr 2018 13:05:37 +0200
               ISO6081:  例: 2018-04-06
               ISO6081_WITH_TIME:  例: 2018-04-06T13:05:37
               SHORT:  例: 06Apr2018 13:05:37
               SHORT_UTC:  例: 06Apr2018 13:05:37
               CUSTOM. 例: --time-format="%Y %b":  例: 2018 Apr
                 任意の strftime 準拠フォーマットを使用可能

他のユーザーに招待を送信/削除するには "mega-invite" を使用  
受信/送信中の招待を閲覧するには "mega-showpcr" を使用  
受信した招待を管理するには "mega-ipc" を使用  
連絡先を確認するには "mega-users" を使用
</pre>
