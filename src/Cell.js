import React, { Component } from 'react';

class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: props.value
		};
	}
	changeColor = () => {
		this.setState({
			color: '#333'
		});
	};
	render() {
		return <div onClick={this.changeColor} className="cell" style={{ backgroundColor: this.state.color }} />;
	}
}

export default Cell;
