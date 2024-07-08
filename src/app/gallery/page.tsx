'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';
import StaggeredText from '@/components/ui/gallery/StaggeredText/StaggeredText';

import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  // const [mediaData, setMediaData] = useState<Media | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

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

  const bgVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: '-100%',
      transition: {
        ease: [0.8, 0, 0.2, 1],
        duration: 0.7,
        delay: 0.12,
      },
    },
  };

  return (
    <div className="relative flex w-full flex-col items-center px-2.5 text-white xs:px-5 lg:px-0">
      <div className="my-24">
        <AnimatedText text="Gallery" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
      </div>
      <div className="z-10 flex-col flex-center" />
      <motion.div
        className="fixed flex h-screen w-full flex-col items-center bg-hitGray bg-noise-pattern"
        variants={bgVariants}
        initial="initial"
        animate={open ? 'animate' : 'initial'}>
        {loading && (
          <div className="mt-40 flex flex-col items-center gap-y-2">
            <StaggeredText textList={['Life', 'in', 'Pixels']} />
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: 1.2 }}
              className="text-3xl font-medium text-lightGray">
              Capturing Moments, Creating Memories.
            </motion.h2>
          </div>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* {loading ? ( */}
        {/*   <motion.div key="loader"> */}
        {/*     <GalleryIntro setLoading={setLoading} /> */}
        {/*   </motion.div> */}
        {/* ) : ( */}
        <div className="fixed z-10 h-screen w-full">
          <button type="button" onClick={() => setOpen(!open)} className="absolute z-10 bg-green-500">
            OPEN
          </button>
          <div className="relative h-screen w-full">
            <motion.img
              layout
              layoutId="main-visual"
              transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.4 }}
              onLayoutAnimationComplete={() => console.log('layout animation completed')}
              src="/images/polaroid/image-0.jpg"
              alt="Final Image"
              className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-[400px]"
            />
            <motion.div>
              <motion.img
                animate={{ x: '-30%', y: -90, rotate: 5 }}
                src="/images/polaroid/image-2.jpg"
                className="absolute bottom-0 left-1/2 w-full max-w-[400px] "
              />
              <motion.img
                animate={{ x: '-105%', y: 120, rotate: -20 }}
                src="/images/polaroid/image-1.jpg"
                className="absolute bottom-0 left-1/2 w-full max-w-[400px] "
              />
              <motion.img
                animate={{ x: '-5%', y: 40, rotate: 12 }}
                src="/images/polaroid/image-3.jpg"
                className="absolute bottom-0 left-1/2 w-full max-w-[400px] "
              />
              <motion.img
                animate={{ x: '5%', y: 160, rotate: 15 }}
                src="/images/polaroid/image-6.jpg"
                className="absolute bottom-0 left-1/2 w-full max-w-[400px] "
              />
              <motion.img
                animate={{ x: '-90%', y: 0, rotate: -17 }}
                src="/images/polaroid/image-4.jpg"
                className="absolute bottom-0 left-1/2 w-full max-w-[400px] "
              />
              <motion.img
                animate={{ x: '-70%', y: 20, rotate: -10 }}
                src="/images/polaroid/image-5.jpg"
                className="absolute bottom-0 left-1/2 w-full max-w-[400px] "
              />
            </motion.div>
          </div>
        </div>
        {/* )} */}
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
