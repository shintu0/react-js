import React, { useEffect, useState } from 'react';


import '../App.css';
import Admin from '../components/Admin';

export default function UseEffect() {

  const [data,setData]=useState(10);
  const [count,setCount]=useState(100);

  useEffect(()=>{
    console.log("count: ",count);
  },[count])
  useEffect(()=>{
    console.log("data: ",data)
  },[data])

  return (
    <div className="App">
      <div>
      <h1>Data: {data}</h1>
      <h1>Count: {count}</h1>
      </div>
      <div>
      <button onClick={()=>setCount(count+1)} >
        Inc Count
      </button>
      <span> </span>
      <button onClick={()=>setData(data+1)} >
        Inc Data
      </button>
      </div>
      <Admin data={data} />
    </div>
  );
}
