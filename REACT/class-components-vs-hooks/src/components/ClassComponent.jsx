import React from "react";

class component extends React.Component {
  constructor(prop) {
    super();
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default component;
