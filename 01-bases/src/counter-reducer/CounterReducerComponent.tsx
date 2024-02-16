import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';



const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
};




export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const onReset = () => {
        dispatch({ type: 'reset' });
    };

    const onIncreaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value }  });
    };

    return (
        <>
            <h1>CounterReducer segmentado: { counterState.counter }</h1>
            <pre>{ JSON.stringify( counterState, null, 2 ) }</pre>
            <button onClick={ onReset }>
                Reset
            </button>
            <button onClick={ () => onIncreaseBy(1) }>
                +1
            </button>
            <button onClick={ () => onIncreaseBy(5) }>
                +5
            </button>
            <button onClick={ () => onIncreaseBy(10) }>
                +10
            </button>
        </>
    );
};
