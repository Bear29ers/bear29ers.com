import type { FC } from 'react';

import { damion } from '@/common/utils/fonts';

interface Props {
  title: string;
}

const SectionTitle: FC<Props> = ({ title }) => {
  return (
    <div className="relative w-fit">
      <h2 className={`${damion.variable} font-damion text-[200px] text-darkerGray`}>{title}</h2>
      <h4
        className={`${damion.variable} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-damion text-8xl text-hitGray`}>
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;
