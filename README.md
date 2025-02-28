# line-translation-bot

このプロジェクトは、LINE メッセージを日本語から韓国語に翻訳するボットです。

## 必要条件

- Node.js >= 18.0.0
- LINE Developers アカウント
- DeepL API キー

## 環境変数

以下の環境変数を `.env` ファイルに設定してください：

```
LINE_CHANNEL_ACCESS_TOKEN=あなたのLINEチャネルアクセストークン
LINE_CHANNEL_SECRET=あなたのLINEチャネルシークレット
DEEPL_AUTH_KEY=あなたのDeepL APIキー
```

## インストール

```sh
npm install
```

## 開発サーバーの起動

```sh
npm run dev
```

## 本番サーバーの起動

```sh
npm start
```

## 使用技術

- [Express](https://expressjs.com/)
- [LINE Messaging API SDK for Node.js](https://github.com/line/line-bot-sdk-nodejs)
- [DeepL API](https://www.deepl.com/docs-api)
