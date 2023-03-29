import React, { useState } from 'react';
import About from './Pages/About';
import Works from './Pages/Works';

function App() {

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
    <div className="App">
      <header className="">
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
}

export default App;
