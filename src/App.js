import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  state={
    count:0,
    isShow:true,
    fullName:"Ghassen Nabli",
    bio:"Student in GoMyCode",
  }
  handlShow=()=>{
    this.setState({isShow:!this.state.isShow})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
    increment=()=>{
    this.setState({count:this.state.count+1})
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  componentDidUpdate(){
    console.log("componentDidUpdate")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
    console.log("render")
    return (
      <div className='App'>
        <button onClick={this.handlShow}>{this.state.isShow?"Hide":"Show"}</button>
        {
          this.state.isShow&&
          <div>
            <h1>{this.state.count}</h1>
            <h1>fullName</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
        }
        </div>
    )
  }
}
