import  React, { useState } from 'react';

import youtube from '../img/youtube.svg';
import soundcloud from '../img/soundcloud.svg';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import linkedin from '../img/linkedin.svg';

function Logos() {
  const [clicked, setClickStatus] = useState(false);


  function handleClick(e) {
    e.preventDefault();
    setClickStatus(!clicked)
  }

  let icons = [
    {
      img: youtube,
      href:'https://www.youtube.com/roytripp',
    },
    {
      img: soundcloud,
      href:'https://soundcloud.com/ronsumusic'
    },
    {
      img: facebook,
      href:'https://facebook.com/rodrigotripp'
    },
    {
      img: instagram,
      href:'https://instagram.com/rdrgtrpp'
    },
    {
      img: linkedin,
      href: 'https://www.linkedin.com/in/rodrigotripp/',
    }
  ];

  let Icons =  icons.map(
    (icon, index) => {
      return (
      <a
        href={icon.href}
        target="_blank"
        rel="noopener noreferrer"
        key={`${index}-props`}
      >
        <img src={icon.img} className="icon" alt="rodrigo-tripp " />
      </a> 
      );
    }
  );
  return (
    <div className={ clicked ? 'logos-wrapper changed': 'logos-wrapper'}  >
      <div className="logos-container">
        {Icons}
      </div>
      <div className="btn icon" onClick={handleClick}>
        +
      </div>
    </div>
    )
}

export default Logos;