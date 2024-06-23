import React, { useRef } from 'react'
import ForwardRef from './ForwardRef';

export default function RefFunc() {
  const inputRef=useRef();
  const forwardRef=useRef();

  const getValue=()=>{
    console.table({...inputRef.current})
  }

  const setValue=()=>{
    inputRef.current.value="1000"
    inputRef.current.style.backgroundColor = 'red';
  }
  const handleForwardRef=function (){
    forwardRef.current.style.color='teal';
    forwardRef.current.style.backgroundColor='yellow';
  }

  return (
    <div>
    <input type="text" ref={inputRef} />
    <button onClick={()=>getValue()} >Check Ref</button>
    <button onClick={()=>setValue()}>Set Ref</button>
    <ForwardRef ref={forwardRef} />
    <button onClick={()=>handleForwardRef()}>Use Forward Ref</button>

  </div>
  )
}
