# ColorPicker Test Coverage Improvement

## Overview

Improved the test coverage of the `ColorPicker` component to 100%.

## Changes

- Modified `src/components/common/ColorPicker/ColorPicker.test.tsx`
  - Mocked `jotai`'s `useAtom` to isolate the component.
  - Added tests for closing the picker.
  - Added tests for mobile and desktop views.
  - Added tests for `handleClickColor`.
  - Made tests more robust by checking for style changes instead of exact transform values.

## How to test

1. Run `npm test -- --coverage src/components/common/ColorPicker/ColorPicker.test.tsx`
2. Confirm that all tests pass and that the coverage for `ColorPicker.tsx` is 100%.
