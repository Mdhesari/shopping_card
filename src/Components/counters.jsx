import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    value: [
        { id: 1, value: 2},
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {console.log(this.state)}
          {this.state.value.map(counter => (
            <Counter key={counter.id} value={counter.value} selected />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;