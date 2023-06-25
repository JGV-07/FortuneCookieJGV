import './App.css';
import phrases from './data/phrases.json';
import FortuneCookie from './components/FortuneCookie';
import { useState } from 'react';

function App() {
  
  const [text, setText] = useState(0);

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setText(randomIndex);
  };

  return (
    <div className="App">
      <h1 className="title">Galletas de la fortuna</h1>
      <FortuneCookie data={phrases[text]} />
      <button onClick={changeMessage}>Probar mi suerte</button>
    </div>
  );
}

export default App;
