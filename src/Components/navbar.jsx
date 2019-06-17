import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Shopping Card
          <span className="badge badge-success m-2">{this.props.total}</span>
        </span>
      </nav>
    );
  }
}

export default Navbar;
