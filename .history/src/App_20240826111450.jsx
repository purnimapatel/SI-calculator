import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[rate, setRate]=(useState());
  const[principle, setPrinciple]=(useState());
  const[time, setTime]=(useState());
  const[res, setRes]=(useState());
  return(
    
    
    <div className="container">
    <div>
    {res}
    </div>
    
    
    <input
        type="number"
        id = "field"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        placeholder="Enter second number"
      />
      <input
        type="number"
        id="field"
        value={principle}
        onChange={(e) => setPrinciple(Number(e.target.value))}
        placeholder="Enter third number"
      />
      <input
        type="number"
        id = "field"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        placeholder="Enter third number"
      />
    <button className='btn2' onClick={result}>Decrease</button>
    </div>  
    
  )
  function result(){
   
    setRate(0);
    setPrinciple(0);
    setTime(0);
    setRes((rate*principle*time)/100)

}

  
  
 
}
  

export default App;
