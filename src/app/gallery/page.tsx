'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';

import type { NextPage } from 'next';

import Image1 from '~/images/polaroid/image-1.jpg';

const MotionImage = motion(Image);

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

  const variants = {
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

  const imageVariants = {
    initial: { y: '100%' },
    animate: {
      y: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1.2,
      },
    },
  };

  return (
    <div className="relative flex w-full flex-col items-center px-2.5 text-white xs:px-5 lg:px-0">
      <div className="z-10 my-24">
        <AnimatedText text="Gallery" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
      </div>
      {/* <button type="button" onClick={() => setOpen(!open)} className="z-10 bg-blue-400"> */}
      {/*   OPEN */}
      {/* </button> */}
      {/* <motion.div */}
      {/*   className="fixed flex h-screen w-full flex-col items-center bg-pink-700" */}
      {/*   variants={variants} */}
      {/*   initial="initial" */}
      {/*   animate={open ? 'animate' : 'initial'}> */}
      {/*   intro */}
      {/* </motion.div> */}

      <AnimatePresence mode="wait">
        <motion.div className="overflow-hidden flex-center">
          <MotionImage
            src={Image1}
            alt="image-1"
            className="w-1/2"
            variants={imageVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>

        {/* {loading ? ( */}
        {/*   <motion.div key="loader"> */}
        {/*     <GalleryIntro setLoading={setLoading} /> */}
        {/*   </motion.div> */}
        {/* ) : ( */}
        {/*   <div> */}
        {/*     {!loading && ( */}
        {/*       <div> */}
        {/*         <div className="flex-col flex-center"> */}
        {/*           <h1 className="text-9xl">brand</h1> */}
        {/*           <h1 className="mb-20 text-9xl">experience</h1> */}
        {/*           TODO: MainVisualコンポーネントにする layoutIdはpropsで渡す */}
        {/*           <motion.img */}
        {/*             layout */}
        {/*             transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.6 }} */}
        {/*             src="/images/polaroid/image-0.jpg" */}
        {/*             layoutId="main-visual" */}
        {/*             alt="Final Image" */}
        {/*             className="w-1/2" */}
        {/*           /> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*     )} */}
        {/*   </div> */}
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
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
