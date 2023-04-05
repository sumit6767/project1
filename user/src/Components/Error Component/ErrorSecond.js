import React from "react";
import './Error.css'
import '../UI/Button.css'
import  ReactDOM from "react-dom";

function ErrorSecond(props){
    const close = true;
    function erroHandler(e){
        props.onErrorSecond(!close)
    }
    const backdrop = 
        <div className="errorfirst">
            <h2>Invalid Input</h2>
            <div>
                <p style={{lineHeight:"6.5rem",fontSize:'1.2rem',margin:"0"}}>Please enter a valid age (0)</p>
                <button className="button" onClick={erroHandler}>Cancel</button>
            </div>
        </div>
    return(
        ReactDOM.createPortal(backdrop,document.getElementById("error-modal"))
    )
}

export default ErrorSecond;