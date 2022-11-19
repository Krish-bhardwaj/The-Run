import React from 'react'
import Topbar from '../components/Topbar';
import './Finish.css'
import {Link, useNavigate } from "react-router-dom";
import increase from '../smartcontract/increase';
import { setGlobalState as setcoin , useGlobalState as getcoin } from '../pages/coin.jsx'
const Finish = () => {
const navigate = useNavigate();

const nav = () =>{
  navigate("/game");
}
const rev = () =>{
  navigate("/dashboard");
  setcoin("coin",100 + 10);

}
  return (
    <>
    <div className="finish">
      <div className="head">
      </div>
      <div className="finish-head"><h1>GAME OVER</h1></div>
      <div className="twobuttons">
      <button onClick={nav} className='restart'>Restart</button>
      <button onClick={rev}className='restart'>Dashboard</button></div>
      <div className="scoreboard">
        <p className="score">SCORE:{1200}</p>
        <p className="coins1">COINS:{10}</p>
      </div>
    </div>
      
    </>

  )
}
export default Finish
