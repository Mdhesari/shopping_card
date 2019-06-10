import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  rednerTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  styles = {
    color: "#fff"
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-1">{this.formatCount()}</span>
        <button style={this.styles} className="btn btn-secondary">
          Increment
        </button>
        <ul>
        {this.state.tags.length === 0 && "Please add new tags."}
        {this.rednerTags()}</ul>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
