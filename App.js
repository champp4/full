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
