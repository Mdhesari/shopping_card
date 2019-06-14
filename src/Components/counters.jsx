import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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

  handleReset = ()=> {
    const value = this.state.value.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ value });
    console.log(value);
  }

  checkValues() {
    if (this.state.value.length === 0) {
      return (
        <div className="m-3 mt-4">
          <strong className="alert alert-info">
            Please add a new item/Reload the page.{" "}
            <button className="btn btn-success btn-sm m-2">Add</button>
          </strong>
        </div>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.checkValues()}
        <div>
          <button onClick={this.handleReset} className="btn btn-primary">
            Reset
          </button>
          {this.state.value.map(counter => (
            <Counter
              key={counter.id}
              counters={counter}
              onDelete={this.handleDelete}
              selected
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
