import {Button} from "../components/Button.tsx";


type SettingsButtonPropsType = {
    changeStartCountInCounter: () => void
}

export const SettingsButton = (props: SettingsButtonPropsType) => {
    return (
        <div className='button-container'>
            <Button
                title='set'
                onClick={() => props.changeStartCountInCounter()}
            />
        </div>
    );
};

