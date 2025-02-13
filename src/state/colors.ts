import { atomWithStorage } from 'jotai/utils';

import type { Color } from '@/types/color';

export const themeColor = atomWithStorage<Color>('themeColor', 'Red');
