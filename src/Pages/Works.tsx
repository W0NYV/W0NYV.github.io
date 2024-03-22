import { useState } from "react";
import GridElement from "../Components/GridElement";
import GridModal from '../Components/GridModal';
import WorksInfoArr from '../Data/WorksInfo';

function Works() {

  const [isModalShowing, setIsModalShowing] = useState<boolean>(false);
  const [worksId, setWorksId] = useState<number>(0);

  //任意のidのworksのモーダルウィンドウを表示するぞ！
  const showModal = (id: number) => {
    setIsModalShowing(true);
    setWorksId(id);
  };

  //WorksInfo配列から任意のidの要素をゲトってくる
  const worksComponent = (id: number) => {
    return WorksInfoArr[id].modalElement;
  };

  //WorksInfo配列分だけgrid要素作る
  const gridElements = () => {

    let components: React.ReactNode[] = [];

    for(let i = 0; i < WorksInfoArr.length; i++) {
      components.push(<GridElement id={i} showModal={showModal} pageId={0} />);
    }

    return components;

  };

  return (
    <div className="Works">

      {/* <p className="m-auto text-white text-center mt-10">しっかりめに開発したものたちです。</p> */}

      <div className="mt-10 overflow-auto h-80v">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2 lg:gap-20">
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-8 lg:gap-2"> */}
          {gridElements()}
        </div>
      </div>

      <GridModal isModalShowing={isModalShowing} setIsModalShowing={setIsModalShowing}>
        {worksComponent(worksId)}  
      </GridModal>      

    </div>

  );
}

export default Works;
