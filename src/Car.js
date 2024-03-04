import React from 'react';


function Bar (props) {

  const carName = { name: "Henry Ford", model: "Dodge"}

  return (
    <a>I am a brand = {props.brand.model}!</a>
  );
}

class Car extends React.Component {

    
    render() {
    return (
    <a> He said  <Bar brand = {carName}/>! </a>
    );
  }
}



export default Car;
