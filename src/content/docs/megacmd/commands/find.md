---
title: find
description: パターンに一致するノードを検索します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/find.md

パターンに一致するノードを検索します。

使用法: `find [remotepath] [-l] [--pattern=PATTERN] [--type=d|f] [--mtime=TIMECONSTRAIN] [--size=SIZECONSTRAIN] [--use-pcre] [--time-format=FORMAT] [--show-handles|--print-only-handles]`
<pre>
オプション:
 --pattern=PATTERN	パターンに一致 (Perl 互換正規表現を "--use-pcre" で使用可能
   または f*00?.txt のように ? や * のワイルドカード式)
 --type=d|f           	タイプを指定 (d=フォルダ, f=ファイル)
 --mtime=TIMECONSTRAIN	時間制約を指定。形式: [+-]TIMEVALUE
                      	  TIMEVALUE は 時間(h)、日(d)、分(M)、秒(s)、月(m)、年(y) を含めることができます
                      	  例:
                      	   "+1m12d3h" → 現在から 1か月12日3時間前に変更されたファイル
                      	   "-3h" → 過去3時間以内に変更されたファイル
                      	   "-3d+1h" → 過去3日間のうち直近1時間を除いた間に変更されたファイル
 --size=SIZECONSTRAIN	サイズ制約を指定。形式: [+-]TIMEVALUE
                      	  TIMEVALUE は B, K, M, G, T 単位を含めることができます
                      	  例:
                      	   "+1m12k3B" → 1MB + 12KB + 3B より大きいファイル
                      	   "-3M" → 3MB 未満のファイル
                      	   "-4M+100K" → 4MB 未満かつ100KBより大きいファイル
 --show-handles	ファイル/フォルダのハンドル (H:XXXXXXXX) を表示
 --print-only-handles	ハンドルのみを表示
 --use-pcre	PCRE 式を使用
 -l	ファイル情報を表示
 --time-format=FORMAT	利用可能なフォーマットで時間を表示。例:
               RFC2822:  例: Fri, 06 Apr 2018 13:05:37 +0200
               ISO6081:  例: 2018-04-06
               ISO6081_WITH_TIME:  例: 2018-04-06T13:05:37
               SHORT:  例: 06Apr2018 13:05:37
               SHORT_UTC:  例: 06Apr2018 13:05:37
               CUSTOM. 例: --time-format="%Y %b":  例: 2018 Apr
</pre>
