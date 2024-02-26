import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Garage from './Garage.js';
import { useState } from 'react';

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

let x = 5
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

class Jeep extends React.Component {
  render() {
    return <h2>Hi, I am a Cr!</h2>;
  }
}

function Music(Props) {
  return <h2>Hi, I am a {Props.color} Drum Set!</h2>;
}

function Drumset() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Can you play?</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://lh4.googleusercontent.com/-oF6Gtkjj_Q8/TX-lex6NltI/AAAAAAAABpo/aZezJr-sMn4/s1600/Yamaha-GigMaker-DrumSet2.jpg"
          alt="Set"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <Music color="blue" />
    </>
  );
}


function PictureGallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPicture = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const prevPicture = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <button onClick={prevPicture}>Previous</button>
      <img src={pictures[currentIndex]} alt={`Picture ${currentIndex}`} />
      <button onClick={nextPicture}>Next</button>
    </div>
  );
}

function App() {
  const pictures = [
    'https://lh4.googleusercontent.com/-oF6Gtkjj_Q8/TX-lex6NltI/AAAAAAAABpo/aZezJr-sMn4/s1600/Yamaha-GigMaker-DrumSet2.jpg',
    'https://d1aeri3ty3izns.cloudfront.net/media/6/66449/1200/preview.jpg',
    'https://www.thefamouspeople.com/profiles/images/chris-martin-3.jpg',
    // Add more picture URLs as needed
  ];

  return <PictureGallery pictures={pictures} />;
}

export default App;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);