import React from 'react';

import Description from './components/Description';
import Name from './components/Name';
// import Logos from './components/Logos';
import './components/styles/App.css';
import Image from 'next/image';



export default function Page() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Image src={'/sepia.jpg'}
            className="App-logo"
            width={350}
            height={100}
            alt="rodrigo-tripp "/>
          </div>
        <Name></Name>
        {/* <Logos/> */}
        <Description></Description>
      </header>
    </div>
  );
}