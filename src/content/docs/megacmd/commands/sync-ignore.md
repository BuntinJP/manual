---
title: sync-ignore
description: 同期の無視フィルタを管理します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/sync-ignore.md

同期の無視フィルタを管理します。

使用法: `sync-ignore [--show|[--add|--add-exclusion|--remove|--remove-exclusion] filter1 filter2 ...] (ID|localpath|DEFAULT)`
<pre>
デフォルトフィルタを変更するには、local path または ID の代わりに "DEFAULT" を使用してください。
注意: デフォルトフィルタを変更しても既存の同期には影響しません。新しく作成される同期にのみ適用されます。

アクションが指定されない場合、選択した同期のフィルタが表示されます。
選択した同期のルートにあるフィルタのみが表示されます。サブフォルダに属するフィルタは手動で変更する必要があります。

オプション:
 --show	選択した同期の既存フィルタを表示
 --add	指定したフィルタを選択した同期に追加
 --add-exclusion	"--add" と同じですが、<CLASS> が 'exclude' です
               	注意: フィルタから '-' を省略する必要があります ('--' を使用する必要はありません)
 --remove	指定したフィルタを選択した同期から削除
 --remove-exclusion	"--remove" と同じですが、<CLASS> が 'exclude' です
                  	注意: フィルタから '-' を省略する必要があります ('--' を使用する必要はありません)

フィルタは次の形式である必要があります: <CLASS><TARGET><TYPE><STRATEGY>:<PATTERN>
	<CLASS> exclude または include
		exclude (`-`): 同期されるべきでないファイルやディレクトリ
		               注意: 除外フィルタを渡す場合、パラメータの終了を示すため '--' を使用する必要があります
		include (`+`): 同期されるべきファイルやディレクトリ
	<TARGET> directory, file, symlink, all のいずれか
		directory (`d`): ディレクトリのみに適用
		file (`f`): ファイルのみに適用
		symlink (`s`): シンボリックリンクのみに適用
		all (`a`): 上記すべてに適用
		省略時は `a`
	<TYPE> local name, path, subtree name のいずれか
		local name (`N`): 同期のルートディレクトリのみに適用
		path (`p`): 同期ルートディレクトリからの相対パスにマッチ
		            注意: パス区切りは常に '/'、Windows でも同じ
		subtree name (`n`): 同期ルートディレクトリ以下すべてに適用
		省略時は `n`
	<STRATEGY> glob または regexp
		glob (`G` or `g`): ワイルドカードパターンでマッチ
		regexp (`R` or `r`): POSIX拡張正規表現でマッチ
		大文字の `G` または `R` は大文字小文字を区別するマッチを意味します
		省略時は `G`
	<PATTERN> ファイルまたはディレクトリのパターン

例:
	`-f:*.txt`  同期ディレクトリ内およびその配下すべての *.txt ファイルを除外
	`+fg:work*.txt`  上記で除外された work*.txt ファイルを含める
	`-N:*.avi`  同期ディレクトリ直下にあるすべての *.avi ファイルを除外
	`-nr:.*foo.*`  名前に 'foo' を含むファイルを除外
	`-d:private`  名前が 'private' のすべてのディレクトリを除外

詳細: https://help.mega.io/installs-apps/desktop/megaignore
</pre>
