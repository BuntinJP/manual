---
title: sync
description: 同期を制御します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/sync.md

同期を制御します。

使用法: `sync [localpath dstremotepath| [-dpe] [ID|localpath]`
<pre>
引数が指定されない場合、現在設定されている同期を一覧表示します。
ローカルおよびリモートパスが指定された場合、ローカルフォルダをリモートフォルダと同期します。
ID またはローカルパスが指定された場合、オプションがなければその同期を表示します。

注意: グローバルな同期設定を表示するには "sync-config" コマンドを使用してください。

オプション:
 -d | --delete ID|localpath	同期を削除 (ファイル自体は削除されません)
 -p | --pause ID|localpath	同期を一時停止 (無効化)
 -e | --enable ID|localpath	同期を再開
 [非推奨] --remove ID|localpath	--delete と同じ
 [非推奨] -s | --disable ID|localpath	--pause と同じ
 [非推奨] -r ID|localpath	--enable と同じ
 --path-display-size=N	パス表示に最低 N 文字を使用
 --show-handles	リモートノードハンドル (H:XXXXXXXX) を表示
 --col-separator=X	列区切り文字を "X" に指定
 --output-cols=COLUMN_NAME_1,COLUMN_NAME2,...	表示する列と順序を指定

表示される列:
 ID: 同期の一意識別子
 LOCALPATH: ローカル同期パス
 REMOTEPATH: リモート同期パス (MEGA 内)
 RUN_STATE: 実行状態。可能な値:
 	Pending: 同期設定は読み込まれたがまだ開始していない
 	Loading: ディスクから読み込み中
 	Running: 読み込み済みでアクティブ
 	Suspended: 読み込まれていないが、ディスクに最後の状態が保存されている
 	Disabled: 無効化された (状態キャッシュなし)。新規同期と同じように開始される
 STATUS: 状態。可能な値:
 	NONE: 不明
 	Synced: 同期済み、転送や処理待ちなし
 	Pending: 同期エンジンが計算中
 	Syncing: 転送や処理中
 	Processing: 判別不可 (多忙、後で再試行)
 ERROR: エラー (ある場合)
 SIZE, FILE & DIRS: リモートフォルダのサイズ、ファイル数、ディレクトリ数
</pre>
