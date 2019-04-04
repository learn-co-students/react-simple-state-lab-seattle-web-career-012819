import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: this.props.value
    }
    console.log(this.state.color)
  }

  render() {
    return (
      <div className={'cell'} onClick={() => this.setState({color: '#333'})} style={{backgroundColor: this.state.color}} >
      {this.state.color}
      </div>
    )
  }
}

export default Cell;
