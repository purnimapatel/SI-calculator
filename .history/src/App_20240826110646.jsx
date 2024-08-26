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
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        placeholder="Enter second number"
      />
      <input
        type="number"
        value={principle}
        onChange={(e) => setPrinciple(Number(e.target.value))}
        placeholder="Enter third number"
      />
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        placeholder="Enter third number"
      />
    <button className='btn2' onClick={()=> setRes((rate*principle*time)/100)}>Decrease</button>
    </div>  
    
  )
//   function result(){
   
//     setRate(0);
//     setPrinciple(0);
//     setTime(0);

// }

  
  
 
}
  

export default App;
