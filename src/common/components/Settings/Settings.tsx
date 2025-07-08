import {SettingsDisplay} from "./SettingsDisplay.tsx";
import {SettingsButton} from "./SettingsButton.tsx";

export const Settings = () => {

    return (
        <div className="card">
            <SettingsDisplay/>
            <SettingsButton/>
        </div>
    );
};