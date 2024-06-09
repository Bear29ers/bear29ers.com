import type { FC } from 'react';

interface Props {
  startAt: string;
  endAt: string;
}

const Period: FC<Props> = ({ startAt, endAt }) => {
  return (
    <div className="flex items-center gap-x-6">
      <time>{startAt}</time>
      <span>−</span>
      <time>{endAt}</time>
    </div>
  );
};

export default Period;
