import './App.css'
import {Counter} from "./Counter/Counter.tsx";
import {Settings} from "./Settings/Settings.tsx";
import {ChangeEvent, useState} from "react";

function App() {
    const [maxCount, setMaxCount] = useState<number>(5);
    const [startCount, setStartCount] = useState<number>(0);
    const [count, setCount] = useState(0);

    // Counter

    const resetCount = () => {
        setCount(0)
    }

    const incCount = () => {
            setCount(count + 1)
    }

    const changeStartCountInCounter = () => {
        setCount(startCount)
    }

    // Settings

    const changeMaxCount = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(Number(event.currentTarget.value))
    }

    const changeStartCount = (event: ChangeEvent<HTMLInputElement>) => {
        setStartCount(Number(event.currentTarget.value))
    }
    //
    // const changeStartCount = (event: ChangeEvent<HTMLInputElement>) => {
    //     setCount(Number(event.currentTarget.value))
    // }


    return (
        <div className="App">
            <Settings
                maxCount={maxCount}
                startCount={startCount}
                changeStartCount={changeStartCount}
                changeMaxCount={changeMaxCount}
                changeStartCountInCounter={changeStartCountInCounter}
            />
            <Counter
                incCount={incCount}
                resetCount={resetCount}
                count={count}
                maxCount={maxCount}
            />
        </div>
    )
}

export default App
