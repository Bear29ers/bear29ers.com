'use client';

import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction, FC } from 'react';

import { useMotionValue, motion, useSpring } from 'framer-motion-8';
import { distance } from 'popmotion';

import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

import {
  ICON_GAP_LG,
  ICON_GAP_SM,
  ICON_SIZE_LG,
  ICON_SIZE_SM,
  SKILL_ICONS_LG,
  SKILL_ICONS_MD,
  SKILL_ICONS_SM,
} from '@/common/constants/skillIcons';
import type { SkillIcon, SkillIcons } from '@/common/types/skillIcons';

import type { MotionValue } from 'framer-motion-8';

interface SquareProps {
  item: SkillIcon;
  active: { row: number; col: number };
  setActive: Dispatch<SetStateAction<{ row: number; col: number }>>;
  colIndex: number;
  rowIndex: number;
  numberOfColumns: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
  size: number;
  gap: number;
}

export const Square: FC<SquareProps> = ({
  item,
  active,
  setActive,
  colIndex,
  rowIndex,
  numberOfColumns,
  x,
  y,
  size,
  gap,
}) => {
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
      className="absolute cursor-grab active:cursor-grabbing"
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
  const [active, setActive] = useState<{ row: number; col: number }>({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [iconSize, setIconSize] = useState<number>(ICON_SIZE_LG);
  const [iconGap, setIconGap] = useState<number>(ICON_GAP_LG);
  const [iconList, setIconList] = useState<SkillIcons[]>(SKILL_ICONS_MD);
  const numberOfRows: number = iconList.length;
  const numberOfColumns: number = iconList[0]?.icons.length || 0;

  const isSmall = useMediaQuery('(max-width: 399px)');
  const isMedium = useMediaQuery('(max-width: 699px)');
  const isLarge = useMediaQuery('(max-width: 799px)');

  useEffect(() => {
    // set icon gap value
    if (isSmall) {
      setIconGap(ICON_GAP_SM);
    } else {
      setIconGap(ICON_GAP_LG);
    }

    // set icon size value
    if (isLarge) {
      setIconSize(ICON_SIZE_SM);
    } else {
      setIconSize(ICON_SIZE_LG);
    }

    // set icon list value
    if (isSmall) {
      setIconList(SKILL_ICONS_SM);
    } else if (isMedium) {
      setIconList(SKILL_ICONS_MD);
    } else {
      setIconList(SKILL_ICONS_LG);
    }

    setActive({ row: 0, col: 0 });
  }, [isSmall, isMedium, isLarge]);

  return (
    <div>
      <div style={{ perspective: 1000 }}>
        <motion.div
          transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
          className="size-fit"
          data-testid="skills">
          <motion.div
            className="relative flex"
            style={{
              width: (iconSize + iconGap) * numberOfColumns - iconGap,
              height: (iconSize + iconGap) * numberOfRows - iconGap,
              perspective: 700,
            }}>
            {iconList.map((items: SkillIcons, rowIndex: number) =>
              items.icons.map((item: SkillIcon, colIndex: number) => (
                <Square
                  item={item}
                  active={active}
                  setActive={setActive}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  numberOfColumns={numberOfColumns}
                  x={x}
                  y={y}
                  size={iconSize}
                  gap={iconGap}
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
