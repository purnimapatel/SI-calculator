import './App.css';
import { useState } from 'react';

function App() {
  const[rate, setRate]=(useState(''));
  const[principle, setPrinciple]=(useState());
  const[time, setTime]=(useState(''));
  const[res, setRes]=(useState(0));
  return(
    
    <div className="container">
    <div className="container1">
    <div className="result">
    {res}
    </div>
    
    
    <input
        type="number"
        id = "field"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        placeholder="Enter rate of SI"
      />
      <input
        type="number"
        id="field"
        value={principle}
        onChange={(e) => setPrinciple(Number(e.target.value))}
        placeholder="Enter principle of SI"
      />
      <input
        type="number"
        id = "field"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        placeholder="Enter time of SI"
      />
    <button className='btn' onClick={result}>Calculate Interest</button>
    </div>  
    </div>
    
  )
  function result(){
   
    setRate('');
    setPrinciple('');
    setTime('');
    setRes((rate*principle*time)/100);

}

  
  
 
}
  

export default App;
