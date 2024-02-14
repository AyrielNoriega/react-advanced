import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterByEffect } from './bases/CounterByEffect';

function App() {
    return (
        <>
            <Counter initialValue={15} />
            <CounterBy />
            <CounterByEffect />
        </>
    );
}

export default App;
