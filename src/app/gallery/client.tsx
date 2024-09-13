'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';
import AnimatedGallery from '@/components/ui/gallery/AnimatedGallery/AnimatedGallery';
import FanningImages from '@/components/ui/gallery/FanningImages/FanningImages';
import GalleryIntro from '@/components/ui/gallery/GalleryIntro/GalleryIntro';
import GridGallery from '@/components/ui/gallery/GridGallery/GridGallery';
import MainGallery from '@/components/ui/gallery/MainGallery/MainGallery';
import MainVisual from '@/components/ui/gallery/MainVisual/MainVisual';
import ScrollDown from '@/components/ui/gallery/ScrollDown/ScrollDown';
import ScrollToTop from '@/components/ui/gallery/ScrollToTop/ScrollToTop';
import StaggeredText from '@/components/ui/gallery/StaggeredText/StaggeredText';
import Subhead from '@/components/ui/gallery/Subhead/Subhead';

import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

import { imageInfoList, zIndexList } from '@/constants/gallery';

import type { Media } from '@/types/media';

interface Props {
  mediaList: Media[];
  animatingMediaList: Media[];
  mainVisual: Media;
}

const GalleryClient: FC<Props> = ({ mediaList, animatingMediaList, mainVisual }) => {
  // animation flag
  const [isCompletedIntro, setIsCompletedIntro] = useState<boolean>(false);
  const [isCompletedFanning, setIsCompletedFanning] = useState<boolean>(false);
  const [isCompletedAllIntro, setIsCompletedAllIntro] = useState<boolean>(false);
  const [isActiveGallery, setIsActiveGallery] = useState<boolean>(false);
  const [isFullyGallerySet, setIsFullyGallerySet] = useState<boolean>(false);

  // styles state
  const galleryItemWidth = 288;
  const galleryItemMaxWidth = 'max-w-72';
  const [fanningInitialY, setFanningInitialY] = useState<number | string>(220);
  const [fanningStyleList, setFanningStyleList] = useState<{ x: string; y: number; rotate: number }[]>([
    { x: '-105%', y: 120, rotate: -20 },
    { x: '-30%', y: -90, rotate: 5 },
    { x: '-90%', y: 0, rotate: -17 },
    { x: '-5%', y: 40, rotate: 12 },
    { x: '-70%', y: 20, rotate: -10 },
    { x: '5%', y: 160, rotate: 15 },
  ]);

  const isMedium = useMediaQuery('(min-width: 768px)');
  const isSmall = useMediaQuery('(min-width: 540px)');

  useEffect(() => {
    if (isMedium) {
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
      setFanningInitialY(0);
      setFanningStyleList([
        { x: '-100%', y: -330, rotate: -10 },
        { x: '70%', y: -150, rotate: -2.5 },
        { x: '-170%', y: -150, rotate: 8 },
        { x: '70%', y: 100, rotate: 6 },
        { x: '-170%', y: 100, rotate: -5 },
        { x: '0%', y: -330, rotate: 7.5 },
      ]);
    } else {
      setFanningInitialY(0);
      setFanningStyleList([
        { x: '-100%', y: -180, rotate: -10 },
        { x: '40%', y: -60, rotate: -2.5 },
        { x: '-140%', y: -0, rotate: 8 },
        { x: '40%', y: 100, rotate: 6 },
        { x: '-140%', y: 100, rotate: -5 },
        { x: '0%', y: -180, rotate: 7.5 },
      ]);
    }
  }, [isMedium, isSmall]);

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

  return (
    <div className="relative flex w-full flex-col items-center px-2.5 text-white xs:px-5 lg:px-0">
      {isActiveGallery && (
        <>
          <div className="my-24">
            <AnimatedText text="Gallery" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
          </div>
          <div className="fixed bottom-6 right-4 xsm:right-8 lg:right-10">
            <ScrollToTop />
          </div>
        </>
      )}
      <div className="z-10 flex-col flex-center" />
      <motion.div
        className="fixed flex h-screen w-full flex-col items-center bg-hitGray bg-noise-pattern"
        variants={introBgVariants}
        initial={isActiveGallery ? 'animate' : 'initial'}
        animate={isActiveGallery && 'animate'}>
        {isCompletedIntro && (
          <div className="mt-16 flex flex-col items-center gap-y-1 md:mt-24 md:gap-y-2">
            <StaggeredText textList={['Life', 'in', 'Pixels']} />
            <Subhead text="Capturing Moments, Creating Memories." />
          </div>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {!isCompletedIntro ? (
          <div className="fixed top-1/2 -translate-y-1/2">
            <GalleryIntro
              mainVisualImageSrc={mainVisual.mediaUrl}
              layoutId={mainVisual.id}
              mediaList={animatingMediaList}
              setState={setIsCompletedIntro}
            />
          </div>
        ) : (
          <>
            {!isFullyGallerySet && (
              <div className="fixed bottom-24 h-screen w-full md:bottom-0">
                <MainVisual
                  imageSrc={mainVisual.mediaUrl}
                  layoutId={mainVisual.id}
                  canAnimate={isActiveGallery}
                  maxWidth="mlg:max-w-[400px] xsm:max-w-[350px] max-w-[250px]"
                  setState={setIsCompletedAllIntro}
                />
                {isCompletedAllIntro && (
                  <>
                    {isCompletedFanning && <ScrollDown state={isActiveGallery} setState={setIsActiveGallery} />}
                    <FanningImages
                      mediaList={animatingMediaList}
                      maxWidth="mlg:max-w-[400px] md:max-w-[350px] xsm:max-w-[200px] max-w-[180px]"
                      initialY={fanningInitialY}
                      styles={fanningStyleList}
                      setState={setIsCompletedFanning}
                    />
                  </>
                )}
              </div>
            )}
            {isActiveGallery && (
              <div className="mx-auto w-full max-w-7xl flex-col gap-y-40 flex-center md:gap-y-56">
                <div className="grid w-fit grid-cols-1 justify-between gap-x-6 gap-y-12 xxs:grid-cols-2 xsm:gap-x-12 xsm:gap-y-20 md:grid-cols-3 lg:gap-24 xl:gap-x-32">
                  {animatingMediaList.map((media: Media, index: number) => (
                    <AnimatedGallery
                      layoutId={media.id}
                      imageSrc={media.mediaUrl}
                      zIndex={zIndexList[index]!}
                      maxWidth={galleryItemMaxWidth}
                      key={media.id}
                      setState={index === animatingMediaList.length - 1 ? setIsFullyGallerySet : undefined}
                    />
                  ))}
                  {mediaList.map((media: Media) => (
                    <MainGallery
                      imageSrc={media.mediaUrl}
                      id={media.id}
                      width={galleryItemWidth}
                      maxWidth={galleryItemMaxWidth}
                      key={media.id}
                    />
                  ))}
                </div>
                <GridGallery imageInfoList={imageInfoList} />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default GalleryClient;
