import {SettingsDisplay} from "./SettingsDisplay.tsx";
import {SettingsButton} from "./SettingsButton.tsx";


export const Settings = () => {


    // const addCount = () => {
    //     setStartCount(startCount + 1)
    // }
    //
    // const removeCount = () => {
    //     setMaxCount(maxCount - 1)
    // }

    return (
        <div className="card">
            <SettingsDisplay/>
            <SettingsButton/>
        </div>
    );
};