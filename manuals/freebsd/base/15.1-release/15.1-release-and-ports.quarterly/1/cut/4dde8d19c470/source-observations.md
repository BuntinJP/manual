# Source observations

Requested: cut
Source: https://man.freebsd.org/cgi/man.cgi?query=cut&sektion=1&format=html
The server title declares FreeBSD 15.1-RELEASE and Ports.quarterly. This is the base utility; the combined manpath is retained as variant.

Queued for translation. Source/IR extraction checks and semantic review remain agent work.

## FreeBSD cut(1) の抽出修正（2026-11-17）

- 保存済み `source.html` のバイト列と取得元・版情報は変更していない。manifest の原文 SHA-256 と一致することを確認した。
- 以前の selector `#contentwrap` は本文の `<pre>` を含まず、4 セグメントのサイト案内だけを抽出していた。selector を `pre` に変更した。
- 本文の見出しは `<a id="NAME" href="#end"><b>NAME</b></a>` 形式である。パーサーに既存の `a[name]` に加えて `a[id]` 見出しの認識を追加し、正式な parse / translate コマンドで IR と翻訳依頼を再生成した。
- 修正後は 38 セグメント。原文の NAME から AUTHORS、末尾の版・日付行までを IR と照合した。SYNOPSIS と EXAMPLES のコマンド行は literal として保持される。
- 行折り返しによる英単語分断は保存原文どおり IR に残る（例: `increas- ing`）。翻訳では文脈に従って通常の語として読む。
- 元の取得元が表示した版は FreeBSD 15.1-RELEASE and Ports.quarterly。現在のリリースや別版で置き換えていない。
