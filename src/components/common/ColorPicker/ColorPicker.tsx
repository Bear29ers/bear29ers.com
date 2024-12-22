'use client';

import { useState, type FC } from 'react';

import { motion } from 'framer-motion';

import { COLORS } from '@/constants/colors';

const ColorPicker: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('Red');

  // colors except selectedColor
  const availableColors: string[] = COLORS.filter((color) => color !== selectedColor);

  // 4つの色を90度の範囲に均等に配置するため、各色の角度を計算
  const calculatePosition = (index: number): { x: number; y: number } => {
    // 全体の角度範囲 90度を3等分して4点を作る
    // 0度からスタートして、90度の範囲を3で割った角度（30度）ずつ増やす
    const startAngleDeg = -90;
    const totalAngleDeg = 90;
    const step = totalAngleDeg / 3;
    const angle = startAngleDeg + index * step;

    // 80pxの半径で円周上の位置を計算
    const radius = 70;
    const radian = (angle * Math.PI) / 180;

    // x, y座標を計算（右上に配置するため、xは正、yは負の値になる）
    const x = radius * Math.cos(radian) - 14; // 14は円のサイズの半径
    const y = radius * Math.sin(radian) - 14;

    return { x, y };
  };

  const getColorVariants = (i: number) => {
    const position = calculatePosition(i);
    return {
      initial: { x: '-50%', y: '-50%' },
      animate: (j: number) => ({
        x: position.x,
        y: position.y,
        transition: {
          ease: [0.16, 1, 0.3, 1],
          duration: 0.6,
          delay: j * 0.09,
        },
      }),
    };
  };

  const handleClickColor = (color: string) => {
    setSelectedColor(color);
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        type="button"
        className={`relative z-50 size-10 rounded-full border-4 border-white flex-center bg-custom${selectedColor}-500`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {availableColors.slice(0, 4).map((color: string, index: number) => {
        const customColorClass = `bg-custom${color}-500`;
        return (
          <motion.button
            type="button"
            key={color}
            className={`absolute left-1/2 top-1/2 z-40 size-7 rounded-full border-4 border-white transition-opacity flex-center hover:opacity-80 ${customColorClass}`}
            variants={getColorVariants(index)}
            initial="initial"
            custom={index}
            animate={isOpen ? 'animate' : 'initial'}
            onClick={() => handleClickColor(color)}
          />
        );
      })}
    </div>
  );
};

export default ColorPicker;
