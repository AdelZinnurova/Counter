import {Button} from "../components/Button.tsx";

type ButtonsPropsType = {
    resetCount: () => void
    incCount: () => void
    disabled?: boolean
    count: number
}

export const Buttons = (props: ButtonsPropsType) => {

    return (
        <div className='button-container'>
            <Button title='inc' disabled={props.count === 5} onClick={() => props.incCount()}/>
            <Button title='reset' disabled={props.count === 0} onClick={() => props.resetCount()}/>
        </div>
    );
};