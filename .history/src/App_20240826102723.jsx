import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[res, setRes]=(useState(0));
  return(
    <>
    
    <div className="container">
    {res}
    <input id = "rate" placeholder="Enter the rate of interest"></input>
    <input id = "principle" placeholder="Enter the principle here"></input>
    <input id = "time" placeholder="Enter the time here"></input>
    </div>  
    </>
  )
    const rate = document.getElementById("rate");
    const principle = document.getElementById("principle");
    const time = document.getElementById("time");
res = setRes((rate*principle*time)/100); 
}
  

export default App;
