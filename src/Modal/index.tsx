import React from 'react';
import '../styles/modal.scss';

const ModalContext = React.createContext({});

interface IModalRoot {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

interface IHeader {
  children?: React.ReactNode;
  className?: string;
}

interface IBody {
  children?: React.ReactNode;
  className?: string;
}

const ModalRoot = ({ isOpen, onClose, children }: IModalRoot) => {
  return (
    <ModalContext.Provider
      value={{
        onClose
      }}>
      {isOpen && (
        <div className="modal-component" data-testid="review-modal-test">
          <div className="overlay" data-testid="review-modal-test-overlay" onClick={onClose}></div>
          <div className="modal-content">{children}</div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

const Header = ({ children, className }: IHeader) => {
  const { onClose } = React.useContext<any>(ModalContext);

  return (
    <>
      <div className={`header ${className}`} data-testid="review-modal-header-test">
        {children}
      </div>
      <i className="close-icon" onClick={onClose}>
        X
      </i>
    </>
  );
};

const Body = ({ children, className }: IBody) => {
  return (
    <div className={`body ${className}`} data-testid="review-modal-body-test">
      {children}
    </div>
  );
};

const Modal = Object.assign(ModalRoot, { Header, Body });

export default Modal;
