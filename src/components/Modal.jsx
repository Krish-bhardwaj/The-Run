import React from 'react'
import './Modal.css';
import { useNavigate } from 'react-router-dom';

function Modal({ setOpenModal,title1,body1,Im1 }) {
  const navigate = useNavigate();
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className='divide'>
        <div className='leftdiv'>
            <img className='booster' src={Im1} alt="" />
        </div>
        <div className='rightdiv' >
        <div className="title">
          <h1>{title1}</h1>
        </div>
        <div className="body">
          <p>{body1}</p>
        </div>
        <div className="footer">
          <button  onClick={() => navigate("/dashboard")}>Buy Now</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;