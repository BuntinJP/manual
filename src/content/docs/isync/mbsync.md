---
title: mbsync
description: A reference page in my new Starlight docs site.
---

```
翻訳元:https://isync.sourceforge.io/mbsync.html
```

<style type="text/css">
       p       { margin-top: 0; margin-bottom: 0; vertical-align: top }
       pre     { margin-top: 0; margin-bottom: 0; vertical-align: top }
       table   { margin-top: 0; margin-bottom: 0; vertical-align: top }
       h1      { text-align: center }
</style>
<body>

<h1 align="center">mbsync</h1>

<a href="#NAME">名前</a><br>
<a href="#SYNOPSIS">使用法</a><br>
<a href="#DESCRIPTION">説明</a><br>
<a href="#OPTIONS">オプション</a><br>
<a href="#CONFIGURATION">設定</a><br>
<a href="#All Stores">全てのストア</a><br>
<a href="#Maildir Stores">Maildir ストア</a><br>
<a href="#IMAP4 Accounts">IMAP4 アカウント</a><br>
<a href="#IMAP Stores">IMAP ストア</a><br>
<a href="#Channels">チャンネル</a><br>
<a href="#Groups">グループ</a><br>
<a href="#Global Options">グローバルオプション</a><br>
<a href="#CONSOLE OUTPUT">コンソール出力</a><br>
<a href="#RECOMMENDATIONS">推奨事項</a><br>
<a href="#INHERENT PROBLEMS">固有の問題</a><br>
<a href="#FILES">ファイル</a><br>
<a href="#SEE ALSO">関連項目</a><br>
<a href="#AUTHORS">著者</a><br>

<hr>


## 名前 <a name="NAME"></a>

<p style="margin-left:9%; margin-top: 1em">mbsync -
IMAP4 と Maildir のメールボックスを同期する</p>

## 使用法 <a name="SYNOPSIS"></a>

<p style="margin-left:9%; margin-top: 1em"><b>mbsync</b>
[<i>options</i> ...]
{{<i>channel</i>[<b>:</b><i>box</i>[{<b>,</b>|<b>\n</b>}...]]|<i>group</i>}
...|<b>-a</b>} <b><br>
mbsync</b> --list-stores [<i>options</i> ...] [<i>store</i>
...]</p>

## 説明 <a name="DESCRIPTION"></a>

<p style="margin-left:9%; margin-top: 1em"><b>mbsync</b> は
コマンドラインアプリケーションで、メールボックス（現在は Maildir および IMAP4）を同期します。新規メッセージ、メッセージの削除、フラグの変更は双方向に伝搬できます。どの操作を行うかは細かく選択可能です。<br>
同期はユニークなメッセージ識別子（UID）に基づいて行われるため、他のメール同期ツールのように衝突が発生しません。しかし一方で、<b>mbsync</b> は UID 有効性の変更に影響を受けます（根拠のない変更なら問題なく復旧します）。同期状態は各メールボックスペアごとにローカルのテキストファイルに保持され、これらのファイルは同時実行する <b>mbsync</b> プロセスから保護されています。<b>mbsync</b> が動作している間でもメールボックスは安全に変更可能です（下記 <b>INHERENT PROBLEMS</b> の小さな例外を参照）。各メールボックスの複数のレプリカを保持することもできます。</p>

## オプション <a name="OPTIONS"></a>

<p style="margin-left:9%; margin-top: 1em"><b>-c</b>,
<b>--config</b> <i>file</i></p>

<p style="margin-left:18%;">構成を <i>file</i> から読み込みます。デフォルトでは、$XDG_CONFIG_HOME/isyncrc が読み込まれ、それが存在しない場合は順番に ~/.mbsyncrc が試されます。$XDG_CONFIG_HOME は未設定の場合、~/.config がデフォルトになります。</p>

<p style="margin-left:9%;"><b>-a</b>, <b>--all</b></p>

<p style="margin-left:18%;">すべての設定された Channel を選択します。コマンドラインで指定した Channel/Group は無視されます。</p>

<p style="margin-left:9%;"><b>-l</b>, <b>--list</b></p>

<p style="margin-left:18%;">何も同期せず、選択された Channel で利用可能なすべてのメールボックスを列挙して終了します。</p>

<p style="margin-left:9%;"><b>-ls</b>,
<b>--list-stores</b></p>

<p style="margin-left:18%;">何も同期せず、選択された Store に含まれるすべてのメールボックスを列挙して終了します。Store が指定されていない場合は、すべての構成済み Store が列挙されます。これは生の Store 内容で、Channel の <b>Patterns</b> でフィルタされていません。このオプションは Store の構成を検証する際に役立ちます。</p>

<p style="margin-left:9%;"><b>-C</b>[<b>f</b>][<b>n</b>],
<b>--create</b>[<b>-far</b>|<b>-near</b>]</p>

<p style="margin-left:18%;">構成ファイルにある <b>Create</b> オプションを上書きします。詳細は下記を参照してください。</p>

<p style="margin-left:9%;"><b>-R</b>[<b>f</b>][<b>n</b>],
<b>--remove</b>[<b>-far</b>|<b>-near</b>]</p>

<p style="margin-left:18%;">構成ファイルにある <b>Remove</b> オプションを上書きします。詳細は下記を参照してください。</p>

<p style="margin-left:9%;"><b>-X</b>[<b>f</b>][<b>n</b>],
<b>--expunge</b>[<b>-far</b>|<b>-near</b>]</p>

<p style="margin-left:18%;">構成ファイルにある <b>Expunge</b> オプションを上書きします。詳細は下記を参照してください。</p>


<p style="margin-left:9%;">{<b>-n</b>|<b>-o</b>|<b>-u</b>|<b>-g</b>|<b>-f</b>|<b>-0</b>|<b>-F</b>},</p>
<p style="margin-left:9%;">{<b>--new</b>|<b>--old</b>|<b>--upgrade</b>|<b>--gone</b>|<b>--flags</b>|<b>--noop</b>|<b>--full</b>}</p>
<p style="margin-left:9%;">{<b>-L</b>|<b>-H</b>}[<b>n</b>][<b>o</b>][<b>u</b>][<b>g</b>][<b>f</b>],</p>
<p style="margin-left:9%;">{<b>--pull</b>|<b>--push</b>}[<b>-new</b>|<b>-old</b>|<b>-upgrade</b>|<b>-gone</b>|<b>-flags</b>]</p></p>

<p style="margin-left:18%;">構成ファイルにある <b>Sync</b> オプションを上書きします。詳細は下記を参照してください。</p>

<p style="margin-left:9%;"><b>-h</b>, <b>--help</b></p>

<p style="margin-left:18%;">コマンドラインオプションの概要を表示します。</p>

<p style="margin-left:9%;"><b>-v</b>, <b>--version</b></p>

<p style="margin-left:18%;">バージョン情報を表示します。</p>

<p style="margin-left:9%;"><b>-y</b>, <b>--dry-run</b></p>

<p style="margin-left:18%;">シミュレーションモードで起動します。この場合、Channel の状態を確認し、必要な操作をすべて判断しますが、メールボックスや状態ファイルには変更を加えません。</p>

<p style="margin-left:9%;"><b>-e</b>, <b>--ext-exit</b></p>

<p style="margin-left:18%;">拡張終了コードを返します。far 側または near 側に変更が発生した場合は、それぞれ 32 または 64 を加算します（両方に変更があれば合計 96）。エラーがあった場合でも同時に報告されるため、たとえば 65 のような終了コードになることがあります（これは、far 側からの一部のプルは成功したが、他が失敗した場合など）。</p>

<p style="margin-left:9%;"><b>-V</b>, <b>--verbose</b></p>

<p style="margin-left:18%;">詳細モードを有効にし、現在行われている処理を表示します。</p>


<p style="margin-left:9%;"><b>-D</b>[<b>C</b>][<b>d</b>|<b>D</b>][<b>m</b>][<b>M</b>][<b>n</b>|<b>N</b>][<b>s</b>],
<br>
--debug[<b>-crash</b>|<b>-driver</b>|<b>-driver-all</b>|<b>-maildir</b>|<b>-main</b>|<b>-net</b>|<b>-net-all</b>|<b>-sync</b>]</p>

<p style="margin-left:18%;">デバッグカテゴリを有効にします:</p>

<p style="margin-left:23%;"><b>C</b>, <b>crash</b> - 組み込みのクラッシュハンドラを使用 <b><br>
d</b>, <b>driver</b> - ドライバ呼び出しを出力（メタデータのみ） <b><br>
D</b>, <b>driver-all</b> - ドライバ呼び出しを出力（メッセージを含む） <b><br>
m</b>, <b>maildir</b> - maildir のデバッグ情報を出力 <b><br>
M</b>, <b>main</b> - メインのデバッグ情報を出力 <b><br>
n</b>, <b>net</b> - ネットワーク通信（プロトコルのみ）を出力 <b><br>
N</b>, <b>net-all</b> - ネットワーク通信（ペイロードを含む）を出力 <b><br>
s</b>, <b>sync</b> - 同期のデバッグ情報を出力</p>

<p style="margin-left:18%;">crash を除くすべてのカテゴリは、暗黙的に verbose モードを有効にします。カテゴリを指定しない場合は、net-all を除くすべてのカテゴリが有効になります。</p>

<p style="margin-left:9%;"><b>-q</b>, <b>--quiet</b></p>

<p style="margin-left:18%;">進行状況カウンタ（これは標準出力が TTY でない場合、またはデバッグカテゴリが有効な場合に暗黙的に抑制される）、通知、サマリを抑制します。2 回指定すると警告メッセージも抑制されます。</p>

## 設定 <a name="CONFIGURATION"></a>

<p style="margin-left:9%; margin-top: 1em">構成ファイルは必須であり、<b>mbsync</b> はこれがないと実行できません。先頭がハッシュ（<b>#</b>）の行はコメントとして無視されます。構成項目はキーワードと 1 つ以上の引数で構成されます。引数にスペースが含まれる場合はダブルクォート（<b>"</b>）で囲む必要があり、ダブルクォートとバックスラッシュ（<b>\</b>）はバックスラッシュでエスケープする必要があります。すべてのキーワード（引数として使用されるものも含む）は大文字・小文字を区別しません。Bash 形式のホームディレクトリ展開（<b>~</b>）はローカルパスを表すオプションですべてサポートされています。相対的なローカルパスの基準点は、構成ファイルがあるディレクトリです。<br>
わずかなグローバルオプションを除いて、他のオプションは特定のセクションに適用されます。セクションはセクション開始キーワードで始まり、空行またはファイル終端で終了します。各セクションは、そのオブジェクトクラス内でユニークな識別子を定義します。</p>

<p style="margin-left:9%; margin-top: 1em">基本的なオブジェクトクラスは 2 つあります: Store と Channel です。Store はメールボックスの集合を定義します（ローカルまたはリモート）。Channel は 2 つの Store をつなぎ、同期の方法を記述します。<br>
補助的なオブジェクトクラスとして、Account と Group があります。Account はネットワーク Store の接続部分を定義し、複数の Store 間でサーバ設定を共有できるようにします。Group は複数の Channel をまとめて、コマンドラインで入力を省略できるようにします。</p>

<p style="margin-left:9%; margin-top: 1em">ファイルシステム上の位置（特に <b>Path</b> と <b>Inbox</b>）は Store ごとに異なるパス区切り文字を使用する場合があります。<br>
一方、メールボックス名は常に Unix 形式のスラッシュで区切られた形式を使用します。</p>

### 全てのストア <a name="All Stores"></a>

<p style="margin-left:9%; margin-top: 1em">以下のオプションはすべての Store タイプで使用できます。<br>
「反対側の Store」とは、Channel 内でペアになっているもう一方の Store のことを指します。<br>
特別なメールボックス <b>INBOX</b> はすべての Store に存在します。その物理的な位置は Store タイプによって異なります。<br>
<b>Path</b> <i>path</i></p>

<p style="margin-left:18%;">Store（サーバ）のファイルシステム上にあるストアの場所を指定します。これが絶対パスでない場合、その解釈は Store タイプに依存します。この文字列は、この Store で指定されたメールボックス名の前に付与されますが、メールボックス名の一部とはみなされません。これは <b>Patterns</b> や <b>Create</b>（Channel セクション）の扱いに重要です。ディレクトリを指定したい場合は末尾に必ずスラッシュをつけてください。（デフォルト: なし）</p>

<p style="margin-left:9%;"><b>MaxSize</b>
<i>size</i>[<b>k</b>|<b>m</b>][<b>b</b>]</p>

<p style="margin-left:18%;"><i>size</i> バイト以上のメッセージがこの Store に伝搬される際は、小さなプレースホルダーメッセージのみが伝搬されます。これは大きな添付ファイルを含むメッセージを必要になるまでダウンロードしないようにするのに便利です。プレースホルダーを実際のメッセージにアップグレードするには、そのメッセージにフラグを付け、<b>Upgrade</b> 操作を実行する必要があります。注意点として、全く参照しない Store（通常はサーバ側）にこの設定をすると、アップグレードが行われないので注意が必要です。また、フラグをアップグレード要求として利用するため、プレースホルダーメッセージをアップグレードするまでは、そのメッセージのフラグ変更はどちらの Store にも伝搬されません。<br>
サイズ指定に <b>K</b> や <b>M</b> を付けると、それぞれ KiBytes や MeBytes を意味します。<b>B</b> は指定可能ですが意味はありません。<i>size</i> に 0 を指定すると無制限になります。（デフォルト: <i>0</i>）</p>

<p style="margin-left:9%;"><b>MapInbox</b>
<i>mailbox</i></p>

<p style="margin-left:18%;">（<b>Path</b> に対して）<b>INBOX</b> を別名として仮想的にメールボックスを作成します。Channel セクションの <b>Patterns</b> と組み合わせた場合に有用ですが、Maildir の near 側を使う場合は、代わりに <b>Path</b> の下に <b>Inbox</b> を配置するほうが一般的かもしれません。この仮想メールボックスにはサブフォルダがありません。</p>

<p style="margin-left:9%;"><b>Flatten</b> <i>delim</i></p>

<p style="margin-left:18%;">この Store の階層構造を平坦化します。具体的には、<b>/</b>（共通の階層区切り文字）を <i>delim</i> に置き換えます。<b>Mutt</b> のように階層的メールボックスをうまく扱わない MUA のために便利です。よくある区切り文字は <b>.</b> です。<br>
このオプションを使うと、<b>INBOX</b> のサブフォルダは常に <b>Path</b> の下に配置され、「INBOX<i>delim</i>」というプレフィックスを含むことに注意してください。</p>

<p style="margin-left:9%;"><b>Trash</b> <i>mailbox</i></p>

<p style="margin-left:18%;">メッセージを最終的に削除（expunge）する前に、この <b>Trash</b> にコピーします。下記 <b>RECOMMENDATIONS</b> と <b>INHERENT PROBLEMS</b> も参照してください。（デフォルト: なし）</p>

<p style="margin-left:9%;"><b>TrashNewOnly
yes</b>|<b>no</b></p>

<p style="margin-left:18%;">削除時にコピーする対象を、まだ反対側へ伝搬されていないメッセージのみに制限します。これは、反対側の Store でも <b>Trash</b> を設定し（<b>TrashNewOnly no</b>）、そちらで全メッセージがゴミ箱に入れられる構成にする場合に便利です。（デフォルト: <b>no</b>）</p>

<p style="margin-left:9%;"><b>TrashRemoteNew
yes</b>|<b>no</b></p>

<p style="margin-left:18%;">反対側の Store で expunge を実行する際、まだ反対側へ伝搬されていないメッセージを、この Store の <b>Trash</b> にコピーします。これを使うと、反対側の Store に <b>Trash</b> がなくても、すべてのメッセージをアーカイブすることができます。（デフォルト: <b>no</b>）</p>

### Maildir ストア <a name="Maildir Stores"></a>

<p style="margin-left:9%; margin-top: 1em">相対的な <b>Path</b> は、構成ファイルのあるディレクトリを基準に解釈されます。</p>

<p style="margin-left:9%; margin-top: 1em"><b>mbsync</b> は UIDs を必要としますが、Maildir のための標準化された UID 格納方式は存在しません。そのため <b>mbsync</b> は 2 つの方式をサポートしており、それぞれ一長一短があります。<br>
<b>native</b> 方式は、最新の <b>c-client</b> 用 Maildir パッチから流用されたもので、<b>pine</b> と互換性があります。UID 有効値は .uidvalidity というファイルに格納され、メッセージのファイル名に UIDs がエンコードされます。<br>
<b>alternative</b> 方式は、<b>isync</b> バージョン 0.8 および 0.9.x が使用していた UID マッピングに基づきます。メッセージのファイル名の不変部分をキーとして Berkeley DB (.isyncuidmap.db) に対応する UID が記録されます。<br>
<b>native</b> 方式は高速でスペース効率が良くエンディアン非依存で「人間が読める」形式ですが、他のメールボックスからメッセージを新しいファイル名に変更せずにコピーした場合に破綻します。いずれ重複した UID が発生し、それにより UID 有効値の変更が起こって同期が失敗します。<b>alternative</b> 方式の場合、MUA がメッセージのファイル名を <b>mbsync</b> が不変とみなす部分で変更すると、削除と新規作成として扱われ、不要な通信が発生します。<br>
<b>Mutt</b> は両方式とも問題なく動作することが知られています。<br>
<b>mdconvert</b> を使うと、ある方式から別の方式へメールボックスを変換できます。<br>
<b>MaildirStore</b> <i>name</i></p>

<p style="margin-left:18%;">Maildir ストア <i>name</i> を定義し、そのパラメータ用セクションを開始します。</p>

<p style="margin-left:9%;"><b>AltMap yes</b>|<b>no</b></p>

<p style="margin-left:18%;">この Store 内のメールボックスに <b>alternative</b> UID 格納方式を使用します。すでに UID 格納方式を持つメールボックスには影響しません。方式を変えるには <b>mdconvert</b> を使用してください。下記 <b>RECOMMENDATIONS</b> も参照。（デフォルト: <b>no</b>）</p>

<p style="margin-left:9%;"><b>Inbox</b> <i>path</i></p>

<p style="margin-left:18%;">この Store の <b>INBOX</b> の場所を指定します。これは <b>Path</b> とは無関係ですが、同じディレクトリ配下に <b>INBOX</b> を置くこともできます。（デフォルト: <i>~/Maildir</i>）</p>

<p style="margin-left:9%;"><b>InfoDelimiter</b>
<i>delim</i></p>

<p style="margin-left:18%;">メッセージファイル名のベースネームと info フィールドを区切る文字を指定します。Maildir 標準ではコロンですが、DOS/Windows ファイルシステムとの互換性がありません。（デフォルト: <b>FieldDelimiter</b> の値）</p>

<p style="margin-left:9%;"><b>SubFolders
Verbatim</b>|<b>Maildir++</b>|<b>Legacy</b></p>

<p style="margin-left:18%;">階層的メールボックスをオンディスクでどのように管理するかを指定します。このオプションは <b>Flatten</b> が使用されている場合は効果がありません。<br>
たとえば、<b>top/sub/subsub</b> および <b>INBOX/sub/subsub</b> というメールボックスがあるとき、それぞれの実際のディレクトリは以下のようになります：<br>
<b>Verbatim</b> - <i>Path</i><b>/top/sub/subsub</b> および <i>Inbox</i><b>/sub/subsub</b>（一般的に使いたい形式）<br>
<b>Maildir++</b> - <i>Inbox</i><b>/.top.sub.subsub</b> と <i>Inbox</i><b>/..sub.subsub</b>（Courier や Dovecot と互換性がありますが、メールボックスメタデータ形式は互換性がありません）。このモードでは <b>Path</b> を設定しようとするとエラーになります。<br>
<b>Legacy</b> - <i>Path</i><b>/top/.sub/.subsub</b> および <i>Inbox</i><b>/.sub/.subsub</b>（<b>mbsync</b> の旧来形式）<br>
（デフォルト: 未設定。サブフォルダが見つかった場合はエラーを発生）</p>

### IMAP4 アカウント <a name="IMAP4 Accounts"></a>

<p style="margin-left:9%; margin-top: 1em"><b>IMAPAccount</b>
<i>name</i></p>

<p style="margin-left:18%;">IMAP4 アカウント <i>name</i> を定義し、そのパラメータ用セクションを開始します。</p>

<p style="margin-left:9%;"><b>Host</b> <i>host</i></p>

<p style="margin-left:18%;">IMAP サーバの DNS 名または IP アドレスを指定します。<br>
<b>Tunnel</b> を使用する場合、この設定は <b>TLSType</b> が <b>None</b> ではなく、かつ <b>CertificateFile</b> を使用していない場合にのみ必要です。つまりサーバ証明書のホスト名検証に使用されます。</p>

<p style="margin-left:9%;"><b>Port</b> <i>port</i></p>

<p style="margin-left:18%;">IMAP サーバの TCP ポート番号を指定します。（デフォルト: IMAP は 143、IMAPS は 993）<br>
<b>Tunnel</b> を使用している場合、この設定は無視されます。</p>

<p style="margin-left:9%;"><b>Timeout</b>
<i>timeout</i></p>

<p style="margin-left:18%;">IMAP サーバへの接続およびデータ転送のタイムアウト秒数を指定します。0 は無制限です。（デフォルト: <i>20</i>）</p>

<p style="margin-left:9%;"><b>User</b> <i>username</i></p>

<p style="margin-left:18%;">IMAP サーバへのログイン名を指定します。</p>

<p style="margin-left:9%;"><b>UserCmd</b>
[<b>+</b>]<i>command</i></p>

<p style="margin-left:18%;"><i>username</i> を直接指定せず、シェルコマンドを実行して取得します。ユーザー名取得をスクリプト化したい場合に有用です。<br>
コマンドは標準出力に 1 行だけ出力しなければなりません。行末の改行はあってもなくても可です。<b>+</b> を前置すると、コマンドが TTY 出力（プロンプトなど）を行うことを示します。ダブルクォートやバックスラッシュをコマンドに含める場合はエスケープしてください。</p>

<p style="margin-left:9%;"><b>Pass</b> <i>password</i></p>

<p style="margin-left:18%;">IMAP サーバの <i>username</i> に対応するパスワードを指定します。このオプション自体は必須ではありません。パスワードが指定されていない場合、<b>mbsync</b> はパスワード入力を促します。</p>

<p style="margin-left:9%;"><b>PassCmd</b>
[<b>+</b>]<i>command</i></p>

<p style="margin-left:18%;">パスワードを直接指定する代わりに、シェルコマンドを実行して取得します。パスワードファイルやエージェントの利用をスクリプト化できます。<br>
詳細は <b>UserCmd</b> を参照してください。</p>

<p style="margin-left:9%;"><b>UseKeychain
yes</b>|<b>no</b></p>

<p style="margin-left:18%;">macOS の Keychain を使用してパスワードを取得するかどうか。（デフォルト: <b>no</b>）</p>

<p style="margin-left:18%; margin-top: 1em">必要なキーチェーンアイテムを作成するには、以下のようにします:</p>

<p style="margin-left:27%; margin-top: 1em"><b>security
add-internet-password -r imap -s</b> <i>Host</i> <b>-a</b>
<i>User</i> <b>-w</b> <i>password</i> [ <b>-T</b>
<i>/path/to/mbsync</i> ]</p>

<p style="margin-left:9%;"><b>Tunnel</b> <i>command</i></p>

<p style="margin-left:18%;">TCP ソケットを開く代わりに指定されたコマンドを実行して接続します。SSH トンネル経由で IMAP セッションを行う場合などに使われます。</p>

<p style="margin-left:9%;"><b>AuthMechs</b> <i>type</i>
...</p>

<p style="margin-left:18%;">許容する認証方式のリストを指定します。SASL レジストリに掲載されている機構のほか、IMAP の <b>LOGIN</b> 機構も使用できます。ワイルドカード <b>*</b> は現在の <b>TLSType</b> 設定で安全とみなされる機構をすべて表します。実際に使用される機構は、このリスト、サーバ側リスト、およびインストールされている SASL モジュールの共通部分のうち最も安全なものになります。（デフォルト: <b>*</b>）</p>

<p style="margin-left:9%;"><b>TLSType</b>
{<b>None</b>|<b>STARTTLS</b>|<b>IMAPS</b>}</p>

<p style="margin-left:18%;">接続のセキュリティ/暗号化方式を選択します:<br>
<b>None</b> - セキュリティなし。<b>Tunnel</b> を使用している場合はこれがデフォルトです（トンネルは通常安全であるため）。<br>
<b>STARTTLS</b> - ポート 143 で通常の IMAP 接続を確立した後、STARTTLS 拡張を用いて暗号化します。ほとんどのサーバがサポートしており、（トンネル未使用時の）デフォルトです。<br>
<b>IMAPS</b> - ポート 993 (安全な IMAP) への接続時にすぐ TLS で暗号化を行います。</p>

<p style="margin-left:9%;"><b>TLSVersions</b>
{<b>+</b>|<b>-</b>}{<b>1.0</b>|<b>1.1</b>|<b>1.2</b>|<b>1.3</b>}
...</p>

<p style="margin-left:18%;">指定した TLS バージョンを許容リストに追加/削除します。サーバが新しいバージョンへの対応に問題がある場合のみ古いバージョンを使用してください。OpenSSL が対応している場合、新しいバージョンは <b>mbsync</b> が認識していなくても自動的に有効化されます。（デフォルト: 1.2 以降）</p>

<p style="margin-left:9%;"><b>SystemCertificates
yes</b>|<b>no</b></p>

<p style="margin-left:18%;">システム標準の CA（認証局）証明書ストアをサーバ証明書チェーンの検証に使用するかどうか。（デフォルト: <b>yes</b>）</p>

<p style="margin-left:9%;"><b>CertificateFile</b>
<i>path</i></p>

<p style="margin-left:18%;">サーバの証明書を検証するために使用される X.509 証明書を格納したファイルを指定します。2 種類の証明書を含めることができます:</p>

<table width="100%" border="0" rules="none" frame="void" cellspacing="0" cellpadding="0">
<tbody><tr valign="top" align="left">
<td width="18%"></td>
<td width="5%">


<p>Host</p></td>
<td width="4%"></td>
<td width="73%">


<p>これらの証明書は受信したサーバ証明書そのものとしか照合されず、常に有効と見なされます。代表例としては、有効期限切れの証明書を強制的に受け入れる場合などです。</p></td></tr>
</tbody></table>

<p style="margin-left:27%;">これらの証明書は <b>mbsync-get-cert</b> ツールで取得できます。信頼前にフィンガープリントを確認するか、サーバのネットワークが安全に信頼できる場合に転送してください。</p>

<table width="100%" border="0" rules="none" frame="void" cellspacing="0" cellpadding="0">
<tbody><tr valign="top" align="left">
<td width="18%"></td>
<td width="3%">


<p style="margin-top: 1em">CA</p></td>
<td width="6%"></td>
<td width="73%">


<p style="margin-top: 1em">これらの証明書は、受信したサーバ証明書のチェーンを構築・検証する際の信頼の起点として使用されます。<b>SystemCertificates</b> の設定によってはシステムのトラストストアを補完または置き換える形になります。システムのトラストストアそのものを指定する必要はなく、推奨もされません。チェーンはすべて検証されます。</p></td></tr>
</tbody></table>

<p style="margin-left:9%;"><b>ClientCertificate</b>
<i>path</i></p>

<p style="margin-left:18%;">サーバに送信するクライアント証明書が格納されたファイルを指定します。<b>ClientKey</b> も指定する必要があります。<br>
通常はサーバ側でクライアント証明書検証が不要なので、このオプションはあまり必要になりません。</p>

<p style="margin-left:9%;"><b>ClientKey</b> <i>path</i></p>

<p style="margin-left:18%;"><b>ClientCertificate</b> に対応する秘密鍵を格納したファイルを指定します。</p>

<p style="margin-left:9%;"><b>CipherString</b>
<i>string</i></p>

<p style="margin-left:18%;">TLS バージョン 1.2 まで（1.3 以降は対象外）の接続で使用する OpenSSL の暗号スイート文字列を指定します。形式は <b>ciphers</b>(1) を参照してください。（デフォルト: 空文字で、システムワイドポリシーに従う）</p>

<p style="margin-left:9%;"><b>PipelineDepth</b>
<i>depth</i></p>

<p style="margin-left:18%;">IMAP コマンドを同時に送信できる最大数を指定します。<i>1</i> を指定するとパイプライン化を無効にします。これは主にデバッグ用ですが、平均帯域幅を制限したい場合（GMail は非常に高速な接続だと制限が必要かもしれません）や、Microsoft Exchange のような不安定なサーバを扱う場合にも有用です。（デフォルト: 無制限）</p>


<p style="margin-left:9%;"><b>DisableExtension</b>[<b>s</b>]
<i>extension</i> ...</p>

<p style="margin-left:18%;">特定の IMAP 拡張の使用を無効化します。サーバ（あるいは <b>mbsync</b> 自体）にバグがある場合の回避策として使用します。（デフォルト: なし）</p>

### IMAP ストア <a name="IMAP Stores"></a>

<p style="margin-left:9%; margin-top: 1em">相対的な <b>Path</b> は、サーバが好む場所（ユーザーの $HOME や $HOME/Mail など）を基準に解釈される場合があります。<b>INBOX</b> の場所もサーバ依存であり、通常は気にする必要はありません。<br>
<b>IMAPStore</b> <i>name</i></p>

<p style="margin-left:18%;">IMAP4 ストア <i>name</i> を定義し、そのパラメータ用セクションを開始します。</p>

<p style="margin-left:9%;"><b>Account</b>
<i>account</i></p>

<p style="margin-left:18%;">どの IMAP4 アカウントを使用するかを指定します。Account を定義し、ここで参照する方法の代わりに、Account のオプションをすべて直接この Store のセクション内で指定することもできます（ひとつの Store のみで使う場合に有用）。</p>

<p style="margin-left:9%;"><b>UseNamespace
yes</b>|<b>no</b></p>

<p style="margin-left:18%;">サーバの最初の「個人用」NAMESPACE をメールボックス名の前に付与するかどうかを指定します。これを無効にすると壊れた IMAP サーバに対処できる場合があります。<b>Path</b> を指定した場合、このオプションは意味を持ちません。（デフォルト: <b>yes</b>）</p>

<p style="margin-left:9%;"><b>PathDelimiter</b>
<i>delim</i></p>

<p style="margin-left:18%;">サーバの階層区切り文字を指定します。（デフォルト: サーバの最初の「個人用」NAMESPACE から取得）<br>
これを乱用して階層を再解釈しようとしないでください。<b>Flatten</b> を使用してください。</p>

<p style="margin-left:9%;"><b>SubscribedOnly
yes</b>|<b>no</b></p>

<p style="margin-left:18%;">IMAP サーバでサブスクライブされているメールボックスのみを同期するかを指定します。技術的には、このオプションが有効な場合、<b>mbsync</b> は LSUB コマンドを、無効なら LIST コマンドを使用してメールボックス一覧を取得します。このオプションは <b>Patterns</b> と組み合わせて使用する場合に意味があります。（デフォルト: <b>no</b>）</p>

### チャンネル <a name="Channels"></a>

<p style="margin-left:9%; margin-top: 1em"><b>Channel</b>
<i>name</i></p>

<p style="margin-left:18%;">チャンネル <i>name</i> を定義し、そのパラメータ用セクションを開始します。</p>

<p style="margin-left:9%;">{<b>Far</b>|<b>Near</b>}
<b>:</b><i>store</i><b>:</b>[<i>mailbox</i>]</p>

<p style="margin-left:18%;">このチャンネルで接続する Far 側および Near 側の Store を指定します。<b>Patterns</b> を指定している場合、<i>mailbox</i> はプレフィックスとみなされ、パターンマッチの対象にはならず、メールボックス一覧の上書きにも影響しません。もし <i>mailbox</i> が省略されていれば、<b>INBOX</b> が使われます。</p>

<p style="margin-left:9%;"><b>Pattern</b>[<b>s</b>]
[<b>!</b>]<i>pattern</i> ...</p>

<p style="margin-left:18%;">1 つのメールボックスペアではなく、指定した <i>pattern</i>（複数可）にマッチするすべてのメールボックスを同期します。メールボックス名は Far 側・Near 側とも同一とみなされます。パターンは IMAP4 パターンで、<b>*</b> はあらゆる文字列に、<b>%</b> は次の階層区切り文字までにマッチします。<b>!</b> を付けると除外パターンとなります。複数のパターンを指定した場合、あとから指定したパターンが優先されます。<br>
<b>INBOX</b> は、<b>Path</b> の下にある場合を除き、ワイルドカードでマッチしない点に注意してください。<br>
<b>Patterns</b> で選択されたメールボックス一覧は、Channel 参照（<b>Group</b> 指定やコマンドライン）で上書き可能です。<br>
例: "<b>Patterns</b> <i>% !Trash</i>"</p>

<p style="margin-left:9%;"><b>MaxSize</b>
<i>size</i>[<b>k</b>|<b>m</b>][<b>b</b>]</p>

<p style="margin-left:18%;">Store セクションにある同名オプションと同様ですが、Far と Near の両方に適用されます。実際には Store を修正していることになるので、複数の Channel で同じ Store を使う場合、競合が発生しないよう注意してください。</p>

<p style="margin-left:9%;"><b>MaxMessages</b>
<i>count</i></p>

<p style="margin-left:18%;">Near 側の各メールボックスに保持する最大メッセージ数を設定します。例えばサーバ側には完全なアーカイブを保持しつつ、Near 側には最新の数通だけミラーしたいときなどに使います。そのメールボックスに最初に到着したメッセージ（実際の日付ではなく到着順）から削除されていきます。<b>Flags</b>（重要フラグ）や既定では未読メッセージは自動削除から除外されます。<i>count</i> が 0 の場合は無制限です。（グローバルデフォルト: <i>0</i>）</p>

<p style="margin-left:9%;"><b>ExpireUnread
yes</b>|<b>no</b></p>

<p style="margin-left:18%;">未読メッセージを <b>MaxMessages</b> の対象に含めるかどうかを指定します。通常、未読メッセージは重要なものとして扱われ、自動削除されません。長期不在時でも新着メッセージを見落とさないようにするためです。しかし、大量の未読メールを意図的にアーカイブしている場合は <b>MaxMessages</b> をほぼ無効化してしまうので、このオプションを有効にする必要があります。（グローバルデフォルト: <b>no</b>）</p>

<p style="margin-left:9%;"><b>ExpireSide
Far</b>|<b>Near</b></p>

<p style="margin-left:18%;"><b>MaxMessages</b> が設定されている場合にメッセージを削除（expire）する対象を指定します。（グローバルデフォルト: <b>Near</b>）</p>

<p style="margin-left:9%;"><b>Sync</b>
{<b>None</b>|[<b>Pull</b>] [<b>Push</b>] [<b>New</b>]
[<b>Old</b>] [<b>Upgrade</b>] [<b>Gone</b>] [<b>Flags</b>]
[<b>Full</b>]}</p>

<p style="margin-left:18%;">同期操作を選択します:<br>
<b>Pull</b> - Far 側から Near 側への変更を伝搬します。<br>
<b>Push</b> - Near 側から Far 側への変更を伝搬します。<br>
<b>New</b> - 新たに現れたメッセージを伝搬します。<br>
<b>Old</b> - 以前スキップされたメッセージや失敗したメッセージ、期限切れメッセージを伝搬します。この操作はコストが高く、エラーメッセージを繰り返し出す可能性があるため、明示的に指定しないと有効になりません。<br>
<b>Upgrade</b> - プレースホルダーを実際のメッセージにアップグレードします。これは <b>MaxSize</b> が設定されている場合にのみ有用です。<br>
<b>Gone</b> - メッセージの消失を伝搬します。これは実際に削除済み（expunged）になったメッセージに対してのみ適用され、反対側の Store では削除フラグが付与されるだけです。実際の削除には expunge が必要です。<br>
<b>Flags</b> - フラグの変更を伝搬します。Deleted/Trashed もフラグの一種であり、<b>mutt</b> の maildir_trash オプションを使用する場合などに特に関係します。<br>
<b>Full</b> - "<b>New Upgrade Gone Flags</b>" のエイリアスです。<br>
<b>None</b> (<b>--noop</b> 相当) - 何も伝搬しません。expunge のみ行いたい場合に使います。</p>

<p style="margin-left:18%; margin-top: 1em"><b>Pull</b> と <b>Push</b> は方向を示すフラグで、<b>New</b>、<b>Old</b>、<b>Upgrade</b>、<b>Gone</b>、<b>Flags</b> は操作種別のフラグです。2 次元のマトリックス（表）を想定すると理解しやすいでしょう。<br>
最初のスタイルでは、方向フラグを指定しなければ両方向、操作種別フラグを指定しなければ <b>Full</b>、という具合にそれぞれが行や列の全体を示します。たとえば "<b>Sync Pull New Flags</b>" は Far 側から Near 側へ新規メッセージとフラグ変更だけを伝搬し、"<b>Sync New Gone</b>" は両側で新規メッセージと削除を伝搬します。<br>
2 番目のスタイルでは、方向フラグと操作種別フラグを直接連結した複合フラグも使えます。加えて個別のフラグを指定すれば、その行や列を一度に指定できますが、<b>Old</b> は常に明示的に指定が必要です。たとえば "<b>Sync PullNew PullGone Push</b>" は Far 側から Near 側への新規メッセージと削除を伝搬し、Near 側から Far 側へ（Old 以外の）変更をすべて伝搬します。<br>
同じセルを重複して指定するとエラーになります（例: "<b>Sync PullNew Pull</b>" など）。<br>
<b>None</b> は他の操作と併用できません。</p>

<p style="margin-left:9%;"><b>Create</b>
{<b>None</b>|<b>Far</b>|<b>Near</b>|<b>Both</b>}</p>

<p style="margin-left:18%;">同期対象のメールボックスが存在しない場合、自動的に作成するかどうかを指定します。存在せず同期状態もないメールボックスが見つかったときに、作成する側を指定します。自動作成しない場合はエラーとなり、そのメールボックスペアはスキップされます。（グローバルデフォルト: <b>None</b>）</p>

<p style="margin-left:9%;"><b>Remove</b>
{<b>None</b>|<b>Far</b>|<b>Near</b>|<b>Both</b>}</p>

<p style="margin-left:18%;">メールボックスの削除を伝搬するかどうかを指定します。同期状態が存在するのに、メールボックスが見つからない場合にどちらの側を削除対象とするかです。<br>
MailDir メールボックスの場合は、cur/ サブディレクトリを削除するだけで削除されたとみなせます。これは <b>SyncState *</b> との互換性を確保します。<br>
安全のため、非空メールボックスは削除しません。<br>
（グローバルデフォルト: <b>None</b>）</p>

<p style="margin-left:9%;"><b>Expunge</b>
{<b>None</b>|<b>Far</b>|<b>Near</b>|<b>Both</b>}</p>

<p style="margin-left:18%;">削除フラグが付いたすべてのメッセージを（Far/ Near 側で）完全に削除するかを指定します。同じ側に対して <b>ExpungeSolo</b> と排他使用です。下記 <b>RECOMMENDATIONS</b> 参照。（グローバルデフォルト: <b>None</b>）</p>

<p style="margin-left:9%;"><b>ExpungeSolo</b>
{<b>None</b>|<b>Far</b>|<b>Near</b>|<b>Both</b>}</p>

<p style="margin-left:18%;">削除フラグが付いていて、かつ反対側に対応するメッセージが存在しないものだけを（Far/ Near 側で）完全に削除します。<b>Sync Gone</b> と組み合わせると削除のミラーリングが可能になります。ただし、他で削除を実行する仕組みがあると矛盾が生じる恐れがあります。また、UIDPLUS 拡張をサポートしない IMAP ストアでは動作しません。同じ側に対して <b>Expunge</b> と排他使用です。（グローバルデフォルト: <b>None</b>）</p>

<p style="margin-left:9%;"><b>CopyArrivalDate</b>
{<b>yes</b>|<b>no</b>}</p>

<p style="margin-left:18%;">メッセージとともに到着時刻（internal date）を伝搬するかどうかを指定します。時刻ベースのソートを維持したい場合に有用です。IMAP では internal date の定義が厳密ではありませんが、概ね到着時刻と近いことが多いです。（グローバルデフォルト: <b>no</b>）</p>

<p style="margin-left:9%; margin-top: 1em"><b>Sync</b>、<b>Create</b>、<b>Remove</b>、<b>Expunge</b>、<b>ExpungeSolo</b>、<b>MaxMessages</b>、<b>ExpireUnread</b>、<b>ExpireSide</b>、<b>CopyArrivalDate</b> は、いずれもセクションの外でグローバルに指定できます。グローバル設定は Channel 特有の設定に上書きされ、さらにコマンドラインオプションで上書きされます。<br>
<b>SyncState</b> {<b>*</b>|<i>path</i>}</p>

<p style="margin-left:18%;">このチャンネルの同期状態ファイルの場所を指定します。<b>*</b> を指定すると .mbsyncstate というファイルを Near 側のメールボックスに直接置きます（Maildir にしか使えません）。<b>*</b> ではない場合は、Near 側メールボックス名の前に付ける文字列として解釈されます。パスをディレクトリとして指定したい場合は末尾にスラッシュが必要です。<br>
このオプションはセクション外で指定してグローバルに適用することもできます。その場合、付加される文字列は<br>
<b>:</b><i>far-store</i><b>:</b><i>far-box</i><b>_:</b><i>near-store</i><b>:</b><i>near-box</i><br>
という形式になります（<b>FieldDelimiter</b> も参照）。<br>
（グローバルデフォルト: <i>$XDG_STATE_HOME/isync/</i>、<i>~/.local/state/isync/</i> または <i>~/.mbsync/</i>（レガシー） もし前者が存在しない場合。$XDG_STATE_HOME は未設定の場合 <i>~/.local/state</i> です。）</p>

### グループ <a name="Groups"></a>

<p style="margin-left:9%; margin-top: 1em"><b>Group</b>
<i>name</i>
[<i>channel</i>[<b>:</b><i>box</i>[<b>,</b>...]]] ...</p>

<p style="margin-left:18%;">グループ <i>name</i> を定義し、そのパラメータ用セクションを開始します。なお、Group には独自の名前空間があるため、同名の Channel と衝突した場合はコマンドライン上で Group が優先されます。<br>
1 行に複数の Channel を指定することができます。<br>
もし <i>channel</i> に 1 つ以上の <i>box</i> を指定すると、Channel の <b>Patterns</b> で指定されたものの代わりにこれらのメールボックスを同期対象とします。同様のことはコマンドラインでも行えます。コマンドラインでは改行でメールボックス名を区切ることもできます。</p>

<p style="margin-left:9%;"><b>Channel</b>[<b>s</b>]
<i>channel</i>[<b>:</b><i>box</i>[<b>,</b>...]] ...</p>

<p style="margin-left:18%;">指定したチャンネルをグループに追加します。このオプションはグループ内で複数回指定できます。</p>

### グローバルオプション <a name="Global Options"></a>

<p style="margin-left:9%; margin-top: 1em"><b>FSync
yes</b>|<b>no</b></p>

<p style="margin-left:18%;">強制的な書き込み（fsync）を <b>mbsync</b> が行うかどうかを選択します。これによりシステムクラッシュや停電後のデータ安全性が変わります。data=ordered モードでマウントされたファイルシステムでは無効でも比較的安全ですが、data=writeback では有効にするのが賢明です。古いファイルシステムではオーバーヘッドが大きすぎるかもしれません。（デフォルト: <b>yes</b>）</p>

<p style="margin-left:9%;"><b>FieldDelimiter</b>
<i>delim</i></p>

<p style="margin-left:18%;">グローバル <b>SyncState</b> に付加する文字列内でフィールドを区切る文字を指定します。<b>mbsync</b> はコロンを好みますが、DOS/Windows での互換性を考える場合もあります。<b>SyncState</b> が <b>*</b> の場合このオプションに意味はありませんが、<b>InfoDelimiter</b> のデフォルト値にも影響します。（グローバルデフォルト: Windows では <i>;</i>、それ以外では <i>:</i>）</p>

<p style="margin-left:9%;"><b>BufferLimit</b>
<i>size</i>[<b>k</b>|<b>m</b>][<b>b</b>]</p>

<p style="margin-left:18%;">1 Channel あたり、かつ 1 方向あたりで、<b>mbsync</b> が同時に使用するメモリがこの値を上回らないようにします。これは絶対制限ではなく、単一メッセージのサイズがこの値を超える場合もあります。（デフォルト: <i>10M</i>）</p>

## コンソール出力 <a name="CONSOLE OUTPUT"></a>

<p style="margin-left:9%; margin-top: 1em">標準出力がコンソールに接続されている場合、<b>mbsync</b> はデフォルトで進行状況カウンタを表示します。出力は以下のような例になります:</p>

<p style="margin-left:14%; margin-top: 1em">C: 1/2 B: 3/4
F: +13/13 *23/42 #0/0 -0/0 N: +0/7 *0/0 #0/0 -0/0</p>

<p style="margin-left:9%; margin-top: 1em">これは、全 Channel、全メッセージボックス、および Far/Near 両側で処理されたメッセージの累積状況を表します。加えられたメッセージ、フラグの更新があったメッセージ、ゴミ箱へ移動したメッセージ、expunge されたメッセージ数を示しています。最終的な合計を事前に計算しないため、同期の進行に伴って数値が増えていきます。</p>

<p style="margin-left:9%; margin-top: 1em">リダイレクトされていない場合でも、<b>mbsync</b> は終了時に上記のサマリを表示します（quiet モードを除く）。</p>

## 推奨事項 <a name="RECOMMENDATIONS"></a>

<p style="margin-left:9%; margin-top: 1em">IMAP サーバが自動的に削除フラグ付きメッセージを即時削除（auto-expunge）しないようにするのが望ましいです。パフォーマンスが低下し、意味的にも疑問が残ります。具体的には、Gmail ではこれを無効化する設定が必要です。</p>

<p style="margin-left:9%; margin-top: 1em">デフォルトでは、<b>mbsync</b> はメッセージを実際には削除しません。expunge は削除フラグを反対側の Store に伝搬するだけです。一度セットアップが正しく機能するのを確認してから、<b>Expunge</b> に <b>Both</b> を設定して実際の削除が反映されるようにするのが一般的です。</p>


<p style="margin-left:9%; margin-top: 1em"><b>mbsync</b> の組み込み <b>Trash</b> 機能は、削除フラグがすでについたメッセージの削除（expunge）を <b>mbsync</b> が伝搬する場合に作用します。ゴミ箱のあるストア（通常は IMAP サーバ）側で削除が伝搬されたときにゴミ箱へコピーされる仕組みです。<br>
一方、まだ伝搬されていないメッセージをゴミ箱に入れたい場合（<b>Mutt</b> の <b>maildir_trash</b> など）は、メッセージを削除フラグ付きにしつつ expunge しない運用が必要です。しかし多くの場合、削除される前にすでにメッセージは伝搬されており、そこまで最適化したくない場合が多いです。そのため <b>TrashNewOnly</b> と <b>TrashRemoteNew</b> はあまり使われないことが多いです。</p>

<p style="margin-left:9%; margin-top: 1em">もしサーバ側が自動的なゴミ箱移動（Gmail がそうです）をサポートしている場合、<b>mbsync</b> の <b>Trash</b> 機能よりそちらに任せるほうが簡単です。その際、ゴミ箱を他のメールボックス同様に同期したいなら、<b>mbsync</b> の <b>Trash</b> オプションは設定しないでください。</p>

<p style="margin-left:9%; margin-top: 1em">M$ Exchange 2013 を使用する場合、サーバのバグにより <b>DisableExtension MOVE</b> を設定しないと、<b>Trash</b> 機能が動作しない可能性があります。</p>

<p style="margin-left:9%; margin-top: 1em">デフォルトのより効率的な UID マッピング方式（native）を使用する場合、Maildir フォルダ間でメッセージを移動するときに MUA がファイル名を再生成する必要があります。<b>Mutt</b> は常に新しいファイル名を使用しますが、<b>mu4e</b> は設定が必要です:</p>

<p style="margin-left:14%;">(setq
mu4e-change-filenames-when-moving t)</p>

<p style="margin-left:9%;">一般的には、新しいメッセージと同じように完全に新しいファイル名が生成されることが望ましいですが、<b>,U=</b><i>xxx</i> を取り除くだけでも問題ありません。</p>

## 固有の問題 <a name="INHERENT PROBLEMS"></a>

<p style="margin-left:9%; margin-top: 1em">メッセージ一覧を取得した後に行われた変更は、次回 <b>mbsync</b> を実行するときまで同期されません。</p>

<p style="margin-left:9%; margin-top: 1em"><b>Trash</b> を UIDPLUS をサポートしない IMAP ストア（M$ Exchange 2010 以前など）で使用すると、競合条件が発生します: メッセージ一覧を取得した後、expunge する前に削除フラグが付けられたメッセージは失われる可能性があります。他のクライアント（<b>mbsync</b> も含む）が同時にアクセスしていなければ問題はありません。</p>

## ファイル <a name="FILES"></a>

<p style="margin-left:9%; margin-top: 1em"><b>$XDG_CONFIG_HOME/isyncrc</b>
（通常 <b>~/.config/isyncrc</b>）</p>

<p style="margin-left:18%;">デフォルトの構成ファイル。ドキュメントディレクトリにサンプルファイルがあります。</p>

<p style="margin-left:9%;"><b>$XDG_STATE_HOME/isync/</b>
（通常 <b>~/.local/state/isync/</b>）</p>

<p style="margin-left:18%;">同期状態ファイルを格納するディレクトリ。</p>

<p style="margin-left:9%;"><b>~/.mbsyncrc</b></p>

<p style="margin-left:18%;">レガシー構成ファイル。</p>

<p style="margin-left:9%;"><b>~/.mbsync/</b></p>

<p style="margin-left:18%;">レガシーの同期状態ファイル格納ディレクトリ。</p>

## 関連項目 <a name="SEE ALSO"></a>

<p style="margin-left:9%; margin-top: 1em">mdconvert(1),
mutt(1), maildir(5)</p>

<p style="margin-left:9%; margin-top: 1em">最新情報は
http://isync.sf.net/ を参照してください。</p>

<p style="margin-left:9%; margin-top: 1em">SASL 機構のリストは
http://www.iana.org/assignments/sasl-mechanisms/sasl-mechanisms.xhtml
に掲載されています</p>

## 著者 <a name="AUTHORS"></a>

<p style="margin-left:9%; margin-top: 1em">最初は Michael R. Elkins によって書かれ、その後 Oswald Buddenhagen によって書き直され、現在メンテナンスされています。その他多くの人々による貢献があります。詳細は AUTHORS ファイルを参照してください。</p>
<hr>

</body>
