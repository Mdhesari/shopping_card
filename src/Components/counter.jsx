import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };

  rednerTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  printOnConsole(text) {
    console.log(text);
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <span className="badge badge-primary m-1">{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          Increment
        </button>
        <br />
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
