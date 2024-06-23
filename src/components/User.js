import React, { Component } from 'react'

export default class User extends Component {

  state={
    name:'User'
  }

  // constructor(){
  //   super();
  //   // alert('1. constructor')
  //   console.log("--------Props-----------");
  //   console.log(this.props)
  //   console.log(this.state)
  //   console.log("-------------------");
  // }

  componentDidMount(){
    // alert('2. componentDidMount');
    console.log("--------Props-----------");
    console.log(this.props)
    console.log(this.state)
    console.log("-------------------");
    this.setState({...this.state,name:"Sintu"});
  }

  componentDidUpdate(prevState,nextState){
    // alert('3. componentDidUpdate');
    // console.log(prevState,nextState);
  }
  componentWillUnmount(){
    // alert('4. componentWillUnmount')
  }
  shouldComponentUpdate(){
    // alert('5. shouldComponentUpdate')
    return true;
  }

  render() {
    // alert('6. render');
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}
