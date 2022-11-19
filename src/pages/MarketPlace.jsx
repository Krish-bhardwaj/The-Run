import React, { useState } from 'react'
import './MarketPlace.css';
import Topbar from '../components/Topbar';
import { Link } from 'react-router-dom';
import Powerup from '../components/Powerup';
import Sprite from '../components/Sprite';
import Characteristics from '../components/Characteristics';
const MarketPlace = () => {
  const [present, setPresent] = useState('powerup');
  let currentCompo;
  if (present === 'powerup') {
    currentCompo = <Powerup />;
  }
  else if (present === 'sprite') {
    currentCompo = <Sprite />;
  }
  else {
    currentCompo =<Characteristics />
  }
const powerupfun =(power)=>{
power.className="active";
setPresent("powerup")
}
const spritefun =(sprite)=>{
  sprite.className="active";
  setPresent("sprite")
  }
  return (
    <>
      <div className="head">
        <Topbar />
      </div>
      <div className='nav'>
        <ul>
          <li><a onClick={powerupfun}>Power-Up</a></li>
          <li><a onClick={spritefun}>Sprite</a></li>
        </ul>
      </div>
      <div className='compont'>
        {currentCompo}
      </div>
    </>
  )
}

export default MarketPlace