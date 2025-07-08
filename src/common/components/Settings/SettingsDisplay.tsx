import {useEffect} from "react";
import {changeMaxCountAC, changeStartCountAC} from "../../../features/model/settings-reducer.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {selectSettings} from "../../../features/model/settings-selectors.ts";

export const SettingsDisplay = () => {

    const { maxCount, startCount } = useAppSelector(selectSettings)
    const dispatch = useAppDispatch()

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxCount));
    }, [maxCount]);

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startCount));
    }, [startCount]);

    const changeMaxCount = (value: number) => {
        dispatch(changeMaxCountAC({value}))
    }

    const changeStartCount = (value: number) => {
        dispatch(changeStartCountAC({value}))
    }

    return (
        <div className="display">
            <div>
                <label>max value:</label>
                <input
                    value={maxCount}
                    type={'number'}
                    onChange={e => changeMaxCount(Number(e.currentTarget.value))}
                    style={{backgroundColor: startCount === maxCount || startCount > maxCount  ? 'red' : 'white'}}
                />
            </div>
            <div>
                <label>start value:</label>
                <input
                    value={startCount}
                    type={'number'}
                    onChange={e => changeStartCount(Number(e.currentTarget.value))}
                    style={{backgroundColor: startCount < 0 || startCount === maxCount || startCount > maxCount  ? 'red' : 'white'}}
                />
            </div>
        </div>
    );
};