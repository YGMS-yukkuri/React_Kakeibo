import { useState, useEffect } from 'react'
import './App.css'
import Registerdata from './components/Registerdata/Registerdata';
import InOutWindow from './components/InOutWindow/InOutWindow';


function App() {
  const [ActiveIn, setActiveIn] = useState(true);

  return (
    <>
      <header className='AppHeader'>
        <h1>家計簿アプリ</h1>
      </header>
      <div className='AppContainer'>
        <InOutWindow />
        <Registerdata ActiveIn={ActiveIn} setActiveIn={setActiveIn} />
      </div>
    </>
  )
}
export default App
