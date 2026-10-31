# 翻訳レビュー

- 対象: `manuals/apple/macos/26.6.2/25g83/1/launchctl/cf8752dd8eb8`
- 完了範囲: 全 204 セグメント（204/204）
- Source SHA-256: `cf8752dd8eb8c3370c7d03b333430aa68a665c907c475ea407cb1b6542083ae2`
- IR SHA-256: `3fce0a6cb7eb640948aaf89befe7874310f1412e7cb462dc38bbb1d4ddca1e29`
- 初稿生成: `Cursor GPT-5.6 Sol 1M Extra High`（`gpt-5.6-sol-xhigh`）
- 最終翻訳・意味レビュー: `GPT-5.6 Terra`

原文と訳文を照合し、否定、数値、既定値、条件、および使用例の意味が保持されていることを確認した。各原文セグメントの保護トークン `[[pN]]` が対応する訳文内にそれぞれ正確に 1 回あることを確認した。

`bun run content:translate --manual manuals/apple/macos/26.6.2/25g83/1/launchctl/cf8752dd8eb8 --accept /tmp/launchctl-ja-response.json` を実行し、204 セグメントの受理に成功した。

## 二次品質レビュー

全 204 セグメント（204/204）を原文と 1 件ずつ再照合した。domain/service/endpoint、bootstrap/bootout、権限、永続条件、デバッグオプション、既定値、終了状態、未実装・非推奨に関する否定と条件、数値、および例を確認した。

- `s0036`: サービスを実体化しているプロセスの説明を自然かつ明確にした。
- `s0044`: service invocation をサービスの「次回の実行」と明確化した。
- `s0093`: `launchd` を重複して調査対象としていた訳を修正した。
- `s0112`: 表示コマンドの説明で、バリアントを利用者が指定できるように読める表現を修正した。
- `s0146`: オンデマンドジョブを再起動し得る条件の表現を明確にした。

修正版を上記コマンドで再受理し、204 セグメントの受理に成功した。Source SHA-256、IR SHA-256、全 ID、空訳、および各セグメントの保護トークン `[[pN]]` を再照合した。
