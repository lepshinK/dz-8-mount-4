import React, { useState } from 'react';

const CounterApp = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                <h1>Счетчик: {counter}</h1>
                <button onClick={incrementCounter}>Увеличить</button>
                <button onClick={decrementCounter}>Уменьшить</button>
            </div>
        </div>
    );
};

export default CounterApp;
