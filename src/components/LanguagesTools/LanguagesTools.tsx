import type { FC } from 'react';
import { useState } from 'react';

import { distance } from '@popmotion/popcorn';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

import { lightIcons } from '../../const/languagesAndTools';

import type { MotionValue } from 'framer-motion';
import type { StaticImageData } from 'next/image';

const size = 60;
const gap = 15;

type Props = {
  src: StaticImageData;
  active: { row: number; col: number };
  setActive: (active: { row: number; col: number }) => void;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const FramerImage = motion(Image);

const Square: FC<Props> = ({ src, active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance({ x: active.col, y: active.row }, { x: colIndex, y: rowIndex });
  const springConfig = {
    stiffness: Math.max(1000 - d * 120, 0),
    damping: 20 + d * 3,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <FramerImage
      src={src}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      className="absolute h-[60px] w-[60px] cursor-pointer rounded-2xl"
      style={{
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
      data-testid={`square-${rowIndex}-${colIndex}`}
      alt="icon"
    />
  );
};

const LanguagesTools: FC = () => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
      className="h-full w-full"
      data-testid="languages-tools">
      <motion.div
        className="relative flex"
        style={{
          width: (size + gap) * 7 - gap,
          height: (size + gap) * 7 - gap,
          perspective: 700,
        }}>
        {lightIcons.map((row, rowIndex) =>
          row.map((img, colIndex) => (
            <Square
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={img}
              x={x}
              y={y}
              active={active}
              setActive={setActive}
              rowIndex={rowIndex}
              colIndex={colIndex}
              // eslint-disable-next-line react/no-array-index-key
              key={rowIndex + colIndex}
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default LanguagesTools;
