import React from 'react';
import me from './img/IMG_0721.jpg';
import './App.scss';
import Description from './Components/Description';
import Name from './Components/Name';
import Logos from './Components/Logos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} className="App-logo" alt="rodrigo-tripp " />
        <Name></Name>
        <Logos></Logos>
        <Description></Description>
      </header>
    </div>
  );
}

export default App;
