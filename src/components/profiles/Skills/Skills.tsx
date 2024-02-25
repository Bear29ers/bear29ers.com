'use client';

import { useState } from 'react';
import type { Dispatch, SetStateAction, FC } from 'react';

import { useMotionValue, motion, useSpring } from 'framer-motion-8';
import { distance } from 'popmotion';

import { ICON_GAP_PC, ICON_SIZE_PC, SKILL_ICONS_PC } from '@/common/constants/skillIcons';
import type { SkillIcon, SkillIcons } from '@/common/types/skillIcons';

import type { MotionValue } from 'framer-motion-8';

const size: number = ICON_SIZE_PC;
const gap: number = ICON_GAP_PC;
const numberOfRows: number = SKILL_ICONS_PC.length;
const numberOfColumns: number = SKILL_ICONS_PC[0]?.icons.length || 0;

interface SquareProps {
  item: SkillIcon;
  active: { row: number; col: number };
  setActive: Dispatch<SetStateAction<{ row: number; col: number }>>;
  colIndex: number;
  rowIndex: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export const Square: FC<SquareProps> = ({ item, active, setActive, colIndex, rowIndex, x, y }) => {
  const isDragging = rowIndex === active.row && colIndex === active.col;
  const d = distance({ x: active.col, y: active.row }, { x: colIndex, y: rowIndex });
  const springConfig = {
    stiffness: Math.max(1800 - d * 150, 0),
    damping: 20 + d * numberOfColumns,
  };
  const dx = useSpring(x, springConfig) as MotionValue<number>;
  const dy = useSpring(y, springConfig) as MotionValue<number>;

  return (
    <motion.div
      className="absolute cursor-pointer"
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
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

const Skills: FC = () => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">🛠️ Skills and Tools</h3>
      <div style={{ perspective: 1000 }}>
        <motion.div
          transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
          className="size-full"
          data-testid="skills">
          <motion.div
            className="relative flex"
            style={{
              width: (size + gap) * numberOfColumns - gap,
              height: (size + gap) * numberOfRows - gap,
              perspective: 700,
            }}>
            {SKILL_ICONS_PC.map((items: SkillIcons, rowIndex: number) =>
              items.icons.map((item: SkillIcon, colIndex: number) => (
                <Square
                  item={item}
                  active={active}
                  setActive={setActive}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  x={x}
                  y={y}
                  key={`${items.row}-${item.column}`}
                />
              ))
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
