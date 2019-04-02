import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} value={val} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals =>
    <div className="row">{this.genRow(rowVals)}</div>
    )
  )

  render(){
     return(
      <div id="matrix">
      {this.genMatrix()}
    </div>
    )


  }

}
Matrix.defaultProps = { values: [...Array(10)].map(row => [...Array(10)].map(column => '#F00'))}
