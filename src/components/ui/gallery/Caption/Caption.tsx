import type { FC } from 'react';

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
        <p className="w-full max-w-[300px] whitespace-pre-wrap">{media.caption}</p>
      </div>
    </div>
  );
};

export default Caption;
