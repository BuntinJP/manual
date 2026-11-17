# 翻訳対象の進捗（2026-11-17）

Obsidian「メモ/manual 翻訳対象.md」版6を直接確認した。取り込みと翻訳完了は区別する。この報告はローカル受理・生成の状態であり、本番公開や全件完了を意味しない。

## 今回の追加・修正

- GNU cut、GNU diff、OpenBSD cut/paste、FreeBSD cut/paste、macOS cut/paste/pbcopy/pbpaste/xcode-select の11文書を全文翻訳・原文照合・受理・生成した。
- GNU diff は Diffutils 3.12 の第13章「Invoking diff」と13.1全オプション（173セグメント）。全巻やroff manページではない。原文は公式HTMLをFirecrawl rawHtml経由で取得し、取得経路と上流バイト同一性の限界を記録した。
- FreeBSD cut/paste は旧抽出がナビゲーション4セグメントのみを拾っていた。原文を変更せず、本文preとa[id]見出しを解析し、cut38/paste37セグメントを再生成。旧ジョブは履歴付きでblocked、新IRの別ジョブをdoneとした。
- FHS 3.0（2015-03-19）を公式原文・許諾・構造照合付きで新規登録。1544セグメント、翻訳は未着手。
- tmux は1050/2823セグメントの途中訳をキューに保存済みで、全文未完・未受理。途中訳はサイトに出さない。

## 対象別の状態

blockedの旧IRジョブ2件を除く。保存済みセグメントにはdoneの受理済み訳と途中訳の両方を含む。

| 提供元 / 製品 | 文書数 | done | 全セグメント | 保存済み |
| --- | ---: | ---: | ---: | ---: |
| apple/jq | 1 | 0 | 1096 | 0 |
| apple/macos | 6 | 6 | 206 | 206 |
| aws/cli | 155 | 155 | 31504 | 31504 |
| convertx/convertx | 1 | 0 | 41 | 0 |
| freebsd/base | 2 | 2 | 75 | 75 |
| gnu/coreutils | 1 | 1 | 41 | 41 |
| gnu/diffutils | 1 | 1 | 173 | 173 |
| gnu/gnupg | 1 | 0 | 454 | 0 |
| ietf/openpgp | 1 | 0 | 3079 | 0 |
| jqlang/jq | 1 | 0 | 1135 | 0 |
| libressl/portable | 1 | 0 | 2197 | 0 |
| linuxfoundation/fhs | 1 | 0 | 1544 | 0 |
| mutt/mutt | 1 | 0 | 143 | 0 |
| openbsd/base | 3 | 2 | 2905 | 1132 |
| openssl/openssl | 1 | 0 | 277 | 0 |
| paru/paru | 2 | 0 | 533 | 0 |
| samba/cifs-utils | 10 | 0 | 632 | 0 |
| samba/samba | 113 | 0 | 12993 | 0 |
| swaks/swaks | 1 | 0 | 546 | 0 |
| tripwire/tripwire | 3 | 0 | 382 | 0 |
| wireguard/tools | 1 | 0 | 64 | 0 |

## 残作業・再開方法

1. `bun run content:queue next --id 3968a0af3a78795f --worker <今回の識別名> --max-segments 100` でtmuxの未保存範囲を取得。原文・IRと照合してsaveし、全文後にレビュー・completeする。
2. jq両版、wg、gpg、OpenPGP、Tripwire3文書、Samba113文書/cifs-utils10文書、Swaks、OpenSSL、LibreSSL、Mutt、ConvertX、Paru2文書、FHSは未受理の対象が残る。`translation-queue/*.json` が再開の正本。
3. 独立レビューはOpenBSD cut/pasteで実施。他は記録どおり翻訳担当による自己照合であり、ハッシュ検証を意味レビューの代わりとはしない。
4. GNU/GFDL、FHS独自許諾、macOSの明示的再配布許諾を確認できない文書など、文書ごとの権利上の観察は原文とレビュー記録に保持。運営者の公開判断とは分離する。

## 検証

初回CIで `bun run verify` は40テストを含め成功。ブラウザE2Eは30成功・1失敗（新訳cutにfindの使用例が増えたことによる固定件数の期待値）で、提供元の一致とfindリンクを確認する期待値へ修正。最終結果はPR本文に記載。全原文/キューの整合性、型検査、lint、対象回帰テストを実行する。環境に `/usr/bin/mandoc` がないため、roffをその場で変換する既存テスト3件は実行失敗となる。保存済み原文・IRによる通常の生成はmandocを必要としない。
