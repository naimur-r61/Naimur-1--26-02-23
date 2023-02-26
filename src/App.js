import React, { useState } from 'react';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState(Array(16).fill(false));

  const handleClick = (index) => {
    let newBoxes = [...boxes];

    // toggle the clicked box to red
    newBoxes[index] = true;

    // find the index of the first red box
    const firstRedIndex = newBoxes.indexOf(true);

    // if there are already 2 red boxes, toggle the first one back to blue
    if (newBoxes.filter((box) => box === true).length === 3) {
      newBoxes[firstRedIndex] = false;
    }

    setBoxes(newBoxes);
  };

  return (
    <div className="container">
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`box ${box ? 'red' : 'blue'}`}
          onClick={() => handleClick(index)}
        >
          Box #{index + 1}
        </div>
      ))}
    </div>
  );
}

export default App;
