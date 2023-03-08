import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { Button, Card, Theme } from 'react-daisyui';

import { imageList, createPublicImagePath } from '@/libs/images';
import styles from '@/styles/Home.module.scss';

import Page from './components/page';
import PageLast from './components/pageLast';

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  // ref作成
  const pagesWapperRef = useRef<HTMLDivElement | null>(null);
  const pagesRef = useRef<HTMLDivElement | null>(null);
  const didEffect = useRef(false);

  const setGsap = (pagesElement: HTMLDivElement, pagesWrapperElement: HTMLDivElement) => {
    gsap.to(pagesElement, {
      x: -(pagesElement.clientWidth - pagesWrapperElement.clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '#horizontal-scroll-section',
        start: 'top top',
        end: () => `+=${pagesElement.clientWidth - pagesWrapperElement.clientWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  };

  // useEffectをセット
  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;
    console.log(pagesRef.current?.children);
    const pagesElement = pagesRef?.current;
    if (!pagesElement) return;
    const pagesWrapperElement = pagesWapperRef?.current;
    if (!pagesWrapperElement) return;
    setGsap(pagesElement, pagesWrapperElement);
  }, []);

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
      <Theme dataTheme='aqua' className='p-10'>
        <Card bordered>
          <Card.Image src='https://api.lorem.space/image/shoes?w=400&h=225' alt='Shoes' />
          <Card.Body>
            <Card.Title tag='h2'>Shoes!</Card.Title>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <Card.Actions className='justify-end'>
              <Button color='primary'>Buy Now</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </Theme>
      <div className='h-screen bg-green-200'>1</div>
      {/* 横スクロールセクション */}
      <main className={styles.main}>
        <section className={styles.section} id='horizontal-scroll-section'>
          <div className={styles.container}>
            <div className={styles.pagesWrapper} ref={pagesWapperRef}>
              <div className={styles.pages} ref={pagesRef} id='pages'>
                {imageList.map((data) => {
                  return <Page key={data.id} srcpath={createPublicImagePath(data.id.toString())} />;
                })}
                <PageLast />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
