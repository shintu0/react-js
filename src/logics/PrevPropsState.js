import React, { useEffect, useRef, useState } from 'react'

export default function PrevPropsState(props) {
  const prevVal=useRef();
  const [count,setCount]=useState(0);
  const [prevStateVal,setPreStateVal]=useState(100);
  useEffect(()=>{
    prevVal.current=props.count;
  },)
  return (
    <div>
      <h1>Props</h1>
      <h2>Prev Props: {prevVal.current}</h2>
      <h2>Current Props: {prevVal.current}</h2>
      <h1>State</h1>
      <h2>Prev State: {prevStateVal}</h2>
      <h2>Current State: {count}</h2>
      <button onClick={()=> setCount((prevStateValue)=>{
          setPreStateVal(prevStateValue);
          return prevStateValue+1;
        }) }>Inc</button>
    </div>
  )
}
