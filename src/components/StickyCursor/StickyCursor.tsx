'use client';

import { useEffect } from 'react';
import type { RefObject, FC } from 'react';

import { useMotionValue, useSpring, motion } from 'framer-motion';

interface Props {
  stickyElement: RefObject<HTMLDivElement | undefined>;
}

const StickyCursor: FC<Props> = ({ stickyElement }) => {
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
    <div>
      <motion.div
        style={{ left: smoothMouse.x, top: smoothMouse.y }}
        className="pointer-events-none fixed z-50 size-[15px] rounded-full bg-dark"
      />
    </div>
  );
};

export default StickyCursor;
