import React, { Component } from "react";

class Counter extends Component {
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //   return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  // }

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  // handleDecrement = () => {
  //   if (this.state.value !== 0) this.setState({ value: this.state.value - 1 });
  // };

  // printOnConsole(text) {
  //   console.log(text);
  // }

  getBadgeClasses() {
    let classValue = "badge badge-";
    const { value } = this.props.counters;
    return value === 0 ? (classValue += "warning") : (classValue += "primary");
  }

  componentWillUnmount = ()=>{
    // console.log('component was deleted');
  }

  componentDidUpdate = (prevProps,prevState)=>{
  
    // console.log('new : ',this.props.counters.value);
    // console.log('past : ',prevProps.counters.value);

    if(this.props.counters.value !== prevProps.counters.value){
      // Ajax call and update the data on the server
    }

  }

  render() {
    return (
      <React.Fragment>
        <div className="p-2">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counters)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={()=> this.props.onDecrement(this.props.counters)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counters.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  formatCount() {
    const { value } = this.props.counters;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
