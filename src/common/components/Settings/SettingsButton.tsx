import {Button} from "../Button.tsx";
import {changeStartCountInCounterAC} from "../../../features/model/settings-reducer.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";

type SettingsButtonPropsType = {
    maxCount: number
    startCount: number
    isSet: boolean
}


export const SettingsButton = ({maxCount, startCount, isSet}: SettingsButtonPropsType) => {

    const dispatch = useAppDispatch()

    const changeStartCountInCounter = () => {
        dispatch(changeStartCountInCounterAC())
    }

    return (
        <div className='button-container'>
            <Button
                disabled={isSet || startCount < 0 || startCount === maxCount || startCount > maxCount}
                title='set'
                onClick={() => changeStartCountInCounter()}
            />
        </div>
    );
};

