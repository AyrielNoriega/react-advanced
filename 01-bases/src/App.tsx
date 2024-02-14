import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterByEffect } from './bases/CounterByEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './bases/CounterReducerComponent';

function App() {
    return (
        <>
            <Counter initialValue={15} />
            <CounterBy />
            <CounterByEffect />
            <CounterByEffect />
            <CounterHook />
            <CounterReducerComponent />
        </>
    );
}

export default App;
