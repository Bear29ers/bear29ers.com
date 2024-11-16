import type { FC } from 'react';

export type Locale = 'en' | 'ja';

export interface LocaleItem {
  locale: Locale;
  icon: FC;
}
