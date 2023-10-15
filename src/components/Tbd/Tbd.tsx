/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react';

import { FiSlash } from 'react-icons/fi';

type Props = {
  width: string;
};

const Tbd: FC<Props> = ({ width }) => {
  return (
    <div className={`flex-center rounded-2xl bg-gradient-to-b from-hitGray to-slate-400 ${width}`} data-testid="tbd">
      <div className="flex-center flex-col">
        <FiSlash className="text-4xl text-white" data-testid="slash-icon" />
        <h5 className="text-xl font-semibold text-white">TBD</h5>
      </div>
    </div>
  );
};

export default Tbd;
