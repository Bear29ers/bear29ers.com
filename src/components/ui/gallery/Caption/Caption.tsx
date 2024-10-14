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
  index: number;
}

const Caption: FC<Props> = ({ media, href, alt, index }) => {
  const date = media.timestamp ? new Date(media.timestamp) : new Date();
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
      <div className="mt-4 flex flex-col gap-y-4 rounded-lg bg-darker p-5 text-white">
        <Link href={href} className="flex items-center gap-x-3 txs:gap-x-4" data-testid="profile-link">
          <Image
            src={ProfileIcon}
            alt={media.username || alt}
            sizes="100vw"
            width={100}
            height={100}
            className="w-10 rounded-full txs:w-12"
          />
          <h4 className="txs:text-lg">{media.username || alt}</h4>
        </Link>
        <div className="flex flex-col gap-y-4">
          <p className="whitespace-pre-wrap text-sm txs:text-base">{media.caption}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-end">
              <HeartIcon className="size-7 text-pink-500 txs:size-8" />
              <span className="-ml-0.5 mb-1 text-[10px] txs:text-xs">{media.likeCount}</span>
            </div>
            <time dateTime={media.timestamp || ''} className="text-sm text-gray-500 txs:text-base">
              {formattedDate}
            </time>
          </div>
          <div className="flex-center">
            <Link
              href={`${media.permalink}?img_index=${index + 1}`}
              target="_blank"
              className="w-fit rounded-2xl border border-customRed-500 px-4 py-2 text-sm transition-colors hover:bg-customRed-500 txs:text-base">
              More on Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caption;
