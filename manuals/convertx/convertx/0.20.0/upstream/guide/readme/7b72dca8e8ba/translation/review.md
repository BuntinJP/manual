# ConvertX v0.20.0 README 全文候補・自己照合

確認者: EMMA FreeBSD/FHS/Samba担当（翻訳者による自己照合。独立レビューではない）

修正後の全191セグメントを翻訳。保存GitHub HTMLのarticle.markdown-body本文、IR、request、glossary、source-observationsを直接確認した。原文/IRのSHA一致、既存validateTranslationの全ID/非空/保護トークン/style検証成功。全191セグメントをトークン展開した本文が保存原文に存在することも照合、不一致0。

## 抽出修正と表

GitHub独自markdown-accessiblity-tableを安全なコンテナとして解析する修正後、3表/46行/156セルと2preコードが原文とIRで一致。旧41segの表平坦化を解消。変換元/先形式数、約数の~、空の既定値セル、環境変数名、false/0/24/3000、Docker画像名を保持。入力と出力の列を逆転していない。

## 重要条件

- localhost/HTTPSとHTTP_ALLOWEDの説明は原文どおり翻訳し、環境変数表のHTTPはローカルのみという制限も保持。
- ALLOW_UNAUTHENTICATEDまたはACCOUNT_REGISTRATION=trueでインターネット公開してはいけない、信頼するユーザーだけを許可する警告を保持。
- 誰でも最初のアカウントを作れるため未設定公開のまま放置しない注意、JWT_SECRET推奨、PUID/PGID整合性、root初期chownを保持。
- ファイル自動削除のn時間ごとの確認/古さ、0で無効、最大26文字、最大同時変換0で無制限を保持。
- latest/mainの更新契機、第三者チュートリアルの不正確さ注意、開発項目を省略しない。文中のインストール、chown、docker、clone、bunコマンド、Issue/PR作成は資料として翻訳しただけで実行していない。

## 権利資料

同じv0.20.0タグの公式LICENSE（GNU AGPLv3）を原バイトのままlicenses/LICENSE-v0.20.0へ保存し、manifestに出典/SHAを記録した。README内に独立した文書ライセンス宣言はないため、プロジェクトレベルの根拠として記録し、第三者画像/ロゴ/リンク先への特別許諾は推定していない。原文と帰属、許諾資料を保持。公開判断は運営者が行う。

未実施: queue保存/受理/生成/commit。統合担当の最終処理が必要。

sourceSha256: 7b72dca8e8bab9d4906dd155f4e0c73aacac9bdd0a4ebf00c6f1e0fbaa0a79c1
irSha256: c7934f43edac104c498d35e0a1752e84437f2c69b3b085c0d51f748044a720f8
candidateFileSha256: 0ca17441fc5cc400618ce96db97ea37d1285718520abf172f6941a5477144b3d


## キュー受理の最終バインド

sourceSha256: 7b72dca8e8bab9d4906dd155f4e0c73aacac9bdd0a4ebf00c6f1e0fbaa0a79c1
irSha256: c7934f43edac104c498d35e0a1752e84437f2c69b3b085c0d51f748044a720f8
draftSha256: 0ca17441fc5cc400618ce96db97ea37d1285718520abf172f6941a5477144b3d

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
