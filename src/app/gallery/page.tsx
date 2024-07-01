'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';
import Loader from '@/components/ui/Loader/Loader';

import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  // const [mediaData, setMediaData] = useState<Media | null>(null);
  //
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

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (typeof document !== 'undefined') {
  //     loading
  //       ? document.querySelector('body')?.classList.add('loading')
  //       : document.querySelector('body')?.classList.remove('loading');
  //   }
  // }, [loading]);

  return (
    <div className="flex w-full flex-col items-center px-2.5 text-white xs:px-5 lg:px-0">
      <div className="my-24">
        <AnimatedText text="Gallery" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
      </div>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <div>
            {!loading && (
              <div className="flex-center">
                <motion.img
                  transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.6 }}
                  src="/images/example/image-2.jpg"
                  layoutId="main-image-1"
                  alt="Final Image"
                  className="w-10/12"
                />
              </div>
            )}
          </div>
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
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
