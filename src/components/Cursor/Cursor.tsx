'use client';

import { useEffect, type FC } from 'react';

import { useMotionValue, useSpring, motion } from 'framer-motion';

const Cursor: FC = () => {
  const cursorSize = 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [manageMouseMove]);

  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className="pointer-events-none fixed z-50 size-4 rounded-full bg-dark"
    />
  );
};

export default Cursor;
