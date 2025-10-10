# `useModalScrollLock` のテストカバレッジ向上

## 概要

`@/src/hooks/useModalScrollLock/useModalScrollLock.test.ts` のテストカバレッジにおいて、Branchesが100%ではなかったため、不足しているテストケースを追加しカバレッジの向上を図った。

## 変更内容

- `useModalScrollLock.test.ts` に以下のテストケースを追加
  - `scrollTop` が `undefined` となるケース
  - スクロールロック解除時に `insetBlockStart` が空文字のケース

これにより、`getScrollPosition` フック内の `??` と `||` のフォールバック処理がテストされ、ブランチカバレッジが向上した。