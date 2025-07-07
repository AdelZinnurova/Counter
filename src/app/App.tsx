import './App.css'
import {Counter} from "../common/components/Counter/Counter.tsx";
import {Settings} from "../common/components/Settings/Settings.tsx";
import {ChangeEvent, useEffect} from "react";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {selectCounter} from "../features/model/counter-selectors.ts";
import {selectSettings} from "../features/model/settings-selectors.ts";
import {incCountAC, resetCountAC} from "../features/model/counter-reducer.ts";
import {changeMaxCountAC, changeStartCountAC, changeStartCountInCounterAC} from "../features/model/settings-reducer.ts";

function App() {

    const count = useAppSelector(selectCounter);
    const settings = useAppSelector(selectSettings);
    const dispatch = useAppDispatch()


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
        dispatch(resetCountAC())
    }

    const incCount = () => {
        dispatch(incCountAC())
    }

    const changeStartCountInCounter = () => {
        dispatch(changeStartCountInCounterAC())
    }

    // Settings

    const changeMaxCount = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeMaxCountAC({ event }))
    }

    const changeStartCount = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStartCountAC({ event }))
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
