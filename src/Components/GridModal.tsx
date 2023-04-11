type ModalBodyProps = {
  children: React.ReactNode;
  isModalShowing: boolean;
  setIsModalShowing: Function;
};

const GridModal: React.FC<ModalBodyProps> = (props) => {

  if(props.isModalShowing) {
    return (
      <div className="absolute inset-0 w-full" onClick={() => props.setIsModalShowing(false)}>
        <div className="m-auto mt-20 w-10/12 lg:w-4/6 h-2/3 lg:h-5/6 bg-black bg-opacity-70 overflow-auto">
        <img width={48} src="./icons8-close.svg" alt="close modal window" className="ml-auto" />
          {props.children}
        </div>
      </div>
    );
  } else { 
    return null;
  }

};

export default GridModal;