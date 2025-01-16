import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ margin: '50px' }}>
      <h1>React Text Area Example</h1>
      <textarea
        placeholder="Type something here..."
        value={text}
        onChange={handleChange}
        rows="5"
        cols="50"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>Updated Text:</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [percentages, setPercentages] = useState(''); // To store input
  const [distinction, setDistinction] = useState(0); // Count of distinction students
  const [firstClass, setFirstClass] = useState(0); // Count of first-class students

  // Function to calculate results
  const calculateCounts = () => {
    const marks = percentages.split(',').map((mark) => parseFloat(mark.trim())); // Split and convert to numbers
    let dist = 0; // To count distinctions
    let first = 0; // To count first-class

    // Loop through the marks
    marks.forEach((mark) => {
      if (mark >= 85) dist++; // Distinction criteria
      else if (mark >= 60) first++; // First class criteria
    });

    // Update counts
    setDistinction(dist);
    setFirstClass(first);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Student Performance Counter</h1>
      <input
        type="text"
        placeholder="Enter percentages (e.g., 90, 75, 88)"
        value={percentages}
        onChange={(e) => setPercentages(e.target.value)} // Update percentages
      />
      <br />
      <button onClick={calculateCounts}>Calculate</button>
      <p>Distinction (85% and above): {distinction}</p>
      <p>First Class (60% to 84%): {firstClass}</p>
    </div>
  );
}

export default App;


import React, { useState, useEffect } from "react";

const InputValidationApp = () => {
  // State to store the input value and validation message
  const [inputValue, setInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  // Function to handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // useEffect to validate the input on every change
  useEffect(() => {
    if (inputValue.length === 0) {
      setValidationMessage("Input is required.");
    } else if (inputValue.length < 5) {
      setValidationMessage("Input must be at least 5 characters long.");
    } else {
      setValidationMessage("Input is valid!");
    }
  }, [inputValue]); // Dependency array ensures this runs whenever inputValue changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Input Validation with useEffect</h1>
      {/* Input Field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      {/* Validation Message */}
      <div style={{ marginTop: "20px" }}>
        <p
          style={{
            fontSize: "18px",
            color: validationMessage === "Input is valid!" ? "green" : "red",
          }}
        >
          {validationMessage}
        </p>
      </div>
    </div>
  );
};

export default InputValidationApp;
