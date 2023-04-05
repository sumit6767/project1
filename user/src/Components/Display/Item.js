import React from "react";
import './Record.css'

export default function Item(props){
    return(
        <div className="item">
            <p>{`${props.userName} (${props.age}) ${props.collegeName}`}</p>
        </div>
    )
}