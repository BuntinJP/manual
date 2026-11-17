# 翻訳対象の進捗（2026-11-17）

Obsidian「メモ/manual 翻訳対象.md」版6を直接確認した。取り込みと翻訳完了は区別する。この報告はローカル受理・生成の状態であり、本番公開や全件完了を意味しない。

## 今回の追加・修正

- GNU cut、GNU diff、OpenBSD cut/paste、FreeBSD cut/paste、macOS cut/paste/pbcopy/pbpaste/xcode-select および OpenBSD tmux の12文書を全文翻訳・原文照合・受理・生成した。
- GNU diff は Diffutils 3.12 の第13章「Invoking diff」と13.1全オプション（173セグメント）。全巻やroff manページではない。原文は公式HTMLをFirecrawl rawHtml経由で取得し、取得経路と上流バイト同一性の限界を記録した。
- FreeBSD cut/paste は旧抽出がナビゲーション4セグメントのみを拾っていた。原文を変更せず、本文preとa[id]見出しを解析し、cut38/paste37セグメントを再生成。旧ジョブは履歴付きでblocked、新IRの別ジョブをdoneとした。
- FHS 3.0（2015-03-19）を公式原文・許諾・構造照合付きで新規登録。1544セグメント、翻訳は未着手。
- tmux は全2823セグメントを翻訳・原文照合して受理・生成した。全範囲を担当ごとに自己照合し、うち450セグメントは別担当が独立照合。原文テキスト161845文字（空白除去後）と28見出し・20表・57コードブロックのIR保持も確認した。

## 対象別の状態

blockedの旧IR・旧版識別ジョブを除く。保存済みセグメントにはdoneの受理済み訳と途中訳の両方を含む。

| 提供元 / 製品 | 文書数 | done | 全セグメント | 保存済み |
| --- | ---: | ---: | ---: | ---: |
| apple/jq | 1 | 0 | 1096 | 0 |
| apple/macos | 6 | 6 | 206 | 206 |
| aws/cli | 155 | 155 | 31504 | 31504 |
| convertx/convertx | 1 | 1 | 191 | 191 |
| freebsd/base | 2 | 2 | 75 | 75 |
| gnu/coreutils | 1 | 1 | 41 | 41 |
| gnu/diffutils | 1 | 1 | 173 | 173 |
| gnu/gnupg | 1 | 0 | 454 | 0 |
| ietf/openpgp | 1 | 0 | 3079 | 0 |
| jqlang/jq | 1 | 0 | 1135 | 0 |
| libressl/portable | 1 | 0 | 2197 | 0 |
| linuxfoundation/fhs | 1 | 0 | 1544 | 0 |
| mutt/mutt | 1 | 0 | 143 | 0 |
| openbsd/base | 3 | 3 | 2905 | 2905 |
| openssl/openssl | 1 | 0 | 277 | 0 |
| paru/paru | 2 | 0 | 533 | 0 |
| samba/cifs-utils | 10 | 4 | 632 | 86 |
| samba/samba | 113 | 56 | 13005 | 1129 |
| swaks/swaks | 1 | 0 | 546 | 0 |
| tripwire/tripwire | 3 | 2 | 382 | 96 |
| wireguard/tools | 1 | 1 | 64 | 64 |

## 第2継続バッチ

- Samba60文書、WireGuard wg、Tripwire twfiles/twconfig、ConvertXの計64文書1566セグメントを追加受理・生成。第1バッチと合わせて76文書4930セグメント。キューはdone232/pending75、過去の誤抽出・誤識別の履歴11件はblockedで保持。全対象の完了ではない。
- Samba7文書は原文VERSION節に4.25.0と明記されていたため、currentから4.25.0の別leafへ訂正。旧原文・旧ジョブ・当時の観察を残し、訂正の根拠を追記した。対象はpam_winbind.conf、ntlm_auth、traffic_learner、traffic_replay、pam_winbind、samba-tool、samba_downgrade_db。
- ntlm_authはさらに元HTMLの不正なdiv入れ子で4節が.refentry外へ移動していた。未受理の62segジョブを保留し、原文不変のまま当該ページだけbody selectorで74segへ再解析。新ジョブ0521c776d2fbc376で翻訳を継続する。
- ConvertXはGitHubのmarkdown-accessiblity-table wrapperを安全なコンテナとして解析する回帰修正により、3表46行156セルと2コードブロックを保持。旧41segを保留して191segで全文翻訳・受理。同タグのAGPLv3原文も保存した。
- Tripwire許諾文の翻訳には権利者承認の条件があるため、許諾と著作権の英語原文を生成本文にも保持し、日本語は非公式参考訳とした。
- smbgetのUNC例1箇所を原文通りのバックスラッシュ4/2/2へ修正。旧受理訳とレビューはtranslation/revisions/に保持し、queueのamended履歴と新draftShaを記録して再生成・検証した。

## 残作業・再開方法

1. `bun run content:queue next --worker <今回の識別名> --max-segments 100` で残る未翻訳文書を取得し、原文・IR照合と翻訳を進める。tmuxはdoneのため再予約しない。
2. jq両版、wg、gpg、OpenPGP、Tripwire3文書、Samba113文書/cifs-utils10文書、Swaks、OpenSSL、LibreSSL、Mutt、ConvertX、Paru2文書、FHSは未受理の対象が残る。`translation-queue/*.json` が再開の正本。
3. 独立レビューはOpenBSD cut/pasteで実施。tmuxの450セグメントにも独立照合を実施。それ以外は記録どおり翻訳担当による自己照合であり、ハッシュ検証を意味レビューの代わりとはしない。
4. GNU/GFDL、FHS独自許諾、macOSの明示的再配布許諾を確認できない文書など、文書ごとの権利上の観察は原文とレビュー記録に保持。運営者の公開判断とは分離する。

## 検証

初回CIで `bun run verify` は40テストを含め成功。ブラウザE2Eは30成功・1失敗（新訳cutにfindの使用例が増えたことによる固定件数の期待値）で、提供元の一致とfindリンクを確認する期待値へ修正。修正後CI（HEAD4dc569f3）はverifyとE2E全31件に成功。tmux全文受理を含む最終HEADの結果はPR本文に記載。全原文/キューの整合性、型検査、lint、対象回帰テストを実行する。環境に `/usr/bin/mandoc` がないため、roffをその場で変換する既存テスト3件は実行失敗となる。保存済み原文・IRによる通常の生成はmandocを必要としない。
