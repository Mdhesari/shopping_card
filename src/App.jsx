import React, { Component } from "react";
import "./App.css";
import Counters from "./Components/counters";
import NavBar from "./Components/navbar";

class App extends Component {
  state = {
    value: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const value = this.state.value.filter(i => i.id !== counterId);
    this.setState({ value });
  };

  handleIncrement = counter => {
    let value = [...this.state.value];
    let index = value.indexOf(counter);
    value[index] = { ...counter };
    value[index].value++;
    this.setState({ value });
  };

  handleDecrement = counter => {
    let value = [...this.state.value];
    let index = value.indexOf(counter);
    value[index] = { ...counter };
    if (value[index].value !== 0) value[index].value--;
    this.setState({ value });
  };

  handleReset = () => {
    const value = this.state.value.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ value });
  };

  componentWillUpdate= ()=>{
    // console.log('component is going to be updated.')
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <NavBar total={this.state.value.filter(c => c.value > 0).length} />
        </header>
        <main className="container">
          <Counters
            value={this.state.value}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
