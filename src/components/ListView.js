import React from 'react'
import { v4 as uuid } from 'uuid';

export default function ListView({data}) {
  return (
    <div>
      {data.map((ele)=>(
        <div style={{justifyContent:'space-between', display:'flex'}} key={uuid()} >
          {Object.keys(ele).map(key=>(<div key={uuid()}>{ele[key]}</div>))}
        </div>
      ))}
    </div>
  )
}
