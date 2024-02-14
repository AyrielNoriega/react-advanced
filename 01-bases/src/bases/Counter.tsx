import React, { useState } from 'react';

export const Counter = ({ initialValue }) => {

    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        setCounter( c => c + 1);
    };

    return (
        <>
            <h1>Counter: { counter }</h1>
            <button onClick={ handleClick }>
                mas 1
            </button>
        </>
    );
};
