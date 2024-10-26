import React, { FC, PropsWithChildren, ReactNode, useCallback, useState } from "react";
import './Card.scss';

interface Props extends PropsWithChildren {
  backContent?: ReactNode;
  customClass?: string;
}

const Card: FC<Props> = ({ children, backContent, customClass = '' }) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleFlip = useCallback(() => {
    setFlipped(prev => !prev);
  }, [setFlipped]);

  return (
    <div className={`card-wrapper ${flipped ? 'flipped' : ''} ${customClass}`} onClick={handleFlip}>
      {backContent && (
        <>
          <div className="face card-front">{children}</div>
          <div className="face card-back">{backContent}</div>
        </>
      )}
      {backContent === undefined && children}
    </div>
  ); 
};

export default Card;
