import React, { useEffect, useState } from 'react'
import ListView from './components/ListView';
import Greeting from './logics/GreetingPureComponentClass';
import './App.css';
import GreetingPureComponentFunction from './logics/GreetingPureComponentFunction';
import RefClass from './logics/RefClass';
import RefFunc from './logics/RefFunc';
import HOC from './logics/HOC';

/*
1. controlled component are component controlled via state variables, like input and form fields
2. Uncontrolled components are component not completely controlled by state variables
like controlling behavior using ref
*/

const users = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 28 },
];

export default function App() {
  const [timer,setTimer]=useState(0);

  useEffect(()=>{

    return ()=>{
    setTimeout(()=>{
      setTimer(timer=>timer+1)
    },1000);
    }
  })

  return (
    <div className='App' >

    <div style={{justifyContent:'center', display:'flex'}} >
      <h1>App</h1>
    </div>
    <div style={{margin:10,padding:10}} >
    <ListView data={users} />
    {
      
    }
    </div>
    <h1><u>Pure Component</u></h1>
    <Greeting name={'Aayu'} />
    <div>

    <h1>Timer: {timer}</h1>
    <h2>Functional Component</h2>
    <GreetingPureComponentFunction name={"Abhi"} />
    </div>
    <RefClass />
<h1>Hook Based</h1>
<RefFunc />
<h1>HOC</h1>
<HOC />
    </div>
  )
}
