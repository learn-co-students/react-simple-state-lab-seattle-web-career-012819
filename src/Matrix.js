import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   values: ''
    // }
  }

  genRow = (vals) => (
    vals.map(val => <div className="cell"> <Cell value={val} /></div>)
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row" key={rowVals.id}>{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix" key="This one has a key too">
        {this.genMatrix()}
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
//['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'], ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']