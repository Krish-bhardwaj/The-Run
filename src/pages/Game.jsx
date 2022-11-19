import React, { useEffect, useState } from 'react'
import './Game.css'
import { Redirect, useNavigate } from 'react-router-dom'
// import { useRouter } from 'next/router';
import Topbar from '../components/Topbar'
// import {useNavigate} from 'react-router-dom';
const Game = () => {
  const navigate = useNavigate()
  const [left,setLeft] = useState(3);

  var timer;
  useEffect(()=>{
    timer = setInterval(()=>{
      setLeft(left-1);
      if(left==1){
        navigate('/play')
        clearInterval(timer)
        // setLeft(1); 
      }
    },1000)

    return()=> clearInterval(timer);
  });
  return (
    <>    
    <div className="game-loading">
    <div className="counter"><h1 className='countervalue'>{left}</h1></div>
    <div className="powerups-bottombar">
      <p>2x Speed</p>
      <p>2x Jump</p>
      <p>2x Health</p>
    </div>
    </div>
    </>
  )
}

export default Game