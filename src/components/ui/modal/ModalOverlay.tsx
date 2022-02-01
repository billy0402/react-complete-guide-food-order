type ModalOverlayProps = {
  children?: React.ReactNode;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className='modal'>
      <div className='content'>{children}</div>
    </div>
  );
};

export default ModalOverlay;
