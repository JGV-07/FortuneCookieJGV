import './App.css';
import phrases from './data/phrases.json';
import FortuneCookie from './components/FortuneCookie';
import FortuneCookieAutor from './components/FortuneCookieAutor';
import { useState } from 'react';

function App() {

  const backgrounds = ["url(/img/fondo1.jpeg)", "url(/img/fondo2.jpeg)", "url(/img/fondo3.jpeg)", "url(/img/fondo4.jpeg)"]
  
  const [image, setImage] = useState(0);
  const changeBackground = () => {
    const randomBackgroundIndex = Math.floor(Math.random() * backgrounds.length);
    setImage(randomBackgroundIndex)
  }
  const [text, setText] = useState(0);

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setText(randomIndex)
  }

  const ButtonClick = () => {
    changeMessage();
    changeBackground();
  }

  document.body.style = `
    background-image: ${backgrounds[image]};
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 98%;
  `


  return (
    <div className="App">
      <h1 className="title">Galletas de la fortuna</h1>
      <FortuneCookie 
      data={phrases[text]}
      />
      <button onClick={ButtonClick}>Probar mi suerte</button>
      <FortuneCookieAutor data={phrases[text]} />
    </div>
  );
}

export default App;
