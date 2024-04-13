'use client';

import { useEffect, useState } from 'react';
import type { RefObject, FC } from 'react';

import { useMotionValue, useSpring, motion } from 'framer-motion';

interface Props {
  stickyElement: RefObject<HTMLDivElement>;
}

const StickyCursor: FC<Props> = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorSize = isHovered ? 60 : 15;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } = stickyElement.current.getBoundingClientRect();

    // center position of the stickyElement
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      // distance between the mouse pointer and the center of the custom cursor and
      const distance = { x: clientX - center.x, y: clientY - center.y };

      // move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      // move custom cursor to center of stickyElement
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = (_: MouseEvent) => {
    setIsHovered(true);
  };

  const manageMouseLeave = (_: MouseEvent) => {
    setIsHovered(false);
  };

  useEffect(() => {
    stickyElement.current?.addEventListener('mouseenter', manageMouseOver);
    stickyElement.current?.addEventListener('mouseleave', manageMouseLeave);
    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      stickyElement.current?.removeEventListener('mouseenter', manageMouseOver);
      stickyElement.current?.removeEventListener('mouseleave', manageMouseLeave);
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [isHovered]);

  return (
    <div>
      <motion.div
        style={{ left: smoothMouse.x, top: smoothMouse.y }}
        animate={{ width: cursorSize, height: cursorSize }}
        className="pointer-events-none fixed size-[15px] rounded-full bg-dark"
      />
    </div>
  );
};

export default StickyCursor;
