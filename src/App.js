import React, { useState } from 'react'
import './style.css';
import InputBox from './components/InputBox';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <Navbar />
      <InputBox input={input} setInput={setInput} />
      <Gallery query={input} />
    </div>
  );
}

export default App;
