---
title: speedlimit
description: アップロード/ダウンロードの速度制限、または最大接続数を表示/変更します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/speedlimit.md

アップロード/ダウンロードの速度制限、または最大接続数を表示/変更します。

使用法: `speedlimit [-u|-d|--upload-connections|--download-connections] [-h] [NEWLIMIT]`
<pre>
NEWLIMIT は新しい制限です。オプションが指定されない場合、NEWLIMIT はダウンロード/アップロード速度制限の両方に適用されます。
 速度について 0 を指定すると無制限になります。
 NEWLIMIT には (B)ytes, (K)ilobytes, (M)egabytes, (G)igabytes, (T)erabytes を含めることができます。
 例: "1m12k3B" "3M"。単位を指定しない場合はバイトが前提です。

オプション:
 -d                       ダウンロード速度制限を設定/表示 (秒あたりのサイズ)
 -u                       アップロード速度制限を設定/表示 (秒あたりのサイズ)
 --upload-connections     アップロード転送の最大接続数を設定/表示
 --download-connections   ダウンロード転送の最大接続数を設定/表示

表示オプション:
 -h                       人間が読みやすい形式

注意: これらの制限は次回 MEGAcmd サーバー実行時に保存されます。ログアウトすると削除されます。
</pre>
