'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';
import AnimatedGallery from '@/components/ui/gallery/AnimatedGallery/AnimatedGallery';
import FanningImages from '@/components/ui/gallery/FanningImages/FanningImages';
import GalleryIntro from '@/components/ui/gallery/GalleryIntro/GalleryIntro';
import MainGallery from '@/components/ui/gallery/MainGallery/MainGallery';
import MainVisual from '@/components/ui/gallery/MainVisual/MainVisual';
import ScrollDown from '@/components/ui/gallery/ScrollDown/ScrollDown';
import StaggeredText from '@/components/ui/gallery/StaggeredText/StaggeredText';
import Subhead from '@/components/ui/gallery/Subhead/Subhead';

import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

import { zIndexList } from '@/constants/gallery';

import fetchMedia from '@/libs/fetchMedia';

import type { MediaData, Media } from '@/types/media';

import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  // media data
  const [mediaData, setMediaData] = useState<Media | undefined>(undefined);
  const [mainVisual, setMainVisual] = useState<MediaData | undefined>(undefined);
  const [animatingMediaList, setAnimatingMediaList] = useState<MediaData[] | undefined>(undefined);

  // animation flag
  const [loading, setLoading] = useState<boolean>(true);
  const [isCompletedIntro, setIsCompletedIntro] = useState<boolean>(false);
  const [isCompletedFanning, setIsCompletedFanning] = useState<boolean>(false);
  const [isActiveGallery, setIsActiveGallery] = useState<boolean>(false);
  const [isFullyGallerySet, setIsFullyGallerySet] = useState<boolean>(false);

  // style state
  const galleryItemMaxWidth = 'max-w-72';
  const [fanningInitialY, setFanningInitialY] = useState<number>(220);
  const [fanningStyleList, setFanningStyleList] = useState<{ x: string; y: number; rotate: number }[]>([
    { x: '-105%', y: 120, rotate: -20 },
    { x: '-30%', y: -90, rotate: 5 },
    { x: '-90%', y: 0, rotate: -17 },
    { x: '-5%', y: 40, rotate: 12 },
    { x: '-70%', y: 20, rotate: -10 },
    { x: '5%', y: 160, rotate: 15 },
  ]);

  const isLarge = useMediaQuery('(min-width: 1000px)');
  const isMedium = useMediaQuery('(min-width: 700px)');
  const isSmall = useMediaQuery('(min-width: 450px)');

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

  useEffect(() => {
    if (isLarge) {
      setFanningInitialY(220);
      setFanningStyleList([
        { x: '-105%', y: 120, rotate: -20 },
        { x: '-30%', y: -90, rotate: 5 },
        { x: '-90%', y: 0, rotate: -17 },
        { x: '-5%', y: 40, rotate: 12 },
        { x: '-70%', y: 20, rotate: -10 },
        { x: '5%', y: 160, rotate: 15 },
      ]);
    } else if (isMedium) {
      setFanningInitialY(220);
      setFanningStyleList([
        { x: '-105%', y: 120, rotate: -20 },
        { x: '-30%', y: -90, rotate: 5 },
        { x: '-90%', y: 0, rotate: -17 },
        { x: '-5%', y: 40, rotate: 12 },
        { x: '-70%', y: 20, rotate: -10 },
        { x: '5%', y: 160, rotate: 15 },
      ]);
    } else if (isSmall) {
      setFanningInitialY(180);
      setFanningStyleList([
        { x: '-90%', y: 50, rotate: -20 },
        { x: '-30%', y: -60, rotate: 5 },
        { x: '-80%', y: -20, rotate: -17 },
        { x: '-25%', y: 15, rotate: 12 },
        { x: '-65%', y: 0, rotate: -10 },
        { x: '-6%', y: 70, rotate: 15 },
      ]);
    } else {
      setFanningInitialY(150);
      setFanningStyleList([
        { x: '-52%', y: -240, rotate: -2 },
        { x: '-48%', y: -200, rotate: 2 },
        { x: '-53%', y: -160, rotate: -3 },
        { x: '-47%', y: -120, rotate: 3 },
        { x: '-54%', y: -80, rotate: -4 },
        { x: '-46%', y: -40, rotate: 4 },
      ]);
    }
  }, [isLarge, isMedium, isSmall]);

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
          <div className="gallery-intro-title flex flex-col items-center gap-y-2">
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
            {!isFullyGallerySet && (
              <div className="fixed h-screen w-full">
                <MainVisual
                  imageSrc={mainVisual.mediaUrl}
                  layoutId={mainVisual.id}
                  canAnimate={isActiveGallery}
                  maxWidth="mlg:max-w-[400px] txs:max-w-[350px] max-w-[230px]"
                  setState={setIsCompletedIntro}
                />
                {isCompletedIntro && (
                  <>
                    {isCompletedFanning && <ScrollDown state={isActiveGallery} setState={setIsActiveGallery} />}
                    <FanningImages
                      mediaList={animatingMediaList}
                      maxWidth="mlg:max-w-[400px] md:max-w-[350px] txs:max-w-[250px] max-w-[230px]"
                      initialY={fanningInitialY}
                      styles={fanningStyleList}
                      setState={setIsCompletedFanning}
                    />
                  </>
                )}
              </div>
            )}
            {isActiveGallery && (
              <div className="mx-auto w-full max-w-7xl flex-center">
                <div className="grid w-fit grid-cols-1 justify-between gap-x-6 gap-y-12 xxs:grid-cols-2 xsm:gap-x-12 xsm:gap-y-20 md:grid-cols-3 lg:gap-24 xl:gap-x-32">
                  {animatingMediaList.map((media: MediaData, index: number) => (
                    <AnimatedGallery
                      layoutId={media.id}
                      imageSrc={media.mediaUrl}
                      zIndex={zIndexList[index]!}
                      maxWidth={galleryItemMaxWidth}
                      key={media.timestamp}
                      setState={index === animatingMediaList.length - 1 ? setIsFullyGallerySet : undefined}
                    />
                  ))}
                  {mediaData.media.data.map((media: MediaData) => (
                    <MainGallery
                      imageSrc={media.mediaUrl}
                      id={media.id}
                      maxWidth={galleryItemMaxWidth}
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
