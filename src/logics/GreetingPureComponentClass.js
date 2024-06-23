import React, {PureComponent} from "react";

/*
PureComponent is similar to Component but it skips re-renders for same props and state.
Class components are still supported by React, but we don’t recommend using them in new code.
*/

export default class Greeting extends PureComponent /*React.Component*/ {
  state={
    count:0
  }
  render() {
    console.log("Re-rendered at: "+new Date().toLocaleTimeString())
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>{this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count})}>
          Increment Count
        </button>
      </div>
    );
  }
}