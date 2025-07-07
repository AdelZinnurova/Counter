import './App.css'
import {Counter} from "../Counter/Counter.tsx";
import {Settings} from "../Settings/Settings.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store.ts";

function App() {

    const count = useSelector<RootState, number>(state => state.count);
    const dispatch = useDispatch()

    const [maxCount, setMaxCount] = useState<number>(() => {
        const newValue = localStorage.getItem('maxValue');
        return newValue ? JSON.parse(newValue) : 5;
    });
    const [startCount, setStartCount] = useState<number>(() => {
        const newValue = localStorage.getItem('startValue');
        return newValue ? JSON.parse(newValue) : 0;
    });
    // const [count, setCount] = useState<number>(() => {
    //     const newValue = localStorage.getItem('countValue');
    //     if (newValue !== null) return JSON.parse(newValue);
    //     return startCount;
    // });
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
        dispatch(0)
    }

    const incCount = () => {
        dispatch(count + 1)
    }

    const changeStartCountInCounter = () => {
        setIsSet(true);
        dispatch(startCount)
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
