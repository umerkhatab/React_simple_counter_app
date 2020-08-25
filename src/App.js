import React, {useState} from 'react';
import Message from './message.js';
import './App.css';
export default function App() {

  let [count, setCount] = useState(0)
  let [isMorning,setMorning] = useState(true)
  return (

    
    <div className={`box ${isMorning ? 'daylight' : ''}`}>
      <h1> Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count}/>
      <br />
      <button onClick={
        ()=> setCount(count + 1)
        }>Update counter</button>

        <button onClick={()=>setMorning(!isMorning)
        }>Update day

        </button>
    </div>
  );
}