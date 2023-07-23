import type { FC } from 'react';
import { useState } from 'react';

import { distance } from '@popmotion/popcorn';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import type { MotionValue } from 'framer-motion';

const grid = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];
const size = 60;
const gap = 10;

type Props = {
  active: { row: number; col: number };
  setActive: (active: { row: number; col: number }) => void;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const Square: FC<Props> = ({ active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance({ x: active.col, y: active.row }, { x: colIndex, y: rowIndex });
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      className="absolute h-[60px] w-[60px] rounded-2xl border-2 border-dark"
      style={{
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
      data-testid={`square-${rowIndex}-${colIndex}`}
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
          width: (size + gap) * 4 - gap,
          height: (size + gap) * 4 - gap,
          perspective: 500,
        }}>
        {grid.map((row, rowIndex) =>
          row.map((_item, colIndex) => (
            <Square
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
