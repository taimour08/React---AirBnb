import React from 'react';
import Car from './Car.js';


class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}


export default Garage;
