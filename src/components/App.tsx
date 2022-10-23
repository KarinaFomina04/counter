import React from 'react'

const App: React.FC = () => {
    const [count, setCount] = React.useState(0)

    const onClickPlus = () => {
        setCount(count + 1);
    };
    const onClickMinus = () => {
        setCount(count - 1);
    }
    return (
        <div className="App">
            <div className='Card'>
                <h2>Counter:</h2>
                <h1>{count}</h1>
                <div className='Buttons'>
                    <button onClick={onClickMinus} className="minus">- Minus</button>
                    <button onClick={onClickPlus} className="plus">Plus +</button>
                </div>
            </div>
        </div>
    );
}

export default App;
