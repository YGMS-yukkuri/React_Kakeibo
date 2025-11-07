import { useState, useEffect } from 'react';
import './Registerdata.css';
export default function Registerdata({ ActiveIn, setActiveIn }) {

    useEffect(() => {
        const inButton = document.getElementById('InButton');
        const outButton = document.getElementById('OutButton');
        if (ActiveIn) {
            inButton.classList.add('ActiveButton');
            outButton.classList.remove('ActiveButton');
        } else {
            inButton.classList.remove('ActiveButton');
            outButton.classList.add('ActiveButton');
        }
    }, [ActiveIn]);

    return (
        <div className='RegisterContainer'>
            <div className='InOutButton'>
                <div id='InButton' className='ActiveButton' onClick={() => setActiveIn(true)}><span>収入</span></div>
                <div id='OutButton' className='' onClick={() => setActiveIn(false)}><span>支出</span></div>
            </div>
            <form>
                <input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                <input type="text" placeholder="メモを追加..." />
                <input type="number" placeholder="金額を入力" required />
                <button type="submit">データを登録</button>
            </form>
        </div>
    )
}
