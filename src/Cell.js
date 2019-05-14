import React, { Component } from 'react';


export default class Cell extends Component {

  constructor(props) {
    super(props) 
    console.log("current prop: ",props)

    this.state = {
        color: this.props.value
    }

    console.log("current state: ", this.state.color)

    this.genRow = this.genRow.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

    handleClick() {
      this.setState({
          color: '#333'
      })
  }  

  genRow = () => (
    <div className="cell" id={this.state.color} onClick={this.handleClick} style={{backgroundColor:this.state.color}}></div>)

  
  render() {
    return ( 
        this.genRow()
    )
  }
  
}