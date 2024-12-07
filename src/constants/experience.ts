import type { Experience } from '@/types/experience';

// 経歴情報
export const EXPERIENCE_INFO: Experience[] = [
  {
    id: 3,
    startAt: '2023',
    endAt: 'current',
    projects: [
      {
        id: 2,
        startAt: '2024.5',
        endAt: 'current',
        role: 'frontend',
        company: 'gakkenLeap',
        location: 'tokyo',
        tagList: ['HTML', '(S)CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Figma', 'UI', 'UX'],
        description: [0, 1],
        highlightList: [0, 1],
      },
      {
        id: 1,
        startAt: '2023.5',
        endAt: '2024.4',
        role: 'frontend',
        company: 'gakkenLeap',
        location: 'tokyo',
        tagList: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'VueJS', 'NuxtJS', 'Figma', 'UI', 'UX'],
        description: [0, 1, 2],
        highlightList: [0, 1, 2],
      },
    ],
  },
  {
    id: 2,
    startAt: '2020',
    endAt: '2023',
    projects: [
      {
        id: 1,
        startAt: '2020.6',
        endAt: '2023: 4',
        role: 'webdev_designer',
        company: 'emoshu',
        location: 'tokyo',
        tagList: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'XD', 'UI'],
        description: [0, 1, 2],
        highlightList: [0, 1, 2],
      },
    ],
  },
  {
    id: 1,
    startAt: '2016',
    endAt: '2019',
    projects: [
      {
        id: 1,
        startAt: '2016.4',
        endAt: '2019.3',
        role: 'mentor',
        company: 'lifeIsTech',
        location: 'osaka',
        tagList: ['AfterEffects', 'PremierePro', 'Lightroom', 'Photoshop', 'Illustrator', 'HTML', 'CSS'],
        description: [0, 1, 2, 3],
        highlightList: [0, 1, 2],
      },
    ],
  },
];
