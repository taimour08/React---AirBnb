import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Garage from './Garage.js';




const myFirstElement = <h1>Hey you!</h1>

const myJSXElement = React.createElement('h1', {}, 'I do not use JSX!');

const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
  
  const myElement1 = React.createElement('h1', {}, 'I do not use JSX!');

let x = 20
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;  // the conditional in js inside curly braces


class Jeep extends React.Component {
  render() {
    return <h2>Hi, I am a Cr!</h2>;
  }
}

function Music(Props) {
  return <h2>Hi, I am a {Props.color2} Drum Set!</h2>;
}

function Drumset () {

  return (
    <>
      <h1> Can you play? </h1>
      <Music color2 = "bluel"/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Drumset/>);