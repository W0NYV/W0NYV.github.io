type ModalBodyProps = {
  children: React.ReactNode;
  isModalShowing: boolean;
  setIsModalShowing: Function;
};

const GridModal: React.FC<ModalBodyProps> = (props) => {

  if(props.isModalShowing) {
    return (
      <div className="absolute inset-0 w-full" onClick={() => props.setIsModalShowing(false)}>
        <div className="m-auto mt-28 w-10/12 h-5/6 bg-slate-400">
          {props.children}
        </div>
      </div>
    );
  } else { 
    return null;
  }

};

export default GridModal;