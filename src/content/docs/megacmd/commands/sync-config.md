---
title: sync-config
description: 同期設定を制御します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/sync-config.md

同期設定を制御します。

使用法: `sync-config [--delayed-uploads-wait-seconds | --delayed-uploads-max-attempts]`
<pre>
現在の設定を表示します。

同期で頻繁に変更されるファイルの新しいアップロードは、リソースの無駄を避けるため待機時間が経過するまで遅延されることがあります。
 遅延時間と変更回数は時間とともに変わる可能性があります。

オプション:
 --delayed-uploads-wait-seconds   遅延されているファイルが再びアップロードされる前に待機する秒数を表示
 --delayed-uploads-max-attempts   ファイルが短時間に変更される最大回数を表示。これを超えると遅延されます
</pre>
