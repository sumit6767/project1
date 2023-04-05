import React,{useRef} from "react";
import './InputForm.css'
import Button from "../UI/Button";

export default function InputForm(props){

    const inputNameRef = useRef();
    const ageRef = useRef();
    const collegeNameRef = useRef()
    
    function submitInputHandler(e){
        e.preventDefault();
        const userName = inputNameRef.current.value;
        const age = ageRef.current.value
        const collegeName = collegeNameRef.current.value
        props.onFormSubmit({"userName":userName,"age":age,"collegeName":collegeName,id:Math.random().toString()})
       
    }
    return(
        <div className="form">
            <form onSubmit={submitInputHandler}>
            <label htmlFor="username">UserName</label>
            <input ref={inputNameRef} type="text" id="username"/>
            <label htmlFor="age">Age (Years)</label>
            <input ref={ageRef} type="number" id="age"  />
            <label htmlFor="college">College</label>
            <input ref={collegeNameRef} type="text" id="college"  />
            <Button type="submit">Add User</Button>
            </form>
        </div>
    )
}