import type { FC } from 'react';
import { useState } from 'react';

import { distance } from '@popmotion/popcorn';
import { motion, useMotionValue, useSpring  } from 'framer-motion-8';

import { ICON_GAP, ICON_SIZE, SKILL_ICONS } from '../../const/languagesAndTools';

import type { SkillIcon } from '../../const/languagesAndTools';
import type { MotionValue } from 'framer-motion-8';

const size = ICON_SIZE;
const gap = ICON_GAP;

type Props = {
  item: SkillIcon;
  active: { row: number; col: number };
  setActive: (active: { row: number; col: number }) => void;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export const Square: FC<Props> = ({ item, active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance({ x: active.col, y: active.row }, { x: colIndex, y: rowIndex });
  const springConfig = {
    stiffness: Math.max(1500 - d * 150, 0),
    damping: 20 + d * 7,
  };
  const dx = useSpring(x, springConfig) as MotionValue<number>;
  const dy = useSpring(y, springConfig) as MotionValue<number>;

  return (
    <motion.div
      className="absolute cursor-pointer"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 2000, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
      data-testid={`square-${rowIndex}-${colIndex}`}>
      <item.component />
    </motion.div>
  );
};

export const LanguagesTools: FC = () => {
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
          height: (size + gap) * 8 - gap,
          perspective: 700,
        }}>
        {SKILL_ICONS.map((row: SkillIcon[], rowIndex: number) =>
          row.map((item: SkillIcon, colIndex: number) => (
            <Square
              item={item}
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
