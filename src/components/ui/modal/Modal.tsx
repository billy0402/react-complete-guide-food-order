import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
