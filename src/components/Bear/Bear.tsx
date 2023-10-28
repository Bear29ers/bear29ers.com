import type { FC } from 'react';

const Bear: FC = () => {
  return (
    <>
      <div className="bear">
        <div className="bear__ears">
          <div className="bear__ears__left ear" />
          <div className="bear__ears__right ear" />
        </div>
        <div className="bear__body">
          <div className="bear__eyes">
            <div className="bear__eyes--left eye" />
            <div className="bear__eyes--right eye" />
          </div>
          <div className="bear__nose">
            <div className="bear__nose--inner" />
          </div>
        </div>
      </div>
      <div className="shadow" />
    </>
  );
};

export default Bear;
