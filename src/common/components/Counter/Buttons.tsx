import {Button} from "../Button.tsx";

type ButtonsPropsType = {
    resetCount: () => void
    incCount: () => void
    disabled?: boolean
    count: number
    maxCount: number
    isSet: boolean
}

export const Buttons = (props: ButtonsPropsType) => {

    return (
        <div className='button-container'>
            <Button title='inc' disabled={props.count === props.maxCount || !props.isSet} onClick={() => props.incCount()}/>
            <Button title='reset' disabled={props.count === 0} onClick={() => props.resetCount()}/>
        </div>
    );
};