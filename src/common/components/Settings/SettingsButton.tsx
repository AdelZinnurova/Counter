import {Button} from "../Button.tsx";
import {changeStartCountInCounterAC} from "../../../features/model/settings-reducer.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {selectSettings} from "../../../features/model/settings-selectors.ts";


export const SettingsButton = () => {

    const { maxCount, startCount, isSet } = useAppSelector(selectSettings)
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

