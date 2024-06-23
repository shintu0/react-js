import React, { forwardRef } from 'react'

function ForwardRef(props,rcvdRef) {
  return (
    <div ref={rcvdRef} >ForwardRef</div>
  )
}

export default forwardRef(ForwardRef)
