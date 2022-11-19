import React from 'react';
import "./Dashboard.css";
import Card from "../components/Card";
import Topbar from '../components/Topbar';
import {Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Dashboard = (props) => {
    return (
        <>
            <div className="dashboard">
                <div className="head">
                    <Topbar/>
                </div>
                <div className="card-dashboard">
                    <Card />
                </div>
                <div className="buttons">
                <Link to="/marketplace">
                    <button>MARKET</button>
                    </Link>
                    <Link to="/game">
                    <button >PLAY</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
 
export default Dashboard
