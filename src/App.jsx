import React, { useState } from 'react';

import './App.css';
import {puppyList} from './data.js';


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  // Log the puppyList arrray to the console (below)
  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })
      }
    </div>
  );
}

export default App
