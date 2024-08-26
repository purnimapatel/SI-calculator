import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[res, setRes]=(useState(0));
  return(
    <>
    
    <div className="container">
    <div>
    {res}
    </div>
    
    <input id = "rate" placeholder="Enter the rate of interest"></input>
    <input id = "principle" placeholder="Enter the principle here"></input>
    <input id = "time" placeholder="Enter the time here"></input>
    <button className='btn2' onClick={()=>calculate}>Decrease</button>
    </div>  
    </>
  )
  function calculate(){
    const rate = document.getElementById("rate");
      const principle = document.getElementById("principle");
      const time = document.getElementById("time");
      const val = rate*principle*time;
      res = setRes(val);  
  }
   

}
  

export default App;
