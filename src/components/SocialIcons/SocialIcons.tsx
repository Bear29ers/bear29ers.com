import type { FC } from 'react';

interface Props {
  isClicked: boolean;
}

const SocialIcons: FC<Props> = ({ isClicked }) => {
  console.log('isClicked: ', isClicked);
  return (
    <div>
      <h1>SocialIcons</h1>
    </div>
  );
};

export default SocialIcons;
