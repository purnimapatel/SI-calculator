import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[rate, setRate]=(useState(0));
  const[principle, setPrinciple]=(useState(0));
  const[time, setTime]=(useState(0));
  const[res, setRes]=(useState(0));
  return(
    <>
    
    <div className="container">
    <div>
    {res}
    </div>
    
    <input id = "rate" type = "Number" 
    value = {rate} placeholder="Enter the rate of interest"></input>
    <input id = "principle"
    value = {principle} onChange={(e)=>setPrinciple(Number(e.target.value))}  placeholder="Enter the principle here"></input>
    <input id = "time" value = {rate} onChange={(e)=>setTime(Number(e.target.value))} placeholder="Enter the time here"></input>
    <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(Number(e.target.value))}
        placeholder="Enter second number"
      />
      <input
        type="number"
        value={value3}
        onChange={(e) => setValue3(Number(e.target.value))}
        placeholder="Enter third number"
      />
    <button className='btn2' onClick={()=> setRes((rate*principle*time)/100)}>Decrease</button>
    </div>  
    </>
  )
//   function result(){
   
//     setRate(0);
//     setPrinciple(0);
//     setTime(0);

// }

  
  
 
}
  

export default App;
