# みそのホームページ

Astroで作成した、スマホ優先の個人制作サイト。公開URL： https://miso-eg.github.io/

HOME / ABOUT / TOOLS / GALLERY / LINE / MUSIC / OTHER を実装しています。

## 手元で確認する

Node.js 24を使用してください。

```sh
npm ci
npm run dev
```

表示されたローカルURLでプレビューできます。

```sh
npm run check
npm run build
npm run preview
```

## GitHub上で作品を追加する

1. `templates/work.md` の内容をコピーします。
2. GitHubの「Add file → Create new file」から `src/content/works/作品名.md` を作成します。ファイル名には英小文字・数字・ハイフンを使います。
3. `title`、`description`、`category`、`date`、本文を書き換えます。
4. 下書き中は `draft: true` にします。公開するときは `draft: false` に変更します。
5. mainに反映すると、GitHub Actionsが検証・ビルド・公開します。PRでは検証のみ行います。

category は `tools` / `gallery` / `line` / `music` / `other`。dateは `YYYY-MM-DD`、orderは小さい順に表示します。

- 画像を `public/images/` にアップロードし、`image: /images/ファイル名.png` と `imageAlt` を指定します。
- 音楽を `public/audio/` に追加し、`audio: /audio/ファイル名.mp3` を指定すると再生プレーヤーが表示されます。
- 外部作品へのリンクは `url`、ソースコードは `repository` に指定します。
- 存在しない画像・音声のパスは指定せず、アップロードしてから設定してください。

空カテゴリには準備中の表示を用意しています。架空の作品は掲載していません。Markdownを公開すると本文もサイトに表示されます。下書きであっても公開GitHubリポジトリ内のファイルは閲覧できます。

## LINEスタンプ・絵文字を追加する

`templates/line.md` をコピーして `src/content/works/` に追加します。`category: line`、`tags: [LINEスタンプ]` または `tags: [LINE絵文字]` を設定してください。見本画像を `public/images/` に追加し、`image` と `imageAlt`、LINE STOREの商品URLを `url` に設定します。公開時に `draft: false` にするとLINEページに表示されます。

## プロフィール・SNSの変更

## DOCUMENTの記事を追加する

`templates/document.md` をコピーして `src/content/works/記事名.md` として追加します。`category: document` を指定し、タイトル・概要・掲載日・タグ・本文を編集します。`##` の見出しから目次が自動生成されます。公開時は `draft: false` にします。画像は `public/images/documents/記事名/` に配置し、本文から `/images/documents/記事名/画像名.png` で参照できます。

元のDOCX・PDFは公開フォルダに配置せず、閲覧用の本文と必要な画像のみを追加してください。ダウンロードボタンは設けていませんが、表示内容のコピーや保存を完全には制限できません。

## プロフィール・SNSリンクを編集する

`src/data/site.ts` でサイト情報とSNSリンクを管理します。プロフィールの本文は `src/pages/about.astro` で編集できます。XとGitHubを設定済みです。その他のSNSはURLが決まったら `socials` に追加してください。

## GitHub Pagesで公開する

公開先リポジトリ： https://github.com/miso-eg/miso-eg.github.io

公開設定はGitHub Actionsです。mainへの更新後に自動デプロイします。

1. 既存の `miso-eg/miso-eg.github.io` がないか再確認します。存在する場合は内容とPages設定を確認し、上書き前に承認を取ります。
2. 新規なら `miso-eg.github.io` という名前の公開リポジトリを作成します。
3. このフォルダのファイルをリポジトリ直下へ配置します（node_modules・dist・.astroは除外）。`package-lock.json` と `.github/workflows/pages.yml` も含めます。
4. リポジトリの Settings → Pages → Build and deployment → Source を **GitHub Actions** に設定します。
5. mainへの反映またはActionsの手動実行で公開されます。デプロイ成功後、予定URLを確認します。

`astro.config.mjs` はユーザーサイトのドメイン直下向けです。ツールはそれぞれ既存リポジトリで管理し、このサイトからリンクします。

## 掲載ツールの確認元

各説明は2026-10-15に取得した以下のREADMEに基づいています。

- https://github.com/miso-eg/mission_panel_maker
- https://github.com/miso-eg/icon-ring-composer
- https://github.com/miso-eg/gift-coin-game
- https://github.com/miso-eg/limited-battle-roulette

デプロイ構成の参考： https://docs.astro.build/en/guides/deploy/github/
