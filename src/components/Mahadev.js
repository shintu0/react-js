import { useEffect, useState } from 'react';
import Greet from './Greet';
import User from './User';

function Mahadev() {
  const [bhakti,setBhakti]=useState('');

  useEffect(()=>{
    setTimeout(()=>{
      if(bhakti) setBhakti('');
    },10000);
  },[bhakti])

  return (
    <div >
      <h1> 🕉️ Har Har Mahadev 🕉️</h1>
      {(bhakti)?<h1>🙌🙌🙌</h1>:<User data={'some data'} />}
      <Greet makeBhakti={setBhakti} ></Greet>
      
    </div>
  );
}

export default Mahadev;
