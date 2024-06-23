import React, { useState } from 'react'

//component takes argument as component and return a component

export default function HOC() {
  return (
    <div>
      <h1>HOC</h1>
      <ControlCounterHOC Counter={Counter} >
        <Counter />
      </ControlCounterHOC>
    </div>
  )
}

const Counter=function () {
  const [count,setCount]=useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)} >Inc</button>
    </div>
  )
}

const ControlCounterHOC=(props)=>{

  return (
    <div>
      <props.Counter />
      {props.children}
    </div>
  );
}