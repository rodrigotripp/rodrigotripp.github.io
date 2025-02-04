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
        <div>
          <a href='https://www.linkedin.com/in/rodrigotripp/' target='_blank'>
          <img src={me}
            className="App-logo"
            alt="rodrigo-tripp "/>
          </a>
          </div>
        <Name></Name>
        <Logos/>
        <Description></Description>
      </header>
    </div>
  );
}

export default App;
