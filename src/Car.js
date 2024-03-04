import React from 'react';


function Bar (props) {

  return (
    <a>I am a {props.brand}!</a>
  );
}

class Car extends React.Component {

    render() {
    return (
    <a> He said  <Bar brand = "Falana"/>! </a>
    );
  }
}



export default Car;
