'use client'
import  React, { MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Logos() {
  const [clicked, setClickStatus] = useState<boolean>(false);


  const handleClick:MouseEventHandler = () => {
    setClickStatus(!clicked);
  }

  const icons = [
    {
      img: './img/youtube.svg',
      href:'https://www.youtube.com/roytripp',
    },
    {
      img: './img/soundcloud.svg',
      href:'https://soundcloud.com/ronsumusic'
    },
    {
      img: './img/facebook.svg',
      href:'https://facebook.com/rodrigotripp'
    },
    {
      img: './img/instagram.svg',
      href:'https://instagram.com/rdrgtrpp'
    },
    {
      img: './img/linkedin.svg',
      href: 'https://www.linkedin.com/in/rodrigotripp/',
    }
  ];

  const Icons =  icons.map(
    (icon, index) => {
      return (
      <Link
        href={icon.href}
        target="_blank"
        rel="noopener noreferrer"
        key={`${index}-props`}
      >
        <Image src={icon.img} width={'100'} className="icon" alt="rodrigo-tripp " />
      </Link> 
      
      );
    }
  );
  return (
    <div className={ clicked ? 'logos-wrapper changed': 'logos-wrapper'}  >
      <div className="logos-container">
        {Icons}
      </div>
      <div className="btn icon" onClick={handleClick}>
        { !clicked ? '+' : '-'}
      </div>
    </div>
    )
}

export default Logos;