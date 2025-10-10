# テストカバレッジの向上

## 概要

`@src/hooks/useModalScrollLock/useModalScrollLock.test.ts` のテストカバレッジを向上させるために、未テストだったブランチをカバーするテストケースを追加しました。

## 変更点

- `document.scrollingElement` が `null` の場合のフォールバック処理をテストするケースを追加しました。
- 縦書きモード（`vertical-lr`）でモーダルを閉じた際のスクロール位置復元処理をテストするケースを追加しました。
- `window` オブジェクトが未定義であるサーバーサイドレンダリング（SSR）環境をシミュレートするテストケースを追加しました。
- SSRのテストケース追加に伴い、`useModalScrollLock.ts`の`backfaceFixed`関数をエクスポートし、テストから直接呼び出せるようにリファクタリングしました。
- `getScrollPosition`関数の`parseInt`が`NaN`を返すケースを明示的に処理するようにリファクタリングし、カバレッジを向上させました。

これにより、`useModalScrollLock`フックの堅牢性が向上し、カバレッジが100%に近づきました。