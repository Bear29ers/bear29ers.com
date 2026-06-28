# プロジェクト監査レポート（2026-05-17 時点）

## 概要

| 項目 | 内容 |
|---|---|
| 対象リポジトリ | bear29ers.com |
| 主要スタック | Next.js 15.4.2 / React 19 / next-intl 4 / Jotai / Storybook 8 / Tailwind v3 |
| 監査範囲 | 依存パッケージ・ツール設定・Docker構成・Next.js App Routerコード・CI/CD・セキュリティ |

### 重大度の凡例

| ラベル | 意味 |
|---|---|
| 🔴 Critical | 即対応が必要。セキュリティリスクまたは機能バグ |
| 🟠 High | 早期対応推奨。品質・安定性・将来の互換性に影響 |
| 🟡 Medium | 計画的に対応。パフォーマンス・DX・ベストプラクティス |
| 🟢 Low | 余裕があれば対応。軽微な改善・コード整理 |

---

## 🔴 Critical

- [x] **1. シークレット漏洩 — トークンの即時ローテーションと履歴除去**
  - **対象**: `docker-compose.yml:14-16`
  - **現状**: Instagram Graph API アクセストークンと Newt CDN API トークンがプレーンテキストでコミット済み。
  - **推奨対応**: 両トークンを即座にローテーション。`.env` ファイルに移動し `.gitignore` へ追加。`git filter-repo` または BFG Repo Cleaner で git 履歴から除去。
  - **影響範囲**: セキュリティ（第三者による API 不正利用リスク）

- [ ] **2. `middleware.ts` 重複 export によるカスタムヘッダーの dead code 化**
  - **対象**: `src/middleware.ts:7`（named export）、`:32`（default export）
  - **現状**: `export const middleware` で定義したカスタムヘッダー設定（`x-request-locale`, `x-request-url`, `x-request-path`）が、末尾の `export default createMiddleware(routing)` により完全に上書きされ、Next.js には default export のみが使われている。結果として `[locale]/layout.tsx:30` の `generateMetadata` が依存するヘッダーは常に未設定。
  - **推奨対応**: `middleware.ts:32` の `export default` 行を削除。named export の `middleware` のみを残す。また、App Router でミドルウェアのレスポンスヘッダーを RSC に渡すには `NextResponse.next({ request: { headers: newHeaders } })` パターンが必要（参照: [Next.js公式](https://nextjs.org/docs/app/building-your-application/routing/middleware#setting-headers)）。
  - **影響範囲**: ページタイトル生成・ロケール検出（`generateMetadata` が正しい URL を取得できていない）

---

## 🟠 High

- [ ] **3. Dockerfile に production stage が存在しない**
  - **対象**: `Dockerfile`
  - **現状**: `base → deps → dev/storybook` のみ。本番ビルド・実行ステージなし。`npm install` 使用（`npm ci` 推奨）。`ENV NEXT_TELEMETRY_DISABLED 1` は非推奨構文。非 root ユーザー未設定。
  - **推奨対応**: `builder` ステージ（`npm ci` + `next build`）と `runner` ステージ（`node:22-alpine` + standalone コピー + `USER node`）を追加。`next.config.ts` に `output: 'standalone'` を設定。イメージサイズが ~1GB → ~150MB に削減可能。
  - **影響範囲**: Docker でのプロダクション運用（現状 Vercel デプロイなので直接影響は低いが、将来の移行時に問題になる）

- [ ] **4. Node.js バージョンが未固定**
  - **対象**: `Dockerfile:1`（`node:lts-slim`）、`package.json`（`engines` フィールド無し）
  - **現状**: `node:lts-slim` は LTS が更新されると自動的に Node 24 等に移行する浮動タグ。ローカル開発と CI で使用バージョンが揃わない。
  - **推奨対応**: `Dockerfile` を `node:22-slim` に固定。`.nvmrc` に `22` を追加。`package.json` に `"engines": { "node": ">=22.0.0" }` を追加。

- [ ] **5. CI が coverage 計測のみ（lint/typecheck/build 未実施）**
  - **対象**: `.github/workflows/coverage.yml`、`.github/workflows/release_deploy.yml`
  - **現状**: PR 時に jest coverage のみ。ESLint・型チェック・ビルド・Storybook ビルド・stylelint・markuplint いずれも CI で実行されていない。両ファイルで `actions/checkout@v3`（旧）使用。
  - **推奨対応**: `pr-check.yml` 等を追加し、以下を直列 or 並列で実行: `eslint .` / `tsc --noEmit` / `npm run build` / `npm run stylelint:fix` / `npm run markuplint`。`actions/checkout@v4`、`actions/setup-node@v4` に更新。

- [ ] **6. `typecheck` スクリプトが存在せず pre-commit でも未実行**
  - **対象**: `package.json`、`.lintstagedrc.mjs`
  - **現状**: `tsc --noEmit` を実行する npm スクリプトが無い。pre-commit（lint-staged）にも型チェックステップが含まれていないため、型エラーはコミット後 CI でも検知されない。
  - **推奨対応**: `"typecheck": "tsc --noEmit"` を `package.json` scripts に追加。lint-staged に `"*.{ts,tsx}": () => "npm run typecheck"` を追加（ファイル引数なしで全体チェック）。

- [ ] **7. `.markuplintrc` が不正な JSON（ルール未適用）**
  - **対象**: `.markuplintrc:20`
  - **現状**: L20 に閉じ `}` の後のコンマが抜けており、JSON としてパース失敗。`markuplint` がサイレントに失敗しルールが適用されていない可能性がある。
  - **推奨対応**: JSON を修正しコンマを追加。`npm run markuplint` でエラーなく通ることを確認。

- [ ] **8. `next lint` は Next.js 16 で削除予定**
  - **対象**: `package.json:9`（`"lint": "next lint"`）、`.lintstagedrc.mjs:10`（`buildEslintCommand`）
  - **現状**: `next lint` コマンドは Next.js 15 で deprecation 警告対象、16 で削除予定。
  - **推奨対応**: `"lint": "eslint ."` に変更（flat config 利用済みのため直接 eslint で可）。lint-staged の `buildEslintCommand` も同様に更新。

- [ ] **9. トップレベル locale ページが全て `'use client'`**
  - **対象**: `src/app/[locale]/page.tsx:1`、`about/page.tsx:1`、`experience/page.tsx:1`
  - **現状**: ページ全体が Client Component となりサーバーレンダリングの恩恵がゼロ。Jotai・motion の bundle がルートごとにクライアントへ全送信される。
  - **推奨対応**: ページコンポーネント自体は Server Component に戻し、インタラクション・状態が必要な部分（`<Bear>`, `<ColorPicker>`, アニメーション葉コンポーネント）のみを `'use client'` に留める leaf island パターンに移行。

---

## 🟡 Medium

- [ ] **10. `popmotion` 依存が不要（未メンテ・1箇所のみ使用）**
  - **対象**: `src/components/ui/Skills/Skills.tsx:7`、`package.json:26`
  - **現状**: `popmotion` の `distance` 関数を1箇所でのみ使用。`popmotion` は 2022年以降更新停止。
  - **推奨対応**: `distance` をインライン実装（`Math.sqrt((x2-x1)**2 + (y2-y1)**2)`）するか `motion` の同等ユーティリティに置換し、`popmotion` を `npm uninstall`。

- [ ] **11. Storybook addon の重複・不足**
  - **対象**: `package.json:34,39`、`.storybook/main.ts`
  - **現状**: `@storybook/addon-controls` は `addon-essentials` に内包されており重複。`addon-onboarding` はセットアップ後に不要。アクセシビリティ検証用 `@storybook/addon-a11y` が未導入。
  - **推奨対応**: `addon-controls`・`addon-onboarding` を削除。`@storybook/addon-a11y` を追加。

- [ ] **12. `eslint-plugin-storybook` が flat config に未配線**
  - **対象**: `eslint.config.mjs`、`package.json:36`
  - **現状**: パッケージはインストール済みだが `eslint.config.mjs` に `import storybook from 'eslint-plugin-storybook'` および適用設定が存在しない。
  - **推奨対応**: `eslint.config.mjs` に Storybook 推奨設定を追加（`...storybook.configs['flat/recommended']`）。

- [ ] **13. `ts-jest` / `ts-node` が未使用（`next/jest` は SWC パイプライン）**
  - **対象**: `package.json:66,82`
  - **現状**: `next/jest` を使うと SWC で TypeScript を変換するため `ts-jest` と `ts-node` は実質不要。インストールされているだけで bundle・audit に影響。
  - **推奨対応**: `npm uninstall ts-jest ts-node` し、`jest.config.ts` の `transform` 設定が `next/jest` 任せになっていることを確認。

- [ ] **14. ESLint flat config に typo・stale な ignore パス**
  - **対象**: `eslint.config.mjs:14,23-25`
  - **現状**: `configPretteir`（typo、`:14`）。ignore に `next.config.js`（実態は `.ts`、`:23`）と `jest.setup.js`（実態は `.ts`、`:24`）が指定されており実際の対象ファイルは lint されていない。
  - **推奨対応**: typo 修正、ignore パスを `next.config.ts` / `jest.setup.ts` に修正。

- [ ] **15. TypeScript 設定が保守的・設定ファイルが型チェック対象外**
  - **対象**: `tsconfig.json:3,21-24`
  - **現状**: `"target": "ES2017"` は過剰保守的（Next 15 / Node 22 環境なら `ES2022` が適切）。`next.config.ts`・`jest.config.ts`・`tailwind.config.ts` 等の設定ファイルが `include` に含まれておらず型チェック対象外。`noUncheckedIndexedAccess`・`noImplicitOverride` 等の strict 系オプション未設定。
  - **推奨対応**: `"target": "ES2022"` に変更。`include` に `*.config.ts` を追加。strict 系オプションを段階的に有効化。

- [ ] **16. Tailwind CSS v3 → v4 移行の検討**
  - **対象**: `package.json:81`（`tailwindcss: ^3.4.4`）、`tailwind.config.ts`
  - **現状**: Tailwind v4 GA リリース済み。v4 は CSS-first 設定（`tailwind.config.ts` 廃止）に移行。`eslint-plugin-tailwindcss` v3 は v4 未対応、`prettier-plugin-tailwindcss` も v0.7+ が v4 対応。
  - **推奨対応**: 破壊的変更が大きいため独立したマイルストーンとして計画。[公式 upgrade guide](https://tailwindcss.com/docs/upgrade-guide) を参照。

- [ ] **17. Storybook 8 → 9 移行の検討**
  - **対象**: `package.json:34-44`
  - **現状**: Storybook 9 GA リリース済み。React 19 との統合が改善。addon-essentials の分割・`@storybook/test` の再編等、破壊的変更あり。
  - **推奨対応**: [Storybook 9 Migration Guide](https://storybook.js.org/docs/migration-guide) を参照。`@chromatic-com/storybook` も v4 に更新が必要。

- [ ] **18. `metadataBase` と `alternates.languages` が未設定**
  - **対象**: `src/app/[locale]/layout.tsx`
  - **現状**: OG 画像 URL が相対パスのまま（Vercel 環境変数 `VERCEL_URL` に依存）。hreflang タグ（`alternates.languages`）が存在せず、en/ja の多言語 SEO が機能していない。
  - **推奨対応**: `generateMetadata` または root layout の `metadata` に `metadataBase: new URL('https://bear29ers.com')` と `alternates: { languages: { 'en': '/en', 'ja': '/ja' } }` を追加。

- [ ] **19. Jotai `atomWithStorage` のハイドレーションフラッシュリスク**
  - **対象**: `src/state/colors.ts:5`
  - **現状**: `atomWithStorage` は `localStorage` をクライアントサイドで同期読み取りするため、SSR のデフォルト値とクライアントの実際の値が一致しない場合に初期フラッシュが発生しうる。
  - **推奨対応**: `useHydrateAtoms` で初期値を注入するか、読み取り側で `jotai/utils` の `loadable` を使って hydration 完了を待つ。

- [ ] **20. `Bear.tsx` のアクセシビリティ: `hidden` クラスで a11y ツリーから除外**
  - **対象**: `src/components/ui/Bear/Bear.tsx:20`（推定）
  - **現状**: ボタンのラベルに `className="hidden"` を使用しており、視覚的に非表示にするだけでなくスクリーンリーダーからも見えなくなっている。
  - **推奨対応**: `hidden` を `sr-only`（Tailwind）に変更し、スクリーンリーダーにはラベルが読まれる状態にする。

- [ ] **21. `useAtom` で setter を使わない箇所が複数（無駄な再レンダー）**
  - **対象**: `src/app/[locale]/experience/page.tsx:17`、`src/app/[locale]/gallery/client.tsx:38`、`src/app/[locale]/gallery/[mediaId]/client.tsx:25`
  - **現状**: `const [themeColor, _] = useAtom(...)` パターンで setter を未使用。`useAtom` は setter 参照も購読するため不要な再レンダーが起きる。
  - **推奨対応**: `const themeColor = useAtomValue(themeColorAtom)` に置換。

- [ ] **22. `as any` による型安全の穴**
  - **対象**: `src/i18n/request.ts:9`、`src/app/[locale]/layout.tsx:78`
  - **現状**: ロケールの型チェックを `as any` で回避している。
  - **推奨対応**: `(l): l is Locale => routing.locales.includes(l as Locale)` のような型ガード関数に置換。

---

## 🟢 Low

- [ ] **23. `SkillIcons.tsx` の base64 PNG 埋め込みがバンドルを肥大化**
  - **対象**: `src/components/ui/Skills/SkillIcons.tsx:950`（推定）
  - **推奨対応**: アイコンを `/public/icons/` に配置し `next/image` で参照。JS バンドルサイズ削減。

- [ ] **24. Prettier 設定の軽微な改善**
  - **対象**: `prettier.config.mjs`
  - **推奨対応**: `endOfLine: 'lf'` を追加（クロス OS 環境での改行コード統一）。`trailingComma: 'es5'` → `'all'` に変更（TypeScript では `all` が主流）。

- [ ] **25. Stylelint の `ignoreFiles` に絶対パスが指定されている**
  - **対象**: `.stylelintrc.mjs:5`
  - **現状**: `/node_modules` の形式では glob マッチしないケースがある。
  - **推奨対応**: `**/node_modules/**`、`**/.next/**` の glob 形式に修正。

- [ ] **26. lint-staged の `jest` に `--findRelatedTests --bail` が未指定**
  - **対象**: `.lintstagedrc.mjs:14`
  - **現状**: ステージされたファイルに関係なく全テストを実行してしまい pre-commit が遅い。
  - **推奨対応**: `jest --findRelatedTests --bail` を指定し、変更ファイルに関連するテストのみ高速実行。

- [ ] **27. `commit-msg` フック未設定（コミット規約の強制なし）**
  - **対象**: `.husky/`
  - **現状**: `pre-commit` フックのみ。commitizen の `:emoji: scope:` フォーマットが hook で強制されていない。
  - **推奨対応**: `commitlint` + `@commitlint/config-conventional` を導入し `.husky/commit-msg` で検証するか、`cz-emoji` のスキーマに合った commitlint 設定を追加。

- [ ] **28. `vercel.json` にセキュリティヘッダーが未設定**
  - **対象**: `vercel.json`
  - **現状**: `headers()` 設定なし。CSP・HSTS・X-Frame-Options・X-Content-Type-Options・Referrer-Policy 等が未適用。
  - **推奨対応**: `vercel.json` の `headers` フィールドまたは `next.config.ts` の `headers()` 関数でセキュリティヘッダーを設定。

- [ ] **29. `damion` フォントの未使用確認**
  - **対象**: `src/styles/fonts.ts`（推定）
  - **推奨対応**: プロジェクト全体で `damion` の使用箇所を確認。未使用であれば `next/font/google` の定義ごと削除し不要なフォントリクエストを排除。

- [ ] **30. `PageNavigation.tsx` の TODO（リンクをコンポーネントへ切り出し）**
  - **対象**: `src/components/ui/PageNavigation/PageNavigation.tsx:39`
  - **推奨対応**: TODO コメントに従ってリンクデータを定数に切り出すリファクタリングを実施。

---

## 付録A: 依存パッケージ バージョン状況

| パッケージ | 現在 | 最新 / メモ |
|---|---|---|
| `next` | 15.4.2 | 15.5.x で minor 更新あり |
| `react` / `react-dom` | 19.1.0 | 最新（問題なし） |
| `tailwindcss` | ^3.4.4 | v4 GA 済み（破壊的変更大） |
| `storybook` (各addon) | ^8.6.14 | v9 GA 済み（addon 再編あり） |
| `@chromatic-com/storybook` | ^3.2.4 | v4 が Storybook 9 対応 |
| `eslint-plugin-jest` | ^29.0.1 | v30 で Jest 30 に対応 |
| `popmotion` | ^11.0.5 | 2022年以降更新停止 → 削除推奨 |
| `ts-jest` | ^29.4.0 | next/jest 使用時は不要 |
| `ts-node` | ^10.9.2 | 同上、不要 |
| `@types/node` | ^24 | Node 22 LTS 利用時は `^22` に揃える |
| `jotai` | ^2.12.5 | 最新（問題なし） |
| `next-intl` | ^4.3.4 | 最新（問題なし） |
| `motion` | ^12.23.6 | 最新（問題なし） |

---

## 付録B: CI ギャップ一覧

| チェック | ローカル (pre-commit) | CI |
|---|---|---|
| ESLint | ✅ lint-staged | ❌ 未実装 |
| Prettier | ❌ | ❌ 未実装 |
| TypeScript typecheck | ❌ | ❌ 未実装 |
| Jest (coverage) | ✅ lint-staged (全量) | ✅ coverage.yml |
| Stylelint | ❌ | ❌ 未実装 |
| Markuplint | ❌ | ❌ 未実装 |
| Next.js build | ❌ | ❌ 未実装 |
| Storybook build | ❌ | ❌ 未実装 |

---

## 付録C: 参考リンク

- [Next.js — Dockerfile (standalone output)](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)
- [Next.js — `output: 'standalone'`](https://nextjs.org/docs/app/api-reference/config/next-config-js/output)
- [Next.js — Middleware でリクエストヘッダーを設定する](https://nextjs.org/docs/app/building-your-application/routing/middleware#setting-headers)
- [next-intl — App Router Middleware](https://next-intl.dev/docs/routing/middleware)
- [Tailwind CSS v4 — Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Storybook 9 — Migration Guide](https://storybook.js.org/docs/migration-guide)
- [BFG Repo Cleaner（git 履歴からシークレット除去）](https://rtyley.github.io/bfg-repo-cleaner/)
- [Jotai — `useHydrateAtoms`](https://jotai.org/docs/utilities/ssr)
