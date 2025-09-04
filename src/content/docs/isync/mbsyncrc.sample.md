---
title: mbsyncrc.sample
description: sample of .config/isyncrc
---

```
翻訳元:/usr/share/doc/isync/examples/mbsyncrc.sample
```

```ini
# グローバル設定セクション
#   ここで指定された値は、後続の Channel セクションで
#   明示的に指定されていない場合のデフォルト値として使用されます。
Expunge None   # メールをサーバーから削除しない設定
Create Both    # ローカルとリモートの両方に新しいメールボックスを作成する設定

# 空行がセクションを区切ることに注意してください！

MaildirStore local
Path ~/Mail/   # ローカルのメール保存先を指定
Trash Trash    # ローカルの削除済みメールボックスを Trash に指定

IMAPStore work
Host work.host.com   # IMAPサーバーのホスト名
User tehuser         # IMAPサーバーのユーザー名
Pass xxxxxxxx        # IMAPサーバーのパスワード
# gnome-keyring からパスワードを取得する例:
#PassCmd "gnome-keyring-query get mail_pw"
# .netrc ファイルからパスワードを取得する例:
#PassCmd "sed -n -e 's,^machine work\\.host\\.com login tehuser password \\(.*\\),\\1,p' < $HOME/.netrc"
# gpg で暗号化されたファイルからパスワードを取得する例:
#PassCmd "gpg --quiet --for-your-eyes-only --decrypt $HOME/imappassword.gpg"
# pwmd からパスワードを取得する例 (http://pwmd.sourceforge.net/):
#PassCmd "echo -ne 'GET myIsp\\tpassword' | pwmc datafile"

Channel work
Far :work:        # リモートの IMAP ストアを指定
Near :local:work  # ローカルの Maildir ストアを指定
Expunge Near      # ローカルで削除したメールをリモートから削除
Sync PullNew Push # 新しいメールの受信 (PullNew) と送信 (Push) を行う

IMAPStore personal
Host host.play.com   # IMAPサーバーのホスト名
Port 6789            # IMAPサーバーのポート番号
TLSType None         # TLS を無効化

Channel personal
Far :personal:       # リモートの IMAP ストアを指定
Near :local:personal # ローカルの Maildir ストアを指定
Expunge Both         # ローカルとリモートの両方から削除
MaxMessages 150      # 同期する最大メール数
MaxSize 200k         # 同期する最大サイズ

IMAPStore remote
Tunnel "ssh -q host.remote.com /usr/sbin/imapd"  # SSH トンネル経由で IMAP サーバーに接続

Channel remote
Far :remote:       # リモートの IMAP ストアを指定
Near :local:remote # ローカルの Maildir ストアを指定

Group boxes
Channels work personal remote  # 複数のチャンネルをまとめたグループを作成

# 異なる Path 接尾辞を持つ場合、同じディレクトリに複数のストアを配置可能。
# すべてのストアを $HOME 直下に配置することも可能。

MaildirStore local-personal
Path ~/Mail/personal-           # ローカルストアのパス
Inbox ~/Mail/personal-INBOX     # ローカルストアの INBOX を指定

MaildirStore local-work
Path ~/Mail/work-               # ローカルストアのパス
Inbox ~/Mail/w0rk_InBoX         # ローカルストアの INBOX を指定 (意図的なスペルミスの例)

Channel personal-joined
Far :personal:                  # リモートの IMAP ストア
Near :local-personal:           # ローカルのストア
Paterns *                       # すべてのメールボックスを同期

Channel work-joined
Far :work:                      # リモートの IMAP ストア
Near :local-work:               # ローカルのストア
Paterns *                       # すべてのメールボックスを同期

Group joined personal-joined work-joined  # チャンネルをグループ化

IMAPStore st1
Host st1.domain.com             # IMAP サーバーのホスト名
AuthMech CRAM-MD5               # CRAM-MD5 認証を使用
CertificateFile ~/.st1-certificate.crt # 証明書を指定

IMAPStore st2
Host imap.another-domain.com    # IMAP サーバーのホスト名
Path non-standard/              # 標準外のパスを使用
TLSVersions -1.2                # TLS 1.2 を無効化

Channel rst
Far :st1:somebox                # リモートの特定のメールボックスを指定
Near :st2:                      # 別の IMAP ストアを指定

IMAPAccount server
Host imaps:foo.bar.com          # IMAP サーバーのホスト名
CertificateFile ~/.server-certificate.crt # 証明書を指定

IMAPStore server
Account server                  # アカウント名
MapInbox inbox                  # INBOX を指定
Trash ~/trash                   # ローカルの Trash フォルダを指定
TrashRemoteNew yes              # リモート側でも新しい Trash メールボックスを作成

MaildirStore mirror
Path ~/Maildir/                 # ローカルの Maildir パス
SubFolders Verbatim             # サブフォルダの構造をそのまま保持

Channel o2o
Far :server:                    # リモートのサーバーストア
Near :mirror:                   # ローカルのストア
Patterns %                      # 特定のパターンに一致するメールボックスのみ同期

Group partial o2o:inbox,sent-mail,foobar # 特定のメールボックスのみグループ化

Channel inbox
Far :server:INBOX               # リモートの INBOX を指定
Near :mirror:server             # ローカルのストア
Patterns *                      # すべてのメールボックスを同期
```
