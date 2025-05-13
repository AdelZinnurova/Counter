import './App.css'
import {Counter} from "./Counter/Counter.tsx";
import {Settings} from "./Settings/Settings.tsx";
import {ChangeEvent, useState} from "react";

function App() {
    const [maxCount, setMaxCount] = useState<number>(5);
    const [startCount, setStartCount] = useState<number>(0);
    const [count, setCount] = useState(0);
    const [isSet, setIsSet] = useState<boolean>(false);

    // Counter

    const resetCount = () => {
        setCount(0)
    }

    const incCount = () => {
        setCount(count + 1)
    }

    const changeStartCountInCounter = () => {
        setIsSet(true);
        setCount(startCount)
    }

    // Settings

    const changeMaxCount = (event: ChangeEvent<HTMLInputElement>) => {
        setIsSet(false);
        setMaxCount(Number(event.currentTarget.value))
    }

    const changeStartCount = (event: ChangeEvent<HTMLInputElement>) => {
        setIsSet(false);
        setStartCount(Number(event.currentTarget.value))
    }


    return (
        <div className="App">
            <Settings
                maxCount={maxCount}
                startCount={startCount}
                changeStartCount={changeStartCount}
                changeMaxCount={changeMaxCount}
                changeStartCountInCounter={changeStartCountInCounter}
                isSet={isSet}
            />
            <Counter
                incCount={incCount}
                resetCount={resetCount}
                count={count}
                maxCount={maxCount}
                startCount={startCount}
                isSet={isSet}
            />
        </div>
    )
}

export default App
