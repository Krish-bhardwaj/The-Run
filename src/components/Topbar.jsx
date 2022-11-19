import React from 'react'
import './Topbar.css'
import user from '../assets/user.png'
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../pages/address';
import { useGlobalState as getcoin } from '../pages/coin';
const Topbar = (props) => {
    const navigate = useNavigate();
    return (         
        <>
            <div className="topbar">
                <button className='back' onClick={() => navigate(-1)}>BACK</button>
                <div className="coins"><h2>Coins:{getcoin("coin")}</h2></div>
                <div className="user">
                    <img src={user} alt="" />
                    <ul className="dropdown-content">
                        <li><a href="" >{useGlobalState("address")}</a></li>
                        <li><a href="/" >Logout</a></li>

                    </ul>
            </div>

        </div>
        </>
    )
}

export default Topbar