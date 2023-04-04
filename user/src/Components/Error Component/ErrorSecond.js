import React from "react";
import './Error.css'
import '../UI/Button.css'

function ErrorFirst(props){
    const close = true;
    function erroHandler(e){
        props.onErrorSecond(!close)
    }
    return(
        <>
        {
        <div className="errorfirst">
            <h2>Invalid Input</h2>
            <div>
                <p style={{lineHeight:"6.5rem",fontSize:'1.2rem'}}>Please enter a valid age (0)</p>
                <button className="button" onClick={erroHandler}>Cancel</button>
            </div>
        </div>
        }
        </>
    )
}

export default ErrorSecond;