import React from 'react';
import me from './img/me_marimekko.jpeg';
import './App.scss';
import Description from './Components/Description';
import Name from './Components/Name';
import Logos from './Components/Logos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={me}
            className="App-logo"
            alt="rodrigo-tripp "/>
          </div>
        <Name></Name>
        <Logos/>
        <Description></Description>
      </header>
    </div>
  );
}

export default App;
