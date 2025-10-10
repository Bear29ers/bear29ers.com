# Skills Test Coverage Improvement

## Overview

Improved the test coverage of the `Skills` component.

## Changes

- Modified `src/components/ui/Skills/Skills.test.tsx`
  - Added tests for `onDragStart` event to check if the active state is set correctly.
  - Refactored responsive behavior tests to be more accurate by setting the `useMediaQuery` mock before rendering the component.
  - Added more detailed tests for the `Square` component, checking for `zIndex` and initial styles.

## How to test

1. Run `npm test -- --coverage src/components/ui/Skills/Skills.test.tsx`
2. Confirm that all tests pass and that the coverage for `Skills.tsx` is improved.
