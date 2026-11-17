# 翻訳対象の進捗（2026-11-17）

指定された翻訳対象一覧を2026-11-17に確認した。取り込みと翻訳完了は区別する。この報告はローカル受理・生成の状態であり、本番公開や全件完了を意味しない。

最新集計: done466 / pending0（AWS旧版155＋現行版157を別版として保持）、過去の誤抽出・誤識別の履歴14件はblockedで保持。今回新たに155文書29198セグメントを受理。従来の登録済み有効307対象に、照合で検出/選定した4文書404セグメントを追加し、当時の有効311対象の翻訳・受理・生成が完了した。その後、AWS現行版155スナップショットを追加受理し、有効466対象となった。対象一覧外の文書、全製品資料、正式man未登録区分の網羅や本番公開の完了を意味しない。

## 第1受理バッチ

- GNU cut、GNU diff、OpenBSD cut/paste、FreeBSD cut/paste、macOS cut/paste/pbcopy/pbpaste/xcode-select および OpenBSD tmux の12文書を全文翻訳・原文照合・受理・生成した。
- GNU diff は Diffutils 3.12 の第13章「Invoking diff」と13.1全オプション（173セグメント）。全巻やroff manページではない。原文は公式HTMLをFirecrawl rawHtml経由で取得し、取得経路と上流バイト同一性の限界を記録した。
- FreeBSD cut/paste は旧抽出がナビゲーション4セグメントのみを拾っていた。原文を変更せず、本文preとa[id]見出しを解析し、cut38/paste37セグメントを再生成。旧ジョブは履歴付きでblocked、新IRの別ジョブをdoneとした。
- FHS 3.0（2015-03-19）を公式原文・許諾・構造照合付きで新規登録。1544セグメント、初回登録時には未翻訳。現在は後続バッチで全文受理済み。
- tmux は全2823セグメントを翻訳・原文照合して受理・生成した。全範囲を担当ごとに自己照合し、うち450セグメントは別担当が独立照合。原文テキスト161845文字（空白除去後）と28見出し・20表・57コードブロックのIR保持も確認した。

## 対象別の状態

blockedの旧IR・旧版識別ジョブを除く。保存済みセグメントにはdoneの受理済み訳と途中訳の両方を含む。

| 提供元 / 製品 | 文書数 | done | 全セグメント | 保存済み |
| --- | ---: | ---: | ---: | ---: |
| apple/jq | 1 | 1 | 1096 | 1096 |
| apple/macos | 6 | 6 | 206 | 206 |
| aws/cli | 312 | 312 | 64108 | 64108 |
| convertx/convertx | 1 | 1 | 191 | 191 |
| freebsd/base | 2 | 2 | 75 | 75 |
| gnu/coreutils | 1 | 1 | 41 | 41 |
| gnu/diffutils | 2 | 2 | 341 | 341 |
| gnu/gnupg | 1 | 1 | 606 | 606 |
| ietf/openpgp | 1 | 1 | 3079 | 3079 |
| jqlang/jq | 1 | 1 | 1135 | 1135 |
| libressl/portable | 1 | 1 | 2197 | 2197 |
| linuxfoundation/fhs | 1 | 1 | 1544 | 1544 |
| mutt/mutt | 1 | 1 | 143 | 143 |
| openbsd/base | 3 | 3 | 2905 | 2905 |
| openssl/openssl | 1 | 1 | 277 | 277 |
| paru/paru | 2 | 2 | 533 | 533 |
| samba/cifs-utils | 10 | 10 | 632 | 632 |
| samba/samba | 113 | 113 | 13005 | 13005 |
| swaks/swaks | 1 | 1 | 546 | 546 |
| tripwire/tripwire | 3 | 3 | 382 | 382 |
| util-linux/bsd-utils | 1 | 1 | 62 | 62 |
| wireguard/tools | 1 | 1 | 64 | 64 |

## 第2継続バッチ

- Samba60文書、WireGuard wg、Tripwire twfiles/twconfig、ConvertXの計64文書1566セグメントを追加受理・生成。第1バッチと合わせて76文書4930セグメント。キューはdone232/pending75、過去の誤抽出・誤識別の履歴11件はblockedで保持。全対象の完了ではない。
- Samba7文書は原文VERSION節に4.25.0と明記されていたため、currentから4.25.0の別leafへ訂正。旧原文・旧ジョブ・当時の観察を残し、訂正の根拠を追記した。対象はpam_winbind.conf、ntlm_auth、traffic_learner、traffic_replay、pam_winbind、samba-tool、samba_downgrade_db。
- ntlm_authはさらに元HTMLの不正なdiv入れ子で4節が.refentry外へ移動していた。未受理の62segジョブを保留し、原文不変のまま当該ページだけbody selectorで74segへ再解析。新ジョブ0521c776d2fbc376で翻訳を継続する。
- ConvertXはGitHubのmarkdown-accessiblity-table wrapperを安全なコンテナとして解析する回帰修正により、3表46行156セルと2コードブロックを保持。旧41segを保留して191segで全文翻訳・受理。同タグのAGPLv3原文も保存した。
- Tripwire許諾文の翻訳には権利者承認の条件があるため、許諾と著作権の英語原文を生成本文にも保持し、日本語は非公式参考訳とした。
- smbgetのUNC例1箇所を原文通りのバックスラッシュ4/2/2へ修正。旧受理訳とレビューはtranslation/revisions/に保持し、queueのamended履歴と新draftShaを記録して再生成・検証した。

## 残作業・再開方法

1. 現在の有効キューは466件すべてdone（別版を含む）。tmux・smb.confを重複予約しない。新たな取得/未登録区分は別の原文・版確認から開始する。
2. `translation-queue/*.json` が受理状態の正本。過去の誤抽出14ジョブはblockedで履歴保持し、有効対象へ二重計上しない。
3. 独立レビューはOpenBSD cut/paste、tmuxの450セグメント、smb.confの復旧追加1198セグメント、新規正式man2件とAWS追加2件の全404セグメントで実施。その他は各記録の実施範囲に限り、ハッシュ検証を意味レビューの代わりとはしない。
4. GNU/GFDL、FHS独自許諾、macOSの明示的再配布許諾を確認できない文書など、文書ごとの権利上の観察は原文とレビュー記録に保持。運営者の公開判断とは分離する。

## 検証

初回CIで `bun run verify` は40テストを含め成功。ブラウザE2Eは30成功・1失敗（新訳cutにfindの使用例が増えたことによる固定件数の期待値）で、提供元の一致とfindリンクを確認する期待値へ修正。修正後CI（HEAD4dc569f3）はverifyとE2E全31件に成功。tmux全文受理を含む最終HEADの結果はPR本文に記載。全原文/キューの整合性、型検査、lint、対象回帰テストを実行する。環境に `/usr/bin/mandoc` がないため、roffをその場で変換する既存テスト3件は実行失敗となる。保存済み原文・IRによる通常の生成はmandocを必要としない。

## 第3継続バッチ

Sambaの長大文書群、Mutt、OpenSSL、Paru、Tripwire、Swaks、FHS、GPG、OpenPGP RFC9580、LibreSSL、jq両版を受理・生成。残りはsmb.confのみ。原文の上付き・下付き数式と不正なリスト構造を失わない解析回帰テストを追加し、RFC9580は263598文字、GPGは135091文字の原文とIRの順序一致を確認した。旧IRと旧ジョブは履歴として保持。GNU GPGの文書自体のGPLv3-or-later根拠を同タグのTexinfoとCOPYINGで保存。LibreSSL2197件とjq上流1135件・Apple1096件は全文自己照合と逆抽出監査を完了した。Apple jq固有の許諾資料は補足調査中で、上流のCC BY 3.0とコードのMITを区別し、Apple固有条件まで確認済みとはしていない。

ローカル検証: content/queue整合性、lint、型検査が成功、43テスト中40成功・mandoc不在による既存3件失敗。ビルド422ページ成功。CIでは公式mandocを導入して全検証とE2Eを再実行する。


## 復旧・最終受理（2026-11-17）

公開PR #12 HEAD 2a899563から原文・IR・既存3117訳を復元。smb.conf残1198セグメントを重複しない4範囲で翻訳・自己照合し、別担当が各範囲全件を独立照合。指摘された設定'= no'の曖昧な「有効」表現、逆方向接続と設定無効時の条件を訂正・再照合した。全4315セグメントを正規save/review/completeで受理した。既存3117訳の独立レビューを新たに実施したとは主張しない。

別途、原文全文354435文字（空白除去）、633見出し、648定義語、61コード例とリスト構造の件数/本文順序を独立に照合し、抽出欠落を検出しなかった。詳細はsmb.confのtranslation/review.mdとparts/recovery-20261117-*。

E2E登録時の同名別sectionをmanual.idで一意化。またjqの定義リスト内コード例が空行後にMarkdown見出しへ変わる実不具合を修正した。ネストしたliteral改行をHTML数値参照にし、復号後のコード全文・空白・改行を単体テストで厳密比較。影響50生成ファイルでもpre本文の修正前後完全一致を確認。修正checkpoint59ff109ではBun1.3.14/Node24・mandocによるverify44件と実Chrome E2E191件が成功。smb.conf追加後の最終結果はPR本文に記録する。

PR #11のOS表・サイドバー件数は独立ブランチのまま保持し、この内容ブランチへ統合・マージしていない。失われた後続ローカル成果に含まれたLinux代表2ページはこの復元HEADに無く、正式man区分の追加・原文照合は別の残作業として扱う。Linux(GNU)/Linux(BSD)の原文未登録・未確認を、翻訳済みや不存在と断定しない。

最終ローカル検証: Bun1.3.14 / Node24.22.0 / macOS mandoc。`bun run verify` は原文・queue・lint・型・44/44単体テスト・423ページbuildまで成功。実Google Chrome E2E192/192成功。CI結果とpreview URLはPR本文で対象SHAとともに追記する。


## 元依頼との再照合と正式 man 追加

ユーザー指定ObsidianノートはMCP timeout後、正規ローカルvaultの同名ノートを読んで照合した。同期サーバーの最新版と完全一致するとまでは確認していない。従来intake304件は現行doneの後継へ全件対応、指定OpenBSD tmux2823セグメントを含め保存範囲の漏れを検出しなかった。diff/FHS/colは現ノート本文にはなく、後続会話の追加依頼・新規選定として分ける。

現在の公式AWS SSM CLI2.40.4索引は旧2.39.3保存版に対し register-default-host-management-configuration と deregister-default-host-management-configuration の2件が増えていた。無改変公式HTMLを取得し174セグメントを全件翻訳・自己/独立レビュー・受理。旧155ページは変更せず、AWSは計157ページとなる。現在のコマンドURL集合を表現できたことと、旧155本文がすべて2.40.4へ更新済みであることは別で、後者は主張しない。waitと子command-executedも照合した。

新たに選んだGNU Diffutils3.12正式diff(1) roff168セグメントと、Linuxで配布されるBSD由来util-linux2.41 col(1) roff62セグメントを追加。旧GNU Texinfo diff章は保持し別variantへ保存。以前の未回収「Linux代表2ページ」の名前がこの2コマンドだったとは断定しない。colは4.4BSD-Lite系配布とBerkeley文書来歴を根拠に明示的bsd-utils/linux-upstream区分へ置き、他OSのmanやutil-linux全体をLinuxBSDと読み替えない。

colの標準groff外部マクロ・未使用aliasを必要箇所だけ自己完結化し、原本と変換記録をハッシュ保持。本文/URLの一致を確認し、英語の元著作権・4条件・免責全文をliteral付録と資料へ保持。原署名bytesは保持したが暗号学的検証済みとはしない。各新文書は全件自己/独立意味レビュー、全原文→IR抽出監査済み。

AIXは非公開とは扱わない。IBMはAIXのmanがKnowledge Centerと共通HTMLと説明している。一方、7.3個別原文の本文/版/sectionは今回の取得経路で未確定で、数字sectionを捏造せず原文未登録・確認待ちのまま。Bun/ElysiaをConvertX実装技術とした従来の解釈や、ノート内のBSD?がすべてのBSD派生を含むかなど、抽象的範囲まで全網羅したとは主張しない。

詳細と取得索引: translation-queue/intakes/2026-11-17-expansion.json および同名ディレクトリ。PR11のOS表では明示的LinuxBSD来歴だけ分類し、正本内容PR12とは独立に保持する。マージ・本番配備は行わない。

追加4文書の最終単独検証: Bun1.3.14 / Node24.22.0 / macOS mandoc、verify44/44・428ページbuild成功。新SSM2ページの狭幅確認を含むChrome E2E197/197成功。PR11単独はverify44/44・E2E27/27成功。両PRの組合せは未公開overlayとして別途検証し、マージは行わない。

両PRを組み合わせた未公開overlay検証も完了: 別worktreeへUI差分を重ね、verify49/49・428ページbuild、実Chrome E2E200/200成功。新規GNU正式diffと明示来歴のcolがOS表の該当列へ正しくリンクし、GNU Texinfoや他OSを誤分類しないことを実データで確認。ブラウザ同梱版のローカル未導入による初回launch失敗と、その後成功したChrome実行は区別して記録。Gitマージ・本番配備はせず、詳細はintakeのcombined-verification.mdを参照。


## AWS既存155本文の現行版差分更新

上の「旧155本文は未更新」は前バッチ時点の状態。その後、2026-11-17取得の公式CLI2.40.4本文を155件すべて別版として追加した。旧2.39.3は全1395ファイルのSHA256 inventoryと照合して無変更を確認。現行2.40.4は既追加2件と合わせ157ページ32604セグメント、旧版を含むAWS物理ページは312件64108セグメント。312種類のコマンドに増えたという意味ではない。

155現行本文32430セグメントのうち31545は同じページの原文kind/text/protected inline完全一致で旧受理訳を再利用。全対応の構造/見出し文脈、11相違点、変更43ページの71種境界を別担当が確認し、旧31545訳すべてを新たに逐語独立レビューしたとはしない。共通--help306箇所は153ページ全contextで別途承認。残579箇所は100種の原文署名として翻訳・自己照合・別担当の独立意味照合を行った。署名の全context700には同署名旧訳121が含まれるが、その121は旧訳維持とし、新訳適用は579だけである。

さらに全155候補32430マッピングを実際の旧訳/現IR/候補と独立照合し、21642保護トークン、1594リンク、824literalブロックの組立保持を確認。原文全文1678931文字（空白除去）・1438見出し・824コード例の順序/内部空白照合も成功。これら機械的保持検査と差分の意味照合を区別する。詳細はtranslation-queue/intakes/2026-11-17-aws-current.jsonと同名ディレクトリ、各leafのtranslation/review.md、provenance/retrieval.json。

正式queue claim/save（最大1000件）/review/completeで155件を受理・生成。全有効466件done、pending0、歴史的blocked14件保持。マージ、本番配備、AWSコマンド実行は行わない。全体検証と実ブラウザ結果は最終検証節とPR本文へ記録する。


### AWS差分更新の最終ローカル検証

内容単独verify44/44、583ページbuild、fresh実Chrome E2E355/355成功。PR11 UI12ファイルを重ねた未公開overlayはverify49/49、583ページbuild、Chrome358/358成功。現行SSM157全ページの320px表示・版・未解決トークン・アンカー、旧155版の残存を検証した。両PRは独立したままでGitマージなし。検証ログfingerprintと実施範囲はintakeのfinal-verification.md、公開HEADのCI/previewはPR本文で別途確認する。
