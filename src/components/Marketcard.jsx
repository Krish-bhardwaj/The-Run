import React from 'react'
import "./Marketcard.css";
const Marketcard = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default Marketcard