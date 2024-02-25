import type { FC } from 'react';

const Stats: FC = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">📊 GitHub Stats</h3>
      <img
        src="https://github-readme-stats-bear29ers.vercel.app/api?username=Bear29ers&show_icons=true&theme=bear"
        alt="GitHub Stats"
        className="w-full max-w-xl"
        aria-label="GitHubStats"
      />
    </div>
  );
};

export default Stats;
