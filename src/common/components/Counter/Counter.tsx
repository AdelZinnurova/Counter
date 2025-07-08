import {Display} from "./Display.tsx";
import {Buttons} from "./Buttons.tsx";
import {incCountAC, resetCountAC} from "../../../features/model/counter-reducer.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {selectCounter} from "../../../features/model/counter-selectors.ts";
import {useEffect} from "react";

export const Counter = (props: CounterPropsType) => {

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
        <div className="card">
            <Display/>
            <Buttons
                resetCount={resetCount}
                incCount={incCount}
                count={props.count}
                maxCount={initialStateCounter.maxCount}
                isSet={initialStateCounter.isSet}
            />
        </div>
    );
};