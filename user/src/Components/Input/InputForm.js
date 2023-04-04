import React,{useState} from "react";
import './InputForm.css'
import Button from "../UI/Button";

export default function InputForm(props){

    const [userName, setUserName] = useState("");
    const [age,setAge] = useState("");
    function submitInputHandler(e){
        e.preventDefault();
        props.onFormSubmit({"userName":userName,"age":age,id:Math.random().toString()})
        setUserName("")
        setAge("")
    }
    function userNameHandler(e){
        setUserName(e.target.value)
    }
    function ageHandler(e){
        setAge(e.target.value+"")
    }
    return(
        <div className={props.errorfirst||props.errorsecond? "form back" :"form" }>
            <form onSubmit={submitInputHandler}>
            <label htmlFor="username">UserName</label>
            <input type="text" id="username" value={userName} onChange={userNameHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" value={age} onChange={ageHandler} />
            <Button type="submit">Add User</Button>
            </form>
        </div>
    )
}