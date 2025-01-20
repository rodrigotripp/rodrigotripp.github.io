import React from 'react';

import Description from './components/Description';
import Name from './components/Name';
// import Logos from './components/Logos';
import './components/styles/App.scss';


export default function Page() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={'./img/sepia.jpg'}
            className="App-logo"
            alt="rodrigo-tripp "/>
          </div>
        <Name></Name>
        {/* <Logos/> */}
        <Description></Description>
      </header>
    </div>
  );
}