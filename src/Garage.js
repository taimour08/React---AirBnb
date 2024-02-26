import React from 'react';
import Car from './Car.js';


class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>  <span style={{ backgroundColor: 'tomato' }} > Who lives in my Garage? </span></h1>
      <Car />
      </div>
    );
  }
}


export default Garage;
