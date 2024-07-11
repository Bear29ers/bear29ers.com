'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';
import GalleryIntro from '@/components/ui/GalleryIntro/GalleryIntro';
import ScrollDown from '@/components/ui/gallery/ScrollDown/ScrollDown';
import StaggeredText from '@/components/ui/gallery/StaggeredText/StaggeredText';
import Subhead from '@/components/ui/gallery/Subhead/Subhead';

import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  // const [mediaData, setMediaData] = useState<Media | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isCompletedIntro, setIsCompletedIntro] = useState<boolean>(true);
  const [isCompletedFanning, setIsCompletedFanning] = useState<boolean>(false);
  const [isActiveGallery, setIsActiveGallery] = useState<boolean>(false);

  // const loadMediaData = () => {
  //   fetchMedia()
  //     .then((data: Media) => {
  //       setMediaData(data);
  //     })
  //     .catch((err) => {
  //       // eslint-disable-next-line no-console
  //       console.error(err);
  //     });
  // };
  //
  // useEffect(() => {
  //   // loadMediaData();
  // }, []);

  const introBgVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: '-100%',
      transition: {
        ease: [0.8, 0, 0.2, 1],
        duration: 1,
      },
    },
  };

  const polaroidWrapperVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const polaroidItemVariants = (x: string, y: number, rotate: number) => ({
    initial: {
      x: '-50%',
      y: 220,
      rotate: 0,
    },
    animate: {
      x,
      y,
      rotate,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  });

  return (
    <div className="relative flex w-full flex-col items-center px-2.5 text-white xs:px-5 lg:px-0">
      <div className="my-24">
        {isActiveGallery && <AnimatedText text="Gallery" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />}
      </div>
      <div className="z-10 flex-col flex-center" />
      <motion.div
        className="fixed flex h-screen w-full flex-col items-center bg-hitGray bg-noise-pattern"
        variants={introBgVariants}
        initial="initial"
        animate={isActiveGallery && 'animate'}>
        {!loading && (
          <div className="mt-40 flex flex-col items-center gap-y-2">
            <StaggeredText textList={['Life', 'in', 'Pixels']} />
            <Subhead text="Capturing Moments, Creating Memories." />
          </div>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader">
            <GalleryIntro setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <div className="fixed h-screen w-full">
              <motion.img
                layout
                layoutId="main-visual"
                transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.4 }}
                animate={isActiveGallery && { opacity: 0, y: '70%', transition: { duration: 0.5 } }}
                onLayoutAnimationComplete={() => setIsCompletedIntro(!isCompletedIntro)}
                src="/images/polaroid/image-0.jpg"
                alt="Main Visual"
                className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-[400px]"
              />
              {isCompletedIntro && (
                <>
                  <ScrollDown state={isActiveGallery} setState={setIsActiveGallery} />
                  <motion.div
                    variants={polaroidWrapperVariants}
                    initial="initial"
                    animate="animate"
                    onAnimationComplete={() => setIsCompletedFanning(!isCompletedFanning)}>
                    <motion.img
                      layoutId="image-1"
                      variants={polaroidItemVariants('-105%', 120, -20)}
                      src="/images/polaroid/image-1.jpg"
                      className="absolute bottom-0 left-1/2 z-[2] w-full max-w-[400px]"
                    />
                    <motion.img
                      layoutId="image-2"
                      variants={polaroidItemVariants('-30%', -90, 5)}
                      src="/images/polaroid/image-2.jpg"
                      className="absolute bottom-0 left-1/2 z-[1] w-full max-w-[400px]"
                    />
                    <motion.img
                      layoutId="image-3"
                      variants={polaroidItemVariants('-90%', 0, -17)}
                      src="/images/polaroid/image-3.jpg"
                      className="absolute bottom-0 left-1/2 z-[5] w-full max-w-[400px]"
                    />
                    <motion.img
                      layoutId="image-4"
                      variants={polaroidItemVariants('-5%', 40, 12)}
                      src="/images/polaroid/image-4.jpg"
                      className="absolute bottom-0 left-1/2 z-[3] w-full max-w-[400px]"
                    />
                    <motion.img
                      layoutId="image-5"
                      variants={polaroidItemVariants('-70%', 20, -10)}
                      src="/images/polaroid/image-5.jpg"
                      className="absolute bottom-0 left-1/2 z-[6] w-full max-w-[400px]"
                    />
                    <motion.img
                      layoutId="image-6"
                      variants={polaroidItemVariants('5%', 160, 15)}
                      src="/images/polaroid/image-6.jpg"
                      className="absolute bottom-0 left-1/2 z-[4] w-full max-w-[400px]"
                    />
                  </motion.div>
                </>
              )}
            </div>
            {isActiveGallery && (
              <div className="mx-auto w-full max-w-7xl flex-center">
                <div className="grid w-fit grid-cols-3 gap-12">
                  <motion.img
                    layout
                    layoutId="image-1"
                    transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
                    src="/images/polaroid/image-1.jpg"
                    className="z-[2] w-full max-w-[300px] cursor-pointer"
                  />
                  <motion.img
                    layout
                    layoutId="image-2"
                    transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
                    src="/images/polaroid/image-2.jpg"
                    className="z-[1] w-full max-w-[300px] cursor-pointer"
                  />
                  <motion.img
                    layout
                    layoutId="image-3"
                    transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
                    src="/images/polaroid/image-3.jpg"
                    className="z-[5] w-full max-w-[300px] cursor-pointer"
                  />
                  <motion.img
                    layout
                    layoutId="image-4"
                    transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
                    src="/images/polaroid/image-4.jpg"
                    className="z-[3] w-full max-w-[300px] cursor-pointer"
                  />
                  <motion.img
                    layout
                    layoutId="image-5"
                    transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
                    src="/images/polaroid/image-5.jpg"
                    className="z-[6] w-full max-w-[300px] cursor-pointer"
                  />
                  <motion.img
                    layout
                    layoutId="image-6"
                    transition={{ ease: [0.8, 0, 0.2, 1], duration: 1 }}
                    src="/images/polaroid/image-6.jpg"
                    className="z-[4] w-full max-w-[300px] cursor-pointer"
                  />
                </div>
              </div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* <div> */}
      {/*   <h1>Instagram Gallery</h1> */}
      {/*   {!mediaData || !mediaData.media.data.length ? ( */}
      {/*     <div>No data available</div> */}
      {/*   ) : ( */}
      {/*     <div> */}
      {/*       {mediaData.media.data.map((post, index) => ( */}
      {/*         <div key={index}> */}
      {/*           <img src={post.mediaUrl} alt={post.caption} /> */}
      {/*           <p>{post.caption}</p> */}
      {/*           <p>Likes: {post.likeCount}</p> */}
      {/*           <p>Posted by: {post.username}</p> */}
      {/*           <a href={post.permalink} target="_blank" rel="noopener noreferrer"> */}
      {/*             View on Instagram */}
      {/*           </a> */}
      {/*         </div> */}
      {/*       ))} */}
      {/*     </div> */}
      {/*   )} */}
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Gallery;
