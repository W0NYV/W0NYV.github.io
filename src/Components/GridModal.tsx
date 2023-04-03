type ModalBodyProps = {
  showModal: boolean,
  setShowModal: Function,
  worksId: number,
};

const GridModal: React.FC<ModalBodyProps> = (props) => {

  if(props.showModal) {
    return (
      <div className="absolute inset-0 w-full" onClick={() => props.setShowModal(false)}>
        <div className="m-auto mt-28 w-10/12 h-5/6 bg-slate-400">
          <p>{props.worksId}</p>
          <p>タイトル</p>
          <p>動画か画像</p>
          <p>説明</p>
          <p>リンクとか</p>
        </div>
      </div>
    );
  } else { 
    return null;
  }

};

export default GridModal;