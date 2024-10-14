import { useRef, type Dispatch, type FC, type SetStateAction, useEffect } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<Props> = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 z-60 h-screen w-full bg-black/65">
          <div
            ref={modalRef}
            className="relative left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 overflow-auto">
            <div className="bg-white p-4">モーダルの中身をここに書く</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
