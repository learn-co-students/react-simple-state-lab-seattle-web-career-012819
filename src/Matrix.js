import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map((val, i) => <Cell key={i} value={val} />)
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => 
      <div className="row">{this.genRow(rowVals)}</div>
    )
  )

  // getDefaultProps() {
  //   return {

  //   }
  // }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = { values: [...Array(10)].map(r => [...Array(10)].map(c => '#F00')) }
