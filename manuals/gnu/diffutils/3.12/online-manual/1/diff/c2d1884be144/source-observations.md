# GNU diff の原文取得・抽出記録

対象は GNU Diffutils 3.12 (12 January 2025) の公式 HTML/Texinfo マニュアル、第13章 Invoking diff と13.1 Options to diff。roff の man ページや Diffutils 全巻の翻訳ではない。

直接HTTP取得が503だったため、2026-11-17に Firecrawl の maxAge: 0 / rawHtml / onlyMainContent: false で公式 https://www.gnu.org/software/diffutils/manual/diffutils.html を取得した。source.html はコネクタが返したHTMLをUTF-8で保存したもので、上流HTTP応答のバイト同一性は主張しない。リンクの絶対URL化などコネクタ処理があり得る。版、著作権、GFDL許諾文は保存HTMLの冒頭と本文に保持されている。

抽出は #Invoking-diff。13.1のオプション説明、--color の3選択肢、--palette の4設定、終了状態0/1/2、呼出し構文のliteralコードをIRと照合。ナビゲーションおよび参照リンクは原文通り保持。

著作権者: Free Software Foundation, Inc.。GFDL 1.3 or later、Invariant Sections / Front-Cover Texts / Back-Cover Texts なし。ライセンス全文はsource.htmlのAppendix Aおよびlicenses/GFDL-1.3.htmlに保存。licensesのファイルは保存HTMLから該当要素を抽出した派生物。
