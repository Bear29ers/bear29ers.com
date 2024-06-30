/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

'use client';

import { useEffect, useState } from 'react';

import AnimatedText from '@/components/common/AnimatedText/AnimatedText';
import Footer from '@/components/layout/Footer/Footer';

import fetchMedia from '@/libs/fetchMedia';

import type { Media } from '@/types/media';

import type { NextPage } from 'next';

const Gallery: NextPage = () => {
  const [data, setData] = useState<Media | null>(null);

  const loadMediaData = () => {
    fetchMedia()
      .then((data) => {
        setData(data);
        console.log('data: ', data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    loadMediaData();
  }, []);

  return (
    <div className="flex w-full flex-col items-center px-2.5 text-white xs:px-5 lg:px-0">
      <div className="my-24">
        <AnimatedText text="Gallery" classes="text-[48px] xs:text-[60px] xsm:text-[80px]" />
      </div>
      <div>
        <h1>Instagram Gallery</h1>
        {!data || !data.media.data.length ? (
          <div>No data available</div>
        ) : (
          <div>
            {data.media.data.map((post, index) => (
              <div key={index}>
                <img src={post.mediaUrl} alt={post.caption} />
                <p>{post.caption}</p>
                <p>Likes: {post.likeCount}</p>
                <p>Posted by: {post.username}</p>
                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                  View on Instagram
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
