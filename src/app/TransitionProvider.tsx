'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="h-screen w-screen bg-gradient-to-b from-blue-50 to-red-100">
        <motion.div
          className="z-40 h-screen w-screen rounded-b-[100px] bg-black"
          animate={{ height: '0vh' }}
          exit={{ height: '100vh' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
