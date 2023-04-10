type ModalTitleProps = {
  children: React.ReactNode;
};

const ModalTitle: React.FC<ModalTitleProps> = (props) => {
  return (
    <div className="m-auto">
      <p className="text-2xl text-white text-center">
        {props.children}
      </p>
    </div>
  );
};

export default ModalTitle;