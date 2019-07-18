import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props) 
    console.log(props)
  }
  
  genMatrix = () => (
    this.props.values.map((rowVals, index) => <div className="row" key={index}>{<Cell value={rowVals[index] }/>}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: new Array(10).fill(new Array(10).fill('#F00'))
}
