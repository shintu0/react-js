import React, { useEffect } from 'react'

export default function Admin({data}) {
  useEffect(()=>{
    console.log("[ADMIN]-DATA")
  },[data])
  return (
    <div>Admin Data:{data}</div>
  )
}
