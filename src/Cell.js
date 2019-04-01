import React, {Component} from 'react';

export default class Cell extends Component {
  //set initial state
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  //handle state on click
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }

  //render
  render() {
    return (
      <div
      className = 'cell'
      style = {{backgroundColor: this.state.color}}
      onClick = {this.handleClick}>
    </div>
    )
  }

//end of class
}
