import React from "react";
import "./App.css";
import TempChange from "./temp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={counter: 0};
  }

  increment=() =>{
    this.setState({counter: this.state.counter + 1});
  }

  decrement =()=> {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return (
      <div className="App">

        <h1>Counter App</h1>

        <button onClick={this.increment} className="increment">+</button>

        <button onClick={this.decrement} className="decrement">-</button>

        <h2>{this.state.counter}</h2>

        <TempChange/>
      </div>
    );
  }
}

export default App;
