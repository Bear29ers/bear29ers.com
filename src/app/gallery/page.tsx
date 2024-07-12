'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';
import GalleryIntro from '@/components/ui/GalleryIntro/GalleryIntro';
import FanningImages from '@/components/ui/gallery/FanningImages/FanningImages';
import MainVisual from '@/components/ui/gallery/MainVisual/MainVisual';
import ScrollDown from '@/components/ui/gallery/ScrollDown/ScrollDown';
import StaggeredText from '@/components/ui/gallery/StaggeredText/StaggeredText';
import Subhead from '@/components/ui/gallery/Subhead/Subhead';

import fetchMedia from '@/libs/fetchMedia';

import type { MediaData, Media } from '@/types/media';

import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  const [mediaData, setMediaData] = useState<Media | undefined>(undefined);
  const [mainVisual, setMainVisual] = useState<MediaData | undefined>(undefined);
  const mainVisualLayoutId = 'main-visual';
  const [loading, setLoading] = useState<boolean>(true);
  const [isCompletedIntro, setIsCompletedIntro] = useState<boolean>(false);
  const [isCompletedFanning, setIsCompletedFanning] = useState<boolean>(false);
  const [isActiveGallery, setIsActiveGallery] = useState<boolean>(false);

  const loadMediaData = () => {
    fetchMedia()
      .then((data: Media) => {
        setMediaData(data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  useEffect(() => {
    loadMediaData();
  }, []);

  useEffect(() => {
    if (mediaData && mediaData.media.data.length) {
      const lastMediaItem = mediaData.media.data.pop();
      setMainVisual(lastMediaItem);
    }
  }, [mediaData]);

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

  if (!mediaData || !mediaData.media.data.length || !mainVisual) {
    return <div>No data available</div>;
  }

  return (
    <div className="relative flex w-full flex-col items-center px-2.5 text-white xs:px-5 lg:px-0">
      {isActiveGallery && (
        <div className="my-24">
          <AnimatedText text="Gallery" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
        </div>
      )}
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
          <div className="fixed top-1/2 -translate-y-1/2">
            <GalleryIntro mainVisualImageSrc={mainVisual.mediaUrl} layoutId={mainVisual.id} setState={setLoading} />
          </div>
        ) : (
          <>
            <div className="fixed h-screen w-full">
              <MainVisual
                imageSrc={mainVisual.mediaUrl}
                layoutId={mainVisual.id}
                canAnimate={isActiveGallery}
                setState={setIsCompletedIntro}
              />
              {isCompletedIntro && (
                <>
                  <ScrollDown state={isActiveGallery} setState={setIsActiveGallery} />
                  <FanningImages setState={setIsCompletedFanning} />
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
      <Footer />
      {/* {!mediaData || !mediaData.media.data.length ? ( */}
      {/*   <div>No data available</div> */}
      {/* ) : ( */}
      {/*   <div> */}
      {/*     {mediaData.media.data.map((post, index) => ( */}
      {/*       <div key={index}> */}
      {/*         <img src={post.mediaUrl} alt={post.caption} /> */}
      {/*         <p>{post.caption}</p> */}
      {/*         <p>Likes: {post.likeCount}</p> */}
      {/*         <p>Posted by: {post.username}</p> */}
      {/*         <a href={post.permalink} target="_blank" rel="noopener noreferrer"> */}
      {/*           View on Instagram */}
      {/*         </a> */}
      {/*       </div> */}
      {/*     ))} */}
      {/*   </div> */}
      {/* )} */}
    </div>
  );
};

export default Gallery;
