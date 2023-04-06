import React, { useState } from 'react';
import About from '../Pages/About';
import Works from '../Pages/Works';

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
    }
  }

  const setBorder = (myId: number) => {
    if(myId == id) {
      return "text-white border-b-2";
    } else {
      return "text-white";
    }
  };

  return (
    <div>
      <header className="flex justify-center mt-10 space-x-8">
        <button onClick={() => setId(0)} className={setBorder(0)}>
          About
        </button>
        <button onClick={() => setId(1)} className={setBorder(1)}>
          Works
        </button>
      </header>
      {switchContent(id)}
    </div>
  );
};

export default Header;