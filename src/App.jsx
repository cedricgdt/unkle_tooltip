import logo from './logo.svg';
import './App.scss';
import ToolTip from './TooltipComponent/ToolTip' 
import {React, useState} from 'react'

function App() {

  const [focused, setFocused] = useState(false)

  const onFocus = (el) => {
    setFocused(() => el.type === 'focus' ? true : false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-row">
          <ToolTip onHover={true} position="right" text="Je suis un <strong>trés beau</strong> tooltip animé pour <strong>Unkle</strong>, je suis positionné à droite, tu peux aussi me donner du <strong>html</strong> :)">
            <img src={logo} className="App-logo" alt="logo" />
          </ToolTip>
          <ToolTip onHover={true} position="top" text="Je suis un <strong>trés beau</strong> tooltip animé pour <strong>Unkle</strong>, je suis positionné en haut, tu peux aussi me donner du <strong>html</strong> :)">
            <img src={logo} className="App-logo" alt="logo" />
          </ToolTip>
          <ToolTip onHover={true} position="bottom" text="Je suis un <strong>trés beau</strong> tooltip animé pour <strong>Unkle</strong>, je suis positionné en bas, tu peux aussi me donner du <strong>html</strong> :)">
            <img src={logo} className="App-logo" alt="logo" />
          </ToolTip>
          <ToolTip onHover={true} position="left" text="Je suis un <strong>trés beau</strong> tooltip animé pour <strong>Unkle</strong>, je suis positionné à gauche, tu peux aussi me donner du <strong>html</strong> :)">
            <img src={logo} className="App-logo" alt="logo" />
          </ToolTip>
        </div>
        <ToolTip onHover={true} position="top" text="Voici la suite de ce texte.">
          <p>
            Ceci est un texte incomplet.
          </p>
        </ToolTip>
        <ToolTip onHover={true} position="left" text="Je suis un lien qui te redirige vers la doc de react.">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Je click !
          </a>
        </ToolTip>
        <ToolTip position="top" display={focused} text="Tu peux écrire ce que tu veux ici">
          <div className="App-form">
            <label htmlFor="myInput">Tape du texte :</label>
            <input className="App-input" id="myInput" name="myInput" type="text" onFocus={onFocus} onBlur={onFocus}/>
          </div>
        </ToolTip>
      </header>
    </div>
  );
}

export default App;
