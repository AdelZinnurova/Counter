import {SettingsDisplay} from "./SettingsDisplay.tsx";
import {SettingsButton} from "./SettingsButton.tsx";
import {selectSettings} from "../../../features/model/settings-selectors.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";

export const Settings = () => {

    const { maxCount, startCount, isSet } = useAppSelector(selectSettings);

    return (
        <div className="card">
            <SettingsDisplay
                maxCount={maxCount}
                startCount={startCount}
            />
            <SettingsButton
                maxCount={maxCount}
                startCount={startCount}
                isSet={isSet}
            />
        </div>
    );
};