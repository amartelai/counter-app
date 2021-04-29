import React, { Component } from "react";

class Counter extends Component {

  conditionalRender() {
    if (this.state.tags.length === 0) return <p>Enter element in array!</p>;
    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  decrementHandle = () => {
    if (this.props.counters.value <= 0) return this.setState({ value: 0 });
    this.setState({ value: this.props.counters.value - 1 });
  };

  render() {
    //   console.log("props", this.props);

    return (
      <div>
        {/* <h4>Counter #{this.props.id}</h4> */}
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-fail btn-number btn-sm"
        >
          Decrement
        </button>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-number btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
          Delete
            </button>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
