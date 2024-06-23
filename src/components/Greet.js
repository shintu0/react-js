import React from 'react'

export default function Greet({makeBhakti}) {
  return (
    <div>
      <button style={{width:100,height:30}} onClick={()=>makeBhakti('Har Har Mahadev')} >🙏</button>
    </div>
  )
}
