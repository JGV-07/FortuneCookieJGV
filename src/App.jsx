import './App.css';
import phrases from './data/phrases.json';
import FortuneCookie from './components/FortuneCookie';
import FortuneCookieAutor from './components/FortuneCookieAutor';
import { useState } from 'react';

function App() {

  const backgrounds = ["url(/img/fondo1.jpeg)", "url(/img/fondo2.jpeg)", "url(/img/fondo3.jpeg)", "url(/img/fondo4.jpeg)"]
  
  const [image, setImage] = useState(0)
  const changeBackground = () => {
    const randomBackgroundIndex = Math.floor(Math.random() * (backgrounds.length - 1))
    setImage(randomBackgroundIndex)
  }
  const [text, setText] = useState(0)

  const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * (phrases.length - 1))
    setText(randomIndex)
  }

  const ButtonClick = () => {
    changeMessage()
    changeBackground()
  }

  document.body.style = `
    background-image: ${backgrounds[image]};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    text-align: center;
  `


  return (
    <div className="App">
      <h1 className="title">Galleta de la fortuna</h1>
      <FortuneCookie 
      data={phrases[text]}
      />
      <div className='buttom-container'>
        <button onClick={ButtonClick}>Probar mi suerte</button>
      </div>
      <FortuneCookieAutor data={phrases[text]} />
    </div>
  );
}

export default App;
