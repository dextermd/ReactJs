import { useState } from 'react'
import Counter from "./components/Counter/Counter.jsx";
import Input from "./components/Input/Input.jsx";
import OnOff from './components/OnOff/OnOff.jsx';
import './App.css'

function App() {
  return (
    <>
        <div>
          <h2>Counter</h2>
          <Counter/>
          <hr />
        </div>

        <div>
          <h2>Input</h2>
          <Input/>
          <hr />
        </div>
        <div>
          <h2>OnOff</h2>
          <OnOff/>
          <hr />
        </div>
    </>
  )
}

export default App
