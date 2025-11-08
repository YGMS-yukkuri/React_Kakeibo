import { useState, useEffect } from 'react';
import './Registerdata.css';
export default function Registerdata({ ActiveIn, setActiveIn, setInOutData, InOutId, setInOutId }) {
    const today = new Date().toISOString().split("T")[0];
    const [date, setDate] = useState(today);
    const [memo, setMemo] = useState("");
    // 空欄を許容するために文字列で管理します（入力をクリアできるように）
    const [amount, setAmount] = useState("");

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
    
    function handleSubmit(e) {
        e.preventDefault();
        const amountNumber = amount === "" ? 0 : Number(amount);
        const newInOutData = {
            id: InOutId,
            date: date,
            memo: memo,
            amount: amountNumber,
        }
        setInOutData(prevData => [...prevData, newInOutData]);
        setInOutId(InOutId + 1);
        alert(JSON.stringify(newInOutData));
        // 登録後に入力をクリア
        setMemo("");
        setAmount("");
        setDate(today);
    }

    return (
        <div className='RegisterContainer'>
            <div className='InOutButton'>
                <div id='InButton' className='ActiveButton' onClick={() => setActiveIn(true)}><span>収入</span></div>
                <div id='OutButton' className='' onClick={() => setActiveIn(false)}><span>支出</span></div>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="text" placeholder="メモを追加..." value={memo} onChange={(e) => setMemo(e.target.value)} />
                <input type="number" placeholder="金額を入力" required value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button type="submit">データを登録</button>
            </form>
        </div>
    )
}
