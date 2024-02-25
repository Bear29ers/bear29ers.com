import type { FC } from 'react';

const Contributions: FC = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">🍀 Contributions</h3>
      <img
        src="https://raw.githubusercontent.com/Bear29ers/Bear29ers/master/profile-3d-contrib/profile-green-animate.svg"
        alt="contributions"
        className="w-full"
        data-testid="contributions"
      />
    </div>
  );
};

export default Contributions;
