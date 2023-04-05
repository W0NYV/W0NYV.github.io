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

  return (
    <div>
      <header className="flex justify-center mt-10 space-x-8">
        <button onClick={() => setId(0)} className="">
          About
        </button>
        <button onClick={() => setId(1)} className="">
          Works
        </button>
      </header>
      {switchContent(id)}
    </div>
  );
};

export default Header;