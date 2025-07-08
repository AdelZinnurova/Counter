import {Button} from "../Button.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {selectCounter} from "../../../features/model/counter-selectors.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {incCountAC, resetCountAC} from "../../../features/model/counter-reducer.ts";
import {selectSettings} from "../../../features/model/settings-selectors.ts";

export const Buttons = () => {

    const { maxCount, isSet } = useAppSelector(selectSettings)
    const count = useAppSelector(selectCounter);
    const dispatch = useAppDispatch()

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count));
    }, [count]);

    const resetCount = () => {
        dispatch(resetCountAC())
    }

    const incCount = () => {
        dispatch(incCountAC())
    }

    return (
        <div className='button-container'>
            <Button title='inc' disabled={count === maxCount || !isSet} onClick={() => incCount()}/>
            <Button title='reset' disabled={count === 0} onClick={() => resetCount()}/>
        </div>
    );
};