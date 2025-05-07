import {SettingsDisplay} from "./SettingsDisplay.tsx";
import {SettingsButton} from "./SettingsButton.tsx";
import {ChangeEvent} from "react";

type SettingsPropsType = {
    maxCount: number
    startCount: number
    changeStartCount: (event: ChangeEvent<HTMLInputElement>) => void
    changeMaxCount: (event: ChangeEvent<HTMLInputElement>) => void
    changeStartCountInCounter: () => void
}

export const Settings = (props: SettingsPropsType) => {

    return (
        <div className="card">
            <SettingsDisplay maxCount={props.maxCount} startCount={props.startCount} changeStartCount={props.changeStartCount}
            changeMaxCount={props.changeMaxCount} />
            <SettingsButton
                changeStartCountInCounter={props.changeStartCountInCounter}
                startCount={props.startCount}
                disabled={props.startCount < 0}
                maxCount={props.maxCount}
            />
        </div>
    );
};