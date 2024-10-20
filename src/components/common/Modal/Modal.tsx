import { useRef, useEffect } from 'react';
import type { ReactNode, Dispatch, FC, SetStateAction } from 'react';

import { useRouter } from 'next/navigation';

import useModalScrollLock from '@/hooks/useModalScrollLock/useModalScrollLock';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal: FC<Props> = ({ isOpen, setIsOpen, children }) => {
  const router = useRouter();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
        router.back();
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, setIsOpen, router]);

  useModalScrollLock(isOpen);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-60 h-screen w-full bg-black/65">
          <div
            ref={modalRef}
            className="relative left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 overflow-auto">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
