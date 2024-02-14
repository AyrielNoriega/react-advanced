import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';
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

    const counterElement = useRef<HTMLHeadingElement>(null);


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

        const tl = gsap.timeline();

        tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });

    }, [counter]);


    return (
        <>
            <h1>CounterByEffect:</h1>
            <h2 ref={ counterElement }>{ counter }</h2>
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
