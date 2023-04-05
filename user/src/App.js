import './App.css';
import InputForm from './Components/Input/InputForm';
import React,{useState} from 'react';
import Record from './Components/Display/Record'
import './Components/Error Component/Error.css'
import ErrorFirst from './Components/Error Component/ErrorFirst';
import ErrorSecond from './Components/Error Component/ErrorSecond';

function App(props) {
  
  const [input,setInput] = useState([]);
  const [errorfirst,setErrorFirst] = useState(false);
  const [errorsecond,setErrorSecond] = useState(false);
  console.log("repeated")
  function submitHandler(enteredInput){
    if(enteredInput.userName.trim().length === 0 || enteredInput.age.trim().length ===0){
      setErrorFirst(!errorfirst);
    }
    else if(+(enteredInput.age.trim()) <0){
      setErrorSecond(!errorsecond)
    }
    else{
      setInput(preState=>{
      return [enteredInput,...preState]
    })
    }
  }
  function errorFirstHandler(close){
    setErrorFirst(close)
  }
  function errorSecondHandler(close){
    setErrorSecond(close)
  }
  return (
    <div className={"class"}>
      <InputForm onFormSubmit = {submitHandler} errorfirst={errorfirst} errorsecond={errorsecond}/>
      <Record inputRecord = {input}/>
      {
        errorfirst ? <ErrorFirst onErrorFirst={errorFirstHandler}/>: errorsecond ? <ErrorSecond onErrorSecond = {errorSecondHandler}/>:""
      }
    </div>
  );
}

export default App;
