import './App.css';
import InputForm from './Components/Input/InputForm';
import React,{useState} from 'react';
import Record from './Components/Display/Record'
import ErrorFirst from './Components/Error Component/ErrorFirst';

function App(props) {
  
  const [input,setInput] = useState([]);
  const [errorfirst,setErrorFirst] = useState(false);
  const [errorsecond,setErrorSecond] = useState(false);

  function submitHandler(enteredInput){
    if(enteredInput.userName.trim().length === 0 || enteredInput.age.trim().length ===0){
      setErrorFirst(!errorfirst);
    }
    else if(+(enteredInput.age.trim()) <0){
      setErrorSecond(!errorsecond)
    }
    else{
      setInput(preState=>{
      preState.unshift(enteredInput);
      return [...preState]
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
    <div className='root'>
      <InputForm onFormSubmit = {submitHandler}/>
      <Record inputRecord = {input}/>
      {
        errorfirst ? <ErrorFirst onErrorFirst={errorFirstHandler}/>: errorsecond ? <ErrorFirst onErrorSecond = {errorSecondHandler}/>:""
      }
    </div>
  );
}

export default App;
