import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

type ModalProps = {
  children?: React.ReactNode;
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = ({ children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
