import React, { useState } from 'react'
import './style.css';
import InputBox from './components/InputBox';
import Gallery from './components/Gallery';

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>Image Search App!!!</h1>
      <InputBox input={input} setInput={setInput} />
      <Gallery query={input} />
    </div>
  );
}

export default App;
