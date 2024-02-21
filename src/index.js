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
  
  const myElement = React.createElement('h1', {}, 'I do not use JSX!');

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myElement);
