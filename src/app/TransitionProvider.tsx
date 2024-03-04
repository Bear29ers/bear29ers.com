import { AnimatePresence } from 'framer-motion';

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default TransitionProvider;
