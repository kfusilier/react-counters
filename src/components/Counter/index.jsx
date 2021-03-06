import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0
	};

	increaseCount = () => {
		let count = this.state.count + 1;
		this.setState({
			count
		});
	}

	decreaseCount = () => {
		let count = this.state.count - 1;
		this.setState({
			count
		});
	}

  render() {
    return (
      <div className="Counter">
        <h4>Counter: {this.state.count}</h4>
	        {/* <button>Decrement</button> */}
	        <button onClick={this.increaseCount}>Increase</button>
	        {/* <button>Increment</button> */}
	        <button onClick={this.decreaseCount}>Decrease</button>
      </div>
    );
  }
}

export default Counter;