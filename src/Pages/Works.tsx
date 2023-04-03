import React from 'react';
import { GridElementHover } from '../Components/GridElementHover';

function Works() {

  return (
    <div className="Works flex justify-center mt-10">
      <div className="grid grid-cols-4 grid-flow-row gap-2">
        <div className="w-80 h-80 relative">
          <img src=".\w0nyv.jpg" alt="W0NYV-icon" />
          <GridElementHover>
            <p className="text-white sticky top-1/2 left-1/2 text-center">グラフィックスプログラミング</p>
          </GridElementHover>
        </div>
        <div className="w-80 h-80">
          <img src=".\w0nyv.jpg" alt="W0NYV-icon" />
        </div>
        <div className="w-80 h-80">
          <img src=".\w0nyv.jpg" alt="W0NYV-icon" />
        </div>
        <div className="w-80 h-80">
          <img src=".\w0nyv.jpg" alt="W0NYV-icon" />
        </div>
        <div className="w-80 h-80">
          <img src=".\w0nyv.jpg" alt="W0NYV-icon" />
        </div>
        <div className="w-80 h-80">
          <img src=".\w0nyv.jpg" alt="W0NYV-icon" />
        </div>
      </div>
    </div>
  );
}

export default Works;
