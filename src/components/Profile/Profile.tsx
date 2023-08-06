'use client';

import type { FC } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { ACHIEVEMENTS, PROFILE_TEXT } from '@/const/about';
import type { Achievement } from '@/const/about';
import { SOCIAL_MEDIA_LIST } from '@/const/socialMedia';

import profilePic from '../../../public/images/profile.jpg';
import { LanguagesTools } from '../LanguagesTools/LanguagesTools';

const FramerImage = motion(Image);

const Profile: FC = () => {
  return (
    <div className="mx-auto grid w-full max-w-screen-xl grid-cols-3 pt-24 font-sans text-dark" role="grid">
      <div className="col-span-1 flex flex-col px-4">
        <div className="flex-center relative">
          <Image
            src={profilePic}
            alt={PROFILE_TEXT.userName}
            className="w-full max-w-xs rounded-full border border-gray"
            role="img"
          />
          <div className="flex-center absolute bottom-12 right-12 h-10 w-10 rounded-full border border-gray bg-light text-xl">
            <span>🐻</span>
          </div>
        </div>
        <div className="py-6">
          <h2 className="flex flex-col">
            <span className="text-2xl font-bold">{PROFILE_TEXT.fullName}</span>
            <span className="text-xl text-darkGray">{PROFILE_TEXT.userName}</span>
          </h2>
        </div>
        <div className="pb-8 text-lg">{PROFILE_TEXT.greeting}</div>
        <ul>
          <li className="flex items-center gap-x-3" aria-label="organization">
            <svg fill="#656d76" viewBox="0 0 16 16" version="1.1" width="18" height="18" aria-hidden="true" role="img">
              <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z" />
            </svg>
            <span>{PROFILE_TEXT.organization}</span>
          </li>
          <li className="flex items-center gap-x-3" aria-label="location">
            <svg fill="#656d76" viewBox="0 0 16 16" version="1.1" width="18" height="18" aria-hidden="true" role="img">
              <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z" />
            </svg>
            <span>{PROFILE_TEXT.location}</span>
          </li>
          <li className="flex items-center gap-x-3" aria-label="website">
            <svg fill="#656d76" viewBox="0 0 16 16" version="1.1" width="18" height="18" aria-hidden="true" role="img">
              <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z" />
            </svg>
            <Link href={PROFILE_TEXT.website} className="hover:text-link hover:underline" role="link">
              {PROFILE_TEXT.website}
            </Link>
          </li>
        </ul>
        <span className="my-8 block h-[1px] w-full bg-gray" />
        <div className="flex flex-col pb-6">
          <h3 className="mb-3 text-lg font-bold">Achievements</h3>
          <div className="flex gap-1">
            {ACHIEVEMENTS.map((achievement: Achievement) => (
              <FramerImage
                src={achievement.src}
                alt={`Achievement: ${achievement.alt}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                key={achievement.id}
                className="h-auto w-16 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col rounded-md border border-gray bg-light p-6">
        <div className="flex-between mb-5">
          <span className="font-mono text-xs">Bear29ers / README.md</span>
          <svg
            fill="#656d76"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            version="1.1"
            aria-hidden="true"
            data-view-component="true"
            role="img">
            <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z" />
          </svg>
        </div>
        <div className="mb-16">
          <h4 className="mb-6 text-xl font-bold">{PROFILE_TEXT.shortGreeting}</h4>
          <h3 className="text-2xl font-bold">{PROFILE_TEXT.title}</h3>
          <span className="mb-6 mt-2 block h-[1px] w-full bg-gray" />
          <div className="flex flex-col gap-y-4">
            {PROFILE_TEXT.biographyList.map((biography) => (
              <p key={biography.id}>{biography.text}</p>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h4 className="mb-4 text-xl font-bold">🤝 Connect with me:</h4>
          <div className="flex gap-x-6">
            {SOCIAL_MEDIA_LIST.map((socialMedia) => (
              <motion.a
                href={socialMedia.href}
                target="_blank"
                className="w-14"
                role="link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                data-testid={`${socialMedia.text}-link`}
                key={socialMedia.id}>
                <socialMedia.component />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h4 className="mb-4 text-xl font-bold">🛠️ Languages and Tools:</h4>
          <div
            className="m-0 flex place-content-center place-items-center p-0 text-center"
            style={{ perspective: 1000 }}>
            <LanguagesTools />
          </div>
        </div>
        <div className="mb-16">
          <h4 className="mb-4 text-xl font-bold">📊 GitHub Stats:</h4>
          <img
            src="https://github-readme-stats-bear29ers.vercel.app/api?username=Bear29ers&show_icons=true&theme=bear"
            alt="GitHub Stats"
            className="w-[510px]"
            data-testid="github-stats"
          />
        </div>
        <div>
          <h4 className="mb-4 text-xl font-bold">🍀 Contributions:</h4>
          <img
            src="https://raw.githubusercontent.com/Bear29ers/Bear29ers/master/profile-3d-contrib/profile-green-animate.svg"
            alt="contributions"
            className="w-full"
            data-testid="contributions"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
