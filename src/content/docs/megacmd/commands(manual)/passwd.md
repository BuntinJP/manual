---
title: passwd
description: ユーザーパスワードを変更します。
---

>翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/commands/passwd.md

ユーザーパスワードを変更します。

使用法: `passwd [-f]  [--auth-code=XXXX] newpassword`
<pre>
注意: パスワードを変更すると、現在のものを除くすべてのデバイスでのアクティブなセッションが閉じられます。

 パスワードには " や ' を含めないでください。

オプション:
 -f   	強制 (確認なし)
 --auth-code=XXXX	二要素認証コード。詳細: https://mega.nz/blog_48
</pre>
