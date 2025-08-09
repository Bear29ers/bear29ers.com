# Skills Test Coverage Improvement 2

## Overview

Improved the test coverage of the `Skills` component by adding more detailed tests for the `Square` component.

## Changes

- Modified `src/components/ui/Skills/Skills.test.tsx`
  - Added a test to check if the `item.component` is rendered inside the `Square` component.
  - Added a test to check if the spring animation values are applied to non-active squares.

## How to test

1. Run `npm test -- --coverage src/components/ui/Skills/Skills.test.tsx`
2. Confirm that all tests pass.
