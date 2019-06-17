import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  checkValues() {
    if (this.props.value.length === 0) {
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
          <button
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm m-2"
          >
            Reset
          </button>
          {this.props.value.map(counter => (
            <Counter
              key={counter.id}
              counters={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              selected
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
