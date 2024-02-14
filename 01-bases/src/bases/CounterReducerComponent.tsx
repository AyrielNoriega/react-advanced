import { useReducer, useState } from 'react';

interface CounterState {
    counter: number,
    previous: number,
    changes: number
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
};

export const CounterReducerComponent = () => {

    const [state, dispatch] = useReducer(first, INITIAL_STATE);

    const handleClick = () => {
        setCounter( c => c + 1);
    };

    return (
        <>
            <h1>CounterReducer: { counter }</h1>
            <button onClick={ handleClick }>
                mas 1
            </button>
        </>
    );
};
