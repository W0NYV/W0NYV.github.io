import { useState } from "react";
import GridElement from "../Components/GridElement";
import GridModal from '../Components/GridModal';
import SketchesInfoArr from "../Data/SketchesInfo";

function Sketches() {

  const [isModalShowing, setIsModalShowing] = useState<boolean>(false);
  const [sketchesId, setsketchesId] = useState<number>(0);

  const showModal = (id: number) => {
    setIsModalShowing(true);
    setsketchesId(id);
  };

  const sketchesComponent = (id: number) => {
    return SketchesInfoArr[id].modalElement;
  };

  const gridElements = () => {

    let components: React.ReactNode[] = [];

    for(let i = 0; i < SketchesInfoArr.length; i++) {
      components.push(<GridElement id={i} showModal={showModal} pageId={1} />);
    }

    return components;

  };

  return (
    <div className="Sketches">

      {/* <p className="m-auto text-white text-center mt-10">ゆるめに開発、制作したものたちです。</p> */}

      <div className="mt-10 overflow-auto h-80v">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2 lg:gap-10">
          {gridElements()}
        </div>
      </div>

      <GridModal isModalShowing={isModalShowing} setIsModalShowing={setIsModalShowing}>
        {sketchesComponent(sketchesId)}  
      </GridModal>      

    </div>

  );
}

export default Sketches;
