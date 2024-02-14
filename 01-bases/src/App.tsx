import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterByEffect } from './bases/CounterByEffect';
import { CounterHook } from './bases/CounterHook';

function App() {
    return (
        <>
            <Counter initialValue={15} />
            <CounterBy />
            <CounterByEffect />
            <CounterByEffect />
            <CounterHook />
        </>
    );
}

export default App;
