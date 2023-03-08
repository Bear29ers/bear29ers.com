type ImageItem = {
  id: number;
};

const imagePath = '/images/';
const imageExtension = '.png';

export const imageList: ImageItem[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];

export const createPublicImagePath = (fileName: string) => {
  return `${imagePath}${fileName}${imageExtension}`;
};
