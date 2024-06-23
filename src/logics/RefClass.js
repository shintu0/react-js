import React, { Component, createRef } from 'react'

export default class RefClass extends Component {
  inputRef=createRef();
  componentDidMount(){
    console.log(this.inputRef)
  }
  getValue(){
    console.warn(this.inputRef)
  }
  setValue(){
    this.inputRef.current.value="1000";
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getValue()} >Check Ref</button>
        <button onClick={()=>this.setValue()}>Set Ref</button>
      </div>
    )
  }
}
