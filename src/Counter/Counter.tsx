import {Display} from "./Display.tsx";
import {Buttons} from "./Buttons.tsx";

type CounterPropsType = {
    incCount: () => void
    resetCount: () => void
    count: number
    maxCount: number
}


export const Counter = (props: CounterPropsType) => {


    return (
        <div className="card">
            <Display value={props.count}/>
            <Buttons
                resetCount={props.resetCount}
                incCount={props.incCount}
                count={props.count}
                maxCount={props.maxCount}
            />
        </div>
    );
};