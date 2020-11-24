import React from 'react';
import me from './img/sepia.jpg';
import './App.scss';
import Description from './Components/Description';
import Name from './Components/Name';
import Logos from './Components/Logos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container"><img src={me} className="App-logo" alt="rodrigo-tripp " /></div>
        <Name></Name>
        <Logos></Logos>
        <Description></Description>
      </header>
    </div>
  );
}

export default App;
