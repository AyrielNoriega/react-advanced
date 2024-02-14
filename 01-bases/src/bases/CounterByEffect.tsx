import { constants } from 'perf_hooks';
import React, { useEffect, useState } from 'react';

interface Props {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

const MAXIMO_COUNT = 10;

export const CounterByEffect = ({ initialValue = 5 }: Props) => {

    const [ { counter, clicks } , setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });


    const handleClick = (value: number) => {

        if (counter > MAXIMO_COUNT ) return;
        
        setCounterState( prev => ({
            counter: Math.min(prev.counter + value,  MAXIMO_COUNT),
            clicks: prev.clicks + 1
        }));
    };

    useEffect(() => {
        if (counter < MAXIMO_COUNT ) return;

        console.log('%cSe llego al valor máximo', 'color: red; background-color: black');

    }, [counter]);
    

    return (
        <>
            <h1>CounterByEffect: { counter }</h1>
            <h3>Clicks: { clicks }</h3>
            <button onClick={ () => handleClick(1) }>
                + 1
            </button>
            <button onClick={ () => handleClick(5) }>
                + 5
            </button>
        </>
    );
};
