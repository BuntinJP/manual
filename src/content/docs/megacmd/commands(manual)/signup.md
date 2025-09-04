---
title: signup
description: 指定されたメールアドレスでユーザー登録します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/signup.md

指定されたメールアドレスでユーザー登録します。

使用法: `signup email password [--name="Your Name"]`
<pre>
パスワードに " または ' を含めないでください。

オプション:
 --name="Your Name"	登録する名前。例: "John Smith"

 登録確認のメールを受信します。
 メールを受信したら、そのメールに含まれるリンクを "confirm" で確認してください。

警告: エンドツーエンド暗号化の仕組みにより、パスワードまたはリカバリーキー (マスターキー) のバックアップがなければデータにアクセスできません。
 マスターキーをエクスポートして安全な場所に保管することで、データを失うことなく新しいパスワードを設定できます。
 常にマスターキーを物理的に管理してください (例: クライアントデバイス、外部ストレージ、印刷物)。
 詳細は "masterkey --help" を参照してください。
</pre>
