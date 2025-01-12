import type { Color } from '@/types/color';

const getCustomColorClass = (element: string, color: Color, grade: number) => `${element}-custom${color}-${500}`;

export default getCustomColorClass;
