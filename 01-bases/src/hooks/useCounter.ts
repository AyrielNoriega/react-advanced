import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';

interface CounterState {
    counter: number;
    clicks: number;
}

interface Props {
    initialValue?: number;
}

const MAXIMO_COUNT = 10;

export const useCounter = ({ initialValue = 0 }: Props) => {
    const [ { counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });

    const elementToAnimate = useRef<HTMLHeadingElement>(null);
    const tl = useRef( gsap.timeline() );

    const handleClick = (value: number) => {

        if (counter > MAXIMO_COUNT ) return;
        
        setCounterState( prev => ({
            counter: Math.min(prev.counter + value,  MAXIMO_COUNT),
            clicks: prev.clicks + 1
        }));
    };

    useLayoutEffect(() => {
        if (!elementToAnimate.current ) return;

        console.log('%cSe llego al valor máximo', 'color: red; background-color: black');

        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause();

    }, []);

    useEffect(() => {
        tl.current.play(0);

    }, [counter]);

    return {
        counter,
        clicks,
        counterElement: elementToAnimate,
        handleClick
    };
};
