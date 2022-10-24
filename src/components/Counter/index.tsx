import React from 'react'
import style from './Counter.module.scss'

const Counter: React.FC = () => {
    const [count, setCount] = React.useState(0)

    const onClickPlus = () => {
        setCount(count + 100);
    };
    const onClickMinus = () => {
        setCount(count - 100);
    }
    return (
        <div className={style.Card}>
            <h2>Counter:</h2>
            <h1>{count}</h1>
            <div className={style.Buttons}>
                <button onClick={onClickMinus} className={style.minus}>- Minus</button>
                <button onClick={onClickPlus} className={style.plus}>Plus +</button>
            </div>
        </div>
    )
}

export default Counter;