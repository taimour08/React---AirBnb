import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const myFirstElement = <h1>Hell React!</h1>


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<h1>Hello PO</h1>)