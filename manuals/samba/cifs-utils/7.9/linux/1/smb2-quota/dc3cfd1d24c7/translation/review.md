# smb2-quota 翻訳自己照合

確認者: EMMA diff-intake担当（翻訳者による自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/cifs-utils/7.9/linux/1/smb2-quota/dc3cfd1d24c7
全23セグメントをrequest/glossary・保存原文・IRと照合。manifestの版を維持。原文/IR/queueを変更せず、候補のみ保存。

元RST全文/生成HTML/IRを照合。COPYINGはGNU GPL v3本文でmanifestにハッシュ保持。出力列名は実出力識別用に英語を保持し日本語説明を併記。SMB2以上のみに実装、導入4.20、既定tabularを照合。cifs-utils7.9をSamba4.25.0と混同しない。

共通文の再利用は、文脈が同じで原文・保護トークンが完全同一の段落のみ。構文・設定例・識別子を維持し、説明文は日本語化。保護トークンとIDの全出現一致検査済み。既存validateTranslationとsource/IR照合の結果は後述の検証記録を参照。

sourceSha256: dc3cfd1d24c704a8b4a5a9695c2a0bfbd2c16a5310d4cb4828efe36e9dc2880e
irSha256: d830b982c133d6af14d839828a5aab89c0597b277f89045f2bc76c8453201fdc

queue保存・受理・生成・commitは未実施。

検証記録: validateTranslation全文成功。保護トークン復元後の全原文セグメントを保存HTML本文と照合し不一致0件。


## キュー受理の最終バインド

sourceSha256: dc3cfd1d24c704a8b4a5a9695c2a0bfbd2c16a5310d4cb4828efe36e9dc2880e
irSha256: d830b982c133d6af14d839828a5aab89c0597b277f89045f2bc76c8453201fdc
draftSha256: 32bcf75db989abc2bab90b0029092ed8ee30ce6e3666fe4e47d2eed7866fb25c

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
