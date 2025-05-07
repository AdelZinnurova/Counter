import {Display} from "./Display.tsx";
import {Buttons} from "./Buttons.tsx";

type CounterPropsType = {
    incCount: () => void
    resetCount: () => void
    count: number
    maxCount: number
    startCount: number
    error?: string | null
    isSet: boolean
}


export const Counter = (props: CounterPropsType) => {


    return (
        <div className="card">
            <Display maxCount={props.maxCount}
                     startCount={props.startCount}
                     count={props.count}
                     error={props.error}
                     isSet={props.isSet}
            />
            <Buttons
                resetCount={props.resetCount}
                incCount={props.incCount}
                count={props.count}
                maxCount={props.maxCount}
            />
        </div>
    );
};