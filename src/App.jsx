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
        </div>
      </div>
    </>
  )
}

export default App
