import type { FC } from 'react';

export interface SkillIcon {
  row: number;
  icons: {
    column: number;
    component: FC;
  }[];
}
