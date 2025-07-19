# Gemini カスタマイズファイル

このファイルは、Geminiの応答をカスタマイズするために、プロジェクトに関するコンテキストを提供します。

## プロジェクト概要

- **目的と種類**: フロントエンドエンジニアである[Bear29ers](https://github.com/Bear29ers)のポートフォリオサイトです。最新技術の実験場であり、自身のプロジェクトを紹介する動的なプラットフォームとして機能します。
- **主要な機能**:
  - プロジェクトの紹介
  - 経歴の表示
  - 制作物（ギャラリー）の表示
  - 多言語対応（日/英）

## 技術スタック

- **言語**: TypeScript, JavaScript
- **フレームワーク/ライブラリ**: Next.js, React, Jotai, motion, popmotion, Tailwind CSS
- **パッケージ管理**: npm
- **テスト**: Jest, React Testing Library
- **環境**: Docker Composeを使用した開発環境が提供されています。`app`コンテナ（Next.js）と`storybook`コンテナが定義されています。

## コーディング規約

- **スタイルガイド**: Prettier, ESLint
- **フォーマッター**: Prettier
- **リンター**: ESLint, stylelint, markuplint
- **型チェック**: TypeScript
- **命名規則**:
  - コンポーネント: PascalCase
  - 変数/関数: camelCase
- **コメント/ドキュメンテーション**: Storybookを利用してコンポーネントのドキュメントを生成しています。

## よく使うコマンド

- **Docker開発環境の起動**: `docker compose up -d`
- **Docker開発環境の停止**: `docker compose down`
- **Dockerイメージのビルド**: `docker compose build`
- **依存関係のインストール**: `npm install`
- **開発サーバーの起動**: `npm run dev`
- **テストの実行**: `npm test`
- **ビルド/コンパイル**: `npm run build`
- **コードのフォーマット/リンティング**:
  - `npm run format`
  - `npm run lint`
  - `npm run stylelint:fix`
  - `npm run markuplint`
- **Storybookの起動**: `npm run storybook`

## プロジェクト構造

- **`src/app`**: Next.jsのApp Routerに基づいたルーティングと各ページのコンポーネントが配置されています。
- **`src/components`**: 共通で利用されるUIコンポーネントが格納されています。
- **`src/constants`**: プロジェクト全体で利用される定数（例: ナビゲーションのメニュー項目、SNSリンクなど）が定義されています。
- **`src/hooks`**: カスタムフックが配置されています。
- **`src/styles`**: グローバルなスタイルやフォント設定が定義されています。
- **`src/types`**: プロジェクトで使用される型定義がまとめられています。
- **`messages`**: `next-intl`による多言語対応のためのメッセージファイルが格納されています。（`en.json`, `ja.json`）
- **`public`**: 画像などの静的リソースが配置されています。

## 特定の指示/注意事項

- **コンポーネント生成**: `npm run hygen component new` コマンドで新しいコンポーネントの雛形を生成できます。
- **国際化 (i18n)**: `next-intl` を使用しており、テキストは `messages` ディレクトリ内のJSONファイルで管理されています。新しいテキストを追加する際は、両方の言語ファイル（`en.json`, `ja.json`）を更新する必要があります。

