import './App.css'
import {Counter} from "./Counter/Counter.tsx";
import {Settings} from "./Settings/Settings.tsx";
import {ChangeEvent, useEffect, useState} from "react";

function App() {
    const [maxCount, setMaxCount] = useState<number>(() => {
        const newValue = localStorage.getItem('maxValue');
        return newValue ? JSON.parse(newValue) : 5;
    });
    const [startCount, setStartCount] = useState<number>(() => {
        const newValue = localStorage.getItem('startValue');
        return newValue ? JSON.parse(newValue) : 0;
    });
    const [count, setCount] = useState<number>(() => {
        const newValue = localStorage.getItem('countValue');
        if (newValue !== null) return JSON.parse(newValue);
        return startCount;
    });
    const [isSet, setIsSet] = useState<boolean>(() => {
        return localStorage.getItem('countValue') !== null;
    });

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxCount));
    }, [maxCount]);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startCount));
    }, [startCount]);

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count));
    }, [count]);


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
