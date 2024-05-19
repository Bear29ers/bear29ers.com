import type { Experience } from '@/common/types/experience';

// 経歴情報
export const EXPERIENCE_INFO: Experience[] = [
  {
    id: 1,
    startAt: '2023',
    endAt: 'current',
    projects: [
      {
        id: 1,
        startAt: '2024.5',
        endAt: 'current',
        role: 'Frontend Developer',
        company: 'Gakken LEAP Co.,Ltd',
        location: 'Tokyo, Japan',
        tagList: ['HTML', '(S)CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Figma', 'UI', 'UX'],
        description:
          'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
        highlightList: ['tennant-theming for an existing component library', 'Introduced Designed Tokens'],
      },
      {
        id: 2,
        startAt: '2023.5',
        endAt: '2024.4',
        role: 'Frontend Developer',
        company: 'Gakken LEAP Co.,Ltd',
        location: 'Tokyo, Japan',
        tagList: ['CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'VueJS', 'NuxtJS', 'Figma', 'UI'],
        description:
          'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
        highlightList: ['tennant-theming for an existing component library', 'Introduced Designed Tokens'],
      },
    ],
  },
];
