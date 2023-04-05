import React from "react";
import './Record.css'
import Item from "./Item";

const Record = (props)=>{
    return(
        <div className="records">
            {
                props.inputRecord.map(record=>{
                    return <Item key={record.id} collegeName={record.collegeName} userName={record.userName} age={record.age}/>
                })
            }
        </div>
    )
}

export default Record