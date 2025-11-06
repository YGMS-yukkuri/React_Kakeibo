import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='AppContainer'>
        <header className='AppHeader'>
          <h1>家計簿アプリ</h1>
        </header>
        <div className='InOutContainer'>
          <div>
            <h2>収入タブ</h2>
          </div>
          <div>
            <h2>支出タブ</h2>
          </div>
        </div>
        <div className='RegisterContainer'>
          <h2>登録エリア</h2>
          <div className='InOutButton'>
            <div id='InButton' className='ActiveButton'><span>収入</span></div>
            <div id='OutButton' className=''><span>支出</span></div>
          </div>
          <input type="date" />
        </div>
      </div>
    </>
  )
}

export default App
