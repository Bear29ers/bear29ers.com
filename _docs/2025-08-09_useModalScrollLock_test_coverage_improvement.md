# `useModalScrollLock` Test Coverage Improvement

- **Date:** 2025-08-09
- **Author:** Gemini

## Overview

This log details the work done to improve the test coverage of the `useModalScrollLock` hook from 93.54% to 100%.

## Changes

### `src/hooks/useModalScrollLock/useModalScrollLock.ts`

- Updated the `getScrollBarSize` function to ensure it does not return a negative value by using `Math.max(0, ...)`. This prevents potential issues with negative padding being applied.

### `src/hooks/useModalScrollLock/useModalScrollLock.test.ts`

- Added test cases to handle scenarios where the scrollbar size is zero or negative, for both horizontal and vertical writing modes.
- These changes increased the branch coverage for `useModalScrollLock.ts` to 100%.
