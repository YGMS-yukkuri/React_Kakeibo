import { useState, useEffect, use } from 'react'
import './App.css'
import Registerdata from './components/Registerdata/Registerdata';
import InOutWindow from './components/InOutWindow/InOutWindow';


function App() {
  const [ActiveIn, setActiveIn] = useState(true);
  const [InOutData, setInOutData] = useState([]);
  const [InOutId, setInOutId] = useState(0);


  return (
    <>
      <header className='AppHeader'>
        <h1>家計簿アプリ</h1>
      </header>
      <div className='AppContainer'>
        <InOutWindow InOutData={InOutData} />
        <Registerdata ActiveIn={ActiveIn} setActiveIn={setActiveIn} setInOutData={setInOutData} InOutId={InOutId} setInOutId={setInOutId} />
      </div>
    </>
  )
}
export default App
