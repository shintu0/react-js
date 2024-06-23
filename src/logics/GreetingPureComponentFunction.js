// eslint-disable-next-line no-unused-vars
import React, { memo, useState } from 'react'

export default function GreetingPureComponentFunction(props) {
  const [count,setCount]=useState(0);
  // console.log("Rerendered:"+new Date().toLocaleTimeString());  
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)} >Inc</button>
    </div>
  )
}
//uncomment to see the effect
// export default memo(GreetingPureComponentFunction);