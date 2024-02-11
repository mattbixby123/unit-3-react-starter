import React, { useState } from 'react';
import './App.css';
import {puppyList} from './data.js';


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Log the puppyList arrray to the console (below) from tab 1 & 2
  // console.log("puppyList: ", puppyList);

  // Handle click event for puppy names
  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  // Find the selected puppy object
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {/* Render list of puppy names */}
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
            {puppy.name}
          </p>
        ))}
      </div>

      {/* Render selected puppy info */}
      {featPupId && (
        <div className="puppy-info">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;