---
title: BACKUP
description: MEGAcmdを使ったフォルダのバックアップ
sidebar:
  order: 3
---

> 翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/BACKUPS.md

# MEGA-BACKUPS - MEGAcmd を使ったフォルダのバックアップ

これはバックアップの設定方法に関する簡単なチュートリアルです。

注意：ここに記載されているコマンドは対話モードでの使用を前提としています。MEGAcmdShell 内で実行してください。

## 作成

例:
backup /path/mega/folder /remote/path --period="0 0 4 \* \* \*" --num-backups=10

これは「myfolder」を/remote/path にバックアップする設定で、毎日午前 4 時（UTC）に実行されます。最後の 10 個のコピーを保存します。  
最初のバックアップは即座に実行されます。  
この例では cron 形式の時間指定を使用しています。  
詳しくは「backup --help」を参照してください。

バックアップは以下のように保存されます：

```
 /remote/path/myfolder_bk_TIME1
 /remote/path/myfolder_bk_TIME2
 /remote/path/myfolder_bk_TIME3
 ...
```

## 一覧表示

設定されているバックアップは`backup`と入力することで一覧表示できます：

```
TAG   LOCALPATH                 REMOTEPARENTPATH                  STATUS
4     /path/mega/folder            /remote/path                   ACTIVE
```

TAG に注目してください。バックアップの設定変更や削除/中止の際にこの TAG を指定できます。

### 追加情報

"backup -l"と入力するとバックアップの詳細情報が表示されます。ここでは次回のバックアップ予定日時が確認できます：

```
TAG   LOCALPATH                 REMOTEPARENTPATH                  STATUS
4     /path/mega/folder            /remote/path                  ONGOING
  Max Backups:   4
  Period:         "0 0 4 * * *"
  Next backup scheduled for: Fri, 19 Jan 2018 04:00:00 +0000
   -- CURRENT/LAST BACKUP --
  FILES UP/TOT     FOLDERS CREATED    PROGRESS
       22/33                0         57.86/57.86 KB  1.27%

```

また、現在進行中のバックアップ（または進行中でなければ最後のバックアップ）の進行状況も確認できます。

### バックアップ履歴：

"backup -h"を使うと、既存のバックアップの状態や開始時間を確認できます：

```
TAG   LOCALPATH                 REMOTEPARENTPATH                  STATUS
4     /path/mega/folder            /remote/path                  ONGOING
   -- SAVED BACKUPS --
  NAME                             DATE                    STATUS  FILES FOLDERS
  myfolder_bk_20180115175811       15Jan2018 17:58:11    COMPLETE     33      10
  myfolder_bk_20180116182611       16Jan2018 18:26:11    COMPLETE     33      10
  myfolder_bk_20180117182711       17Jan2018 18:27:11     ABORTED     13      10
  myfolder_bk_20180118182911       18Jan2018 18:29:11     ONGOING     23      10
```

ヒント：Linux や Mac を使っている場合、非対話モードで状態をリアルタイムに監視するには以下を使います：

```
watch mega-backup -lh
```

# 操作：

## 中止

進行中のバックアップはタグまたはローカルパスで中止できます。例：

```
backup -a 4
```

これによりすべての転送がキャンセルされ、バックアップは中止状態になります。

## 削除

同様に、バックアップ設定を削除してそのフォルダのバックアップを停止できます：

```
backup -d /path/mega/folder
```

既存のバックアップファイルは削除されず、MEGA 上に残ります。

## 設定変更

バックアップの周期や保持するバックアップ数は以下のように変更できます：

```
backup 4 --period=2h
```

TAG=4 のバックアップの周期を 2 時間に設定します。

```
backup /path/mega/folder --num-backups=1
```

バックアップの保持数を 1 つに設定します。  
データ損失を防ぐため、最大保存数を超えるまで古いバックアップは削除されません。
