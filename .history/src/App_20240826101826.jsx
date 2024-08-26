import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[value, setValue]=(useState(0));
  return(
    <>
    <div className="container">
    <input id = "rate" placeholder="Enter the rate of interest"></input>
    <input id = "principle" placeholder="Enter the principle here"></input>
    </div>
    
     
    </>
    
  )
  
}
  

export default App;
