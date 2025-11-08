import React from 'react'
import './InOutWindow.css';

export default function InOutWindow({ InOutData }) {

    



    return (
        <>
            <div className='InOutWindow'>
                <div className='InOutAllContainer'>
                    <h2>収入・支出一覧</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>日付</th>
                                <th>メモ</th>
                                <th>金額</th>
                                <th>残高</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-06-01</td>
                                <td>給料</td>
                                <td>300,000円</td>
                                <td>500,000円</td>
                            </tr>
                            <tr>
                                <td>2024-06-15</td>
                                <td>ボーナス</td>
                                <td>150,000円</td>
                                <td>650,000円</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='InOutContainer'>
                    <div className='InContainer'>
                        <h2>収入タブ</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>日付</th>
                                    <th>メモ</th>
                                    <th>収入額</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2024-06-01</td>
                                    <td>給料</td>
                                    <td>300,000円</td>
                                </tr>
                                <tr>
                                    <td>2024-06-15</td>
                                    <td>ボーナス</td>
                                    <td>150,000円</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='OutContainer'>
                        <h2>支出タブ</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>日付</th>
                                    <th>メモ</th>
                                    <th>支出額</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2024-06-01</td>
                                    <td>給料</td>
                                    <td>300,000円</td>
                                </tr>
                                <tr>
                                    <td>2024-06-15</td>
                                    <td>ボーナス</td>
                                    <td>150,000円</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
