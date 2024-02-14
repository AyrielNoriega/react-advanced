import { useCounter } from '../hooks/useCounter';

interface Props {
    initialValue?: number;
}



export const CounterHook = ({ initialValue = 5 }: Props) => {

    const { counter, clicks, counterElement, handleClick } = useCounter({initialValue});
    return (
        <>
            <h1>CounterHook:</h1>
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
