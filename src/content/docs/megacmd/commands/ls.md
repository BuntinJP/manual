---
title: ls
description: リモートパス内のファイルを一覧表示します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/ls.md

リモートパス内のファイルを一覧表示します。

使用法: `ls [-halRr] [--show-handles] [--tree] [--versions] [remotepath] [--use-pcre] [--show-creation-time] [--time-format=FORMAT]`
<pre>
remotepath はパターンにできます ("--use-pcre" を使った Perl 互換正規表現
   または f*00?.txt のような ? や * のワイルドカード式)
 また、/PATTERN1/PATTERN2/PATTERN3 のような構造も可能です

オプション:
 -R|-r	フォルダを再帰的に一覧表示
 --tree	ツリー形式で表示 (-r を含む)
 --show-handles	ファイル/フォルダのハンドル (H:XXXXXXXX) を表示
 -l	サマリを表示 (--tree は無効)
   	 サマリの内容:
   	   FLAGS: 要素のタイプ/状態を示す:
   	     xxxx
   	     |||+---- 共有状態: (s)hared, (i)n share, または未共有(-)
   	     ||+----- エクスポートされている場合、それが (p)ermanent か (t)temporal か
   	     |+------ ノードが (e)xported かどうか
   	     +-------- タイプ (d=フォルダ, -=ファイル, r=ルート, i=inbox, b=ゴミ箱, x=非対応)
   	   VERS: ファイルのバージョン数
   	   SIZE: ファイルサイズ (バイト単位)
   	   DATE: ファイルの変更日、またはフォルダの作成日 (UTC 時間)
   	   NAME: ノード名
 -h	人間が読みやすいサイズを表示
 -a	追加情報を含める
   	 フラグを繰り返す (例: -aa) とさらに多くの情報を表示
   	 (公開リンク、有効期限など)
 --versions	履歴バージョンを表示
   	ファイルのすべてのバージョンを削除するには "deleteversions" を使用
 --show-creation-time	ファイルの変更時刻ではなく作成時刻を表示
 --time-format=FORMAT	利用可能なフォーマットで時間を表示。例:
               RFC2822:  例: Fri, 06 Apr 2018 13:05:37 +0200
               ISO6081:  例: 2018-04-06
               ISO6081_WITH_TIME:  例: 2018-04-06T13:05:37
               SHORT:  例: 06Apr2018 13:05:37
               SHORT_UTC:  例: 06Apr2018 13:05:37
               CUSTOM. 例: --time-format="%Y %b":  例:
