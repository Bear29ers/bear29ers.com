import type { FC } from 'react';

import { HeartIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

import type { Media } from '@/types/media';

import ProfileIcon from '~/images/profile_2.jpg';

interface Props {
  media: Media;
  href: string;
  alt: string;
}

const Caption: FC<Props> = ({ media, href, alt }) => {
  const date = new Date(media.timestamp || '');
  const jstTime = date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
  const formattedDate = jstTime.replace(/\//g, '-');

  return (
    <div>
      <div className="mt-4 flex flex-col gap-y-6 rounded-lg bg-darker p-5 text-white">
        <Link href={href} className="flex items-center gap-x-4">
          <Image
            src={ProfileIcon}
            alt={media.username || alt}
            sizes="100vw"
            width={100}
            height={100}
            className="w-12 rounded-full"
          />
          <h4 className="text-lg">{media.username || alt}</h4>
        </Link>
        <div className="flex flex-col gap-y-4">
          <p className="whitespace-pre-wrap">{media.caption}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-end">
              <HeartIcon className="size-8 text-pink-500" />
              <span className="-ml-0.5 mb-1 text-xs">{media.likeCount}</span>
            </div>
            <time dateTime={media.timestamp} className="text-gray-500">
              {formattedDate}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caption;
