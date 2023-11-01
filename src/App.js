
import { useState } from 'react';
import './App.css';
import { ComponentOne } from './ComponentOne';
import { ComponentTwo } from './ComponentTwo';
import React from 'react';

export const ColorContext = React.createContext();

function App() {

  const [myColor, setMyColor] = useState(true)

  function changeColor(){
    setMyColor((myFirstColor) => !myFirstColor)
  }

  return (
    <div className="App">
      <h1>Click and change color</h1>

    <ColorContext.Provider value={myColor}>
      <button onClick={changeColor}>Click to change</button>
      <ComponentOne/>
      <ComponentTwo/>
    </ColorContext.Provider>
    </div>
  );
}

export default App;
