import { useReducer } from 'react';

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

type CounterAction =
    | { type: 'increaseBy', payload: { value: number} }
    | { type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
    case 'reset':
        return {
            counter: 0,
            previous: 0,
            changes: 0
        };
    case 'increaseBy':
        return {
            counter: state.counter + action.payload.value,
            previous: state.counter,
            changes: state.changes + 1,
        };
    
    default:
        return {
            ...state
        };
    }
    // return {
    //     counter,
    //     previous,
    //     changes
    // };
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
            <h1>CounterReducer: { counterState.counter }</h1>
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
