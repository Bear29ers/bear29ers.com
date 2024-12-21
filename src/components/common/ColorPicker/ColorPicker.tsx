'use client';

import { useState, type FC } from 'react';

const ColorPicker: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('Red');

  const colors = ['Red', 'Yellow', 'Green', 'Cyan', 'Violet'];

  const availableColors: string[] = colors.filter((color) => color !== selectedColor);

  // 4つの色を90度の範囲に均等に配置するため、各色の角度を計算
  const calculatePosition = (index: number) => {
    // 全体の角度範囲 90度を3等分して4点を作る
    // 0度からスタートして、90度の範囲を3で割った角度（30度）ずつ増やす
    const totalAngleDeg = 90;
    const step = totalAngleDeg / 3;
    const angle = index * step;

    // 80pxの半径で円周上の位置を計算
    const radius = 70;
    const radian = (angle * Math.PI) / 180;

    // x, y座標を計算（右上に配置するため、xは正、yは負の値になる）
    const x = radius * Math.cos(radian);
    const y = -radius * Math.sin(radian);

    return { x, y };
  };

  const handleClickColor = (color: string) => {
    setSelectedColor(color);
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        type="button"
        className={`size-10 rounded-full border-4 border-white flex-center bg-custom${selectedColor}-500`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen &&
        availableColors.slice(0, 4).map((color: string, index: number) => {
          const pos = calculatePosition(index);
          return (
            <button
              type="button"
              key={color}
              className={`absolute left-1/2 top-1/2 size-7 rounded-full border-4 border-white transition-opacity flex-center hover:opacity-80 bg-custom${color}-500`}
              style={{
                transform: `
                translate(${pos.x}px, ${pos.y}px) 
                translate(-50%, -50%)
              `,
              }}
              onClick={() => handleClickColor(color)}
            />
          );
        })}
    </div>
  );
};

export default ColorPicker;
