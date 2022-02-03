import './App.css';
import React, { Component } from "react";
import Header from "./components/Header/index.jsx";
import CounterList from "./components/CounterList/index.jsx";

class App extends Component {
	// This is an alternative syntax for defining state that you may see in older React apps.
	constructor() {
	    super();

	    this.state = {
	      counters: 5
	    };
	  }

  render() {
    return (
      <div className="App">
        <Header />
	        <CounterList counter={this.props.data.counters} />
	        <CounterList counter={this.state.counters} />
      </div>
    );
  }
}

export default App;