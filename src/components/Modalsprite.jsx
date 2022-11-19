import React from 'react'
import './Modelsprite.css';
import { useState } from 'react';
import {setGlobalState as healthset} from '../pages/health.jsx'
import upgradeProp from '../smartcontract/upgradeProp';
function Modalsprite({ setOpenModal,title1,health,speed,jump}) {
   const [health1, setHealth1] = useState(health);
   const [speed1, setSpeed1] = useState(speed);
   const [jump1, setJump1] = useState(jump);
   const [im,setIm]=useState("");
    const Progress = ({ done }) => {
        const [style, setStyle] = React.useState({});
    
        setTimeout(() => {
          const newStyle = {
            opacity: 1,
            width: `${done}%`
          }
    
          setStyle(newStyle);
        }, 200);
    
        return (
          <div className="progress">
            <div className="progress-done" style={style}>
              {done}%
            </div>
          </div>
        )
      }
      const incHealth=()=>{
        if(health1<100){
          let v = health1 +20;
            setHealth1(v);
            // 
            healthset("health",40)
            upgradeProp(0,2,2)
        }
    }
    const incSpeed=()=>{
        if(speed1<100){
            let x =speed1+20;
            setSpeed1(x);
        }
    }
    const incJump=()=>{
        if(jump1<100){
            let y=jump1+20;
            setJump1(y);
        }
    }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
              setIm("");
            }}
          >
            X
          </button>
        </div>
        <div className='divide'>
        <div className='leftdiv'>
            <img className='booster' src="https://res.cloudinary.com/rohangotwal/image/upload/v1668677235/Blog/dino_j81o8g.png" alt="" />
        </div>
        <div className='rightdiv' >
        <div className="title">
          <h1>{title1}</h1>
        </div>
        <div className="body">
          <div className="progresses">
          <div className="sub-progress">
            <h4 className='health'>Health</h4>
            <Progress  done={health1} /><button onClick={incHealth}>+</button>
          </div>
          <div className="sub-progress">
            <h4 className='speed'>Speed</h4>
            <Progress  done={speed1} /><button onClick={incSpeed}>+</button>
          </div>
          <div className="sub-progress">
            <h4  className='jump'>Jump</h4>
            <Progress done={jump1} /><button onClick={incJump}>+</button>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Modalsprite;