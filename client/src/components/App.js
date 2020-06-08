import React from 'react';
import './App.css';
import Tutorial from "./Tutorial";
import Game from "./Game";
import About from './About';
import Nav from "./Nav";

import { useToggleHook } from "./hooks/useToggleHook"

export default function App() {
  const ABOUT = "ABOUT";
  const TUTORIAL = "TUTORIAL";

  const { mode, toggleState} = useToggleHook(ABOUT, TUTORIAL);

    return (
      <div className="App">
        <Game></Game>
        <nav><Nav onClick={toggleState} mode={mode}/></nav>
        {mode === TUTORIAL && (<Tutorial />)}
        {mode === ABOUT && (<About />)}   
      </div>
    );
  }
