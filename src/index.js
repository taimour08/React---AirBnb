import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const myFirstElement = <h1>Hey you!</h1>


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

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myElement);
