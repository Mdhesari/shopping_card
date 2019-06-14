import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counters.value,
    tags: [],
    handleButtonClass:'btn btn-secondary btn-sm m-2'
  };

  renderTags() {
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

  handleDecrement = () => {
    if (this.state.value !== 0) this.setState({ value: this.state.value - 1 });
  };

  printOnConsole(text) {
    console.log(text);
  }

  getBadgeClasses() {
    let classValue = "badge badge-";
    const { value } = this.state;
    return value === 0 ? (classValue += "warning") : (classValue += "primary");
  }

  render() {
    return (
      <React.Fragment>
        <h4 className="m-2">Title #{this.props.counters.id}</h4>
        <div className="p-2">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={this.handleIncrement}
            className={this.state.handleButtonClass}
          >
            +
          </button>
          <button onClick={this.handleDecrement} className={this.state.handleButtonClass}>-</button>
          <button onClick={()=>this.props.onDelete(this.props.counters.id)} className="btn btn-danger">Delete</button>
        </div>
      </React.Fragment>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
