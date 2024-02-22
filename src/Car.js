import React from 'react';

class Car extends React.Component {
  constructor() {
    super();  // your component has access to all the functions of the parent component (React.Component).
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

export default Car;