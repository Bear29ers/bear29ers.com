import type { Experience } from '@/common/types/experience';

// 経歴情報
export const EXPERIENCE_INFO: Experience[] = [
  {
    id: 2,
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
        description: [
          'I joined an existing service aimed at elementary and junior high school students. I am in charge of development with another backend engineer, and we are mainly involved in maintenance and operation while also working to improve the service.',
          'Current issues include the fact that the foundation for frontend testing has not been established and package versions are out of date.',
        ],
        highlightList: ['Upgrading Next.js from 12 to 14', 'The foundation of frontend testing'],
      },
      {
        id: 2,
        startAt: '2023.5',
        endAt: '2024.4',
        role: 'Frontend Developer',
        company: 'Gakken LEAP Co.,Ltd',
        location: 'Tokyo, Japan',
        tagList: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'VueJS', 'NuxtJS', 'Figma', 'UI', 'UX'],
        description: [
          'Because of my background, I was very interested in the education business, so I decided to put myself in an environment where I could develop educational services. Furthermore, I chose a company where I could work as a front-end engineer in order to further develop my field of expertise.',
          'I was in charge of front-end development of a reskilling service for adults, mainly using Vue.js and Nuxt.js, and improved the UI/UX while communicating with designers.',
          'In addition, by repeatedly researching and verifying the development using Nuxt.js, which has few reference materials, I was able to acquire front-end skills rapidly in a short period of time.',
        ],
        highlightList: [
          'Creating a proxy in Nuxt.js',
          'Learning Server-Side Rendering',
          'Communicating with designers to improve UI/UX',
        ],
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
        role: 'Web Developer & Designer',
        company: 'EMoshU, Inc.',
        location: 'Tokyo, Japan',
        tagList: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'XD', 'UI'],
        description: [
          'When I joined the company, there were no web-related jobs, so he started by helping with iOS development directly under the CTO. At that time, there were two directors and one intern, and the office was a room in an old apartment.',
          "While working on client projects, I also contributed greatly to the company's internal business, and experienced the creation of a new blog site, the development of internal tools, and the launch and release of a new application. In addition to my work as an engineer, I have experience in a wide range of tasks, including the development of internal communication tools and documents, planning events and hosting study sessions, supporting interns, and managing internal projects.",
          "The company culture was such that each employee's opinion is easily heard, so I often gave my own opinion on improvements to the company's website or new feature of the application, and after discussion, it was actually decided by the company, and I was able to proceed with tasks with a strong sense of ownership in any situation.",
        ],
        highlightList: [
          'Using Laravel to create a CMS',
          'Learning GSAP to animate elements',
          'Creating UI design with Adobe XD',
        ],
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
        role: 'Mentor, Internship',
        company: 'Life is Tech, Inc.',
        location: 'Osaka, Japan',
        tagList: ['AfterEffects', 'PremierePro', 'Lightroom', 'Photoshop', 'Illustrator', 'HTML', 'CSS'],
        description: [
          'Sympathizing with the desire to create new opportunities for junior and senior high school students, I participated as a mentor and was mainly in charge of the video editing course.',
          'In order to provide junior and senior high school students with an opportunity to experience IT technology, I participated in IT camp events held at universities all over Japan as a mentor in various places such as Tokyo and Fukuoka, in addition to camps in Kansai, where I am based.',
          'In addition to being a mentor, I also participated in some of the events as a photographer, taking pictures of the students having fun and livening up the entire events.',
          'Because each student has a different personality, enthusiasm, and skill set, I learned a lot during my internship about how to put together a curriculum and communicate with each student.',
        ],
        highlightList: [
          'Improving video editing skills',
          'Designing & Photography',
          'Creating materials with Ps and Ai',
        ],
      },
    ],
  },
];
