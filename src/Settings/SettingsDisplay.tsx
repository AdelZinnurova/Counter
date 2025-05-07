import {ChangeEvent} from "react";

type SettingsDisplayPropsType = {
    maxCount: number
    startCount: number
    changeStartCount: (event: ChangeEvent<HTMLInputElement>) => void
    changeMaxCount: (event: ChangeEvent<HTMLInputElement>) => void
}


export const SettingsDisplay = (props: SettingsDisplayPropsType) => {

    return (
        <div className="display">
            <div>
                <label>max value:</label>
                <input
                    // value={props.maxCount}
                    type={'number'}
                    onChange={props.changeMaxCount}
                />
            </div>
            <div>
                <label>start value:</label>
                <input
                    // value={props.startCount}
                    type={'number'}
                    onChange={props.changeStartCount}
                />
            </div>
        </div>
    );
};