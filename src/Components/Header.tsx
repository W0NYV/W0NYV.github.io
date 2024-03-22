import React, { useState } from 'react';
import About from '../Pages/About';
import Works from '../Pages/Works';
import Sketches from '../Pages/Sketches';
import Contact from '../Pages/Contact';

const Header: React.FC = () => {

  const [id, setId] = useState<number>(1);

  const switchContent = (id : number) => {
    switch (id) {
      case 0:
        return <About />;
        break;
      case 1:
        return <Works />;
        break;
      case 2:
        return <Sketches />;
        break;
      case 3:
        return <Contact />;
        break;
    }
  }

  const setBorder = (myId: number) => {
    if(myId == id) {
      return "flex-row basis-1/5 lg:basis-1/12 text-center text-black bg-white bg-opacity-60";
    } else {
      return "flex-row basis-1/5 lg:basis-1/12 text-center text-white";
    }
  };

  return (
    <div>
      <header className="flex justify-center mt-10 gap-4">
        <button onClick={() => setId(0)} className={setBorder(0)}>
          About
        </button>
        <button onClick={() => setId(1)} className={setBorder(1)}>
          Works
        </button>
        <button onClick={() => setId(2)} className={setBorder(2)}>
          Experimental
        </button>
        <button onClick={() => setId(3)} className={setBorder(3)}>
          Contact
        </button>
      </header>
      {switchContent(id)}
    </div>
  );
};

export default Header;