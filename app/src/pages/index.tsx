import { FC } from 'react';
import { Button, Theme } from 'react-daisyui';

const Home: FC = () => {
  return (
    <>
      <Theme dataTheme='retro'>
        <div className='flex gap-2 p-4'>
          <Button color='primary'>Click me</Button>
          <Button color='info'>Click me</Button>
        </div>
      </Theme>
      <Theme dataTheme='dark' className='p-10'>
        <Button color='primary'>Click me</Button>
      </Theme>
    </>
  );
};

export default Home;
