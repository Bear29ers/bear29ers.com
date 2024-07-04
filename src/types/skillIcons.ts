import type { FC } from 'react';

export interface SkillIcon {
  column: number;
  component: FC;
}

export interface SkillIcons {
  row: number;
  icons: SkillIcon[];
}
