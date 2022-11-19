import React from 'react'
import './Spriteimage.css'
import dino from '../assets/dino.png';
const Spriteimage = (props) => {
  return (
    <div className="card">
            <div className="card-body">
                <img className='dinowhite' src={props.img}/>
            </div>
        </div>
  )
}

export default Spriteimage