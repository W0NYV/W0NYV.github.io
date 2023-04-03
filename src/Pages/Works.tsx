import { useState } from "react";
import { GridElementHover } from '../Components/GridElementHover';
import GridModal from '../Components/GridModal';

function Works() {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [worksId, setWorksId] = useState<number>(0);

  const setModal = (id: number) => {
    setShowModal(true);
    setWorksId(id);
  };

  return (
    <div className="Works">

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4 grid-flow-row gap-2">

          <div className="w-80 h-80 relative" onClick={() => setModal(0)}>
            <img src=".\w0nyv.jpg" alt="W0NYV-icon" />
            <GridElementHover>
              <p className="text-white sticky top-1/2 left-1/2 text-center">グラフィックスプログラミング</p>
            </GridElementHover>
          </div>

        </div>
      </div>

      <GridModal showModal={showModal} setShowModal={setShowModal} worksId={worksId} />

    </div>

  );
}

export default Works;
