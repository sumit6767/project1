import React from 'react';
import button from './Button.css'

export default function Button(props){
    return(
        <button type={props.type} className='button'>{props.children}</button>
    )
}