import {Button} from "../components/Button.tsx";


type SettingsButtonPropsType = {
    changeStartCountInCounter: () => void
    disabled:boolean
    startCount: number
    maxCount: number
}

export const SettingsButton = (props: SettingsButtonPropsType) => {
    return (
        <div className='button-container'>
            <Button
                disabled={props.startCount < 0 || props.startCount === props.maxCount || props.startCount > props.maxCount}
                title='set'
                onClick={() => props.changeStartCountInCounter()}
            />
        </div>
    );
};

