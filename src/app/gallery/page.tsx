'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';
import GalleryIntro from '@/components/ui/GalleryIntro/GalleryIntro';
import AnimatedGallery from '@/components/ui/gallery/AnimatedGallery/AnimatedGallery';
import FanningImages from '@/components/ui/gallery/FanningImages/FanningImages';
import MainVisual from '@/components/ui/gallery/MainVisual/MainVisual';
import ScrollDown from '@/components/ui/gallery/ScrollDown/ScrollDown';
import StaggeredText from '@/components/ui/gallery/StaggeredText/StaggeredText';
import Subhead from '@/components/ui/gallery/Subhead/Subhead';

import { zIndexList } from '@/constants/gallery';

import fetchMedia from '@/libs/fetchMedia';

import type { MediaData, Media } from '@/types/media';

import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  const [mediaData, setMediaData] = useState<Media | undefined>(undefined);
  const [mainVisual, setMainVisual] = useState<MediaData | undefined>(undefined);
  const [animatingMediaList, setAnimatingMediaList] = useState<MediaData[] | undefined>(undefined);
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
      const animatingMediaItems = mediaData.media.data.splice(0, 6);
      setAnimatingMediaList(animatingMediaItems);
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

  if (!mediaData || !mediaData.media.data.length || !mainVisual || !animatingMediaList) {
    return <div className="fixed flex h-screen w-full flex-col items-center bg-hitGray bg-noise-pattern" />;
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
            <GalleryIntro
              mainVisualImageSrc={mainVisual.mediaUrl}
              layoutId={mainVisual.id}
              mediaList={animatingMediaList}
              setState={setLoading}
            />
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
                  <FanningImages mediaList={animatingMediaList} setState={setIsCompletedFanning} />
                </>
              )}
            </div>
            {isActiveGallery && (
              <div className="mx-auto w-full max-w-7xl flex-center">
                <div className="grid w-fit grid-cols-3 gap-12">
                  {animatingMediaList.map((media: MediaData, index: number) => (
                    <AnimatedGallery
                      layoutId={media.id}
                      imageSrc={media.mediaUrl}
                      zIndex={zIndexList[index]!}
                      maxWidth="max-w-[300px]"
                      key={media.timestamp}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Gallery;
