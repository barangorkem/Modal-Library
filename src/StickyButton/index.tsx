import React from 'react';
import '../styles/sticky-button.scss';

interface IStickyButton {
  handleClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

const StickyButton = ({ handleClick, className, children }: IStickyButton) => {
  return (
    <button
      data-testid="sticky-button-test"
      className={`sticky-button bottom-right ${className}`}
      onClick={handleClick}>
      {children}
    </button>
  );
};

export default StickyButton;
