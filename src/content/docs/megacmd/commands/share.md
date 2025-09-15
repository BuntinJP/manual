---
title: share
description: 現在の共有状態を表示/変更します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/share.md

現在の共有状態を表示/変更します。

使用法: `share [-p] [-d|-a --with=user@email.com [--level=LEVEL]] [remotepath] [--use-pcre] [--time-format=FORMAT]`
<pre>
オプション:
 --use-pcre	PCRE 式を使用
 -p	保留中の共有も表示
 --with=email	共有/共有解除する相手のメールアドレスを指定
 -d	指定ユーザーとの共有を停止
 -a	共有を追加 (既存の場合は変更)
 --level=LEVEL	ユーザーに与えるアクセスレベル
              	0: 読み取り権限
              	1: 読み取り/書き込み
              	2: フルアクセス
              	3: 所有者アクセス

リモートパスが指定された場合、それが共有追加/削除に使用されます。
 オプションが選択されなかった場合、そのパスツリー内のすべての共有が表示されます。

連絡先でないユーザーとフォルダを共有すると (参照: "mega-users --help")
 その共有は保留状態になります。"share -p" で保留共有を一覧できます。
 相手は招待を承認する必要があります (参照: "mega-ipc")

フォルダを共有するには連絡先の確認が必要です (参照: "mega-users --help-verify")

誰かがあなたと共有したものは、ルートフォルダとして表示されます。
 "mega-mount" を使用してあなたと共有されたフォルダを一覧表示できます。
</pre>
