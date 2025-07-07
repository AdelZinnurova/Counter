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
                    defaultValue={props.maxCount}
                    type={'number'}
                    onChange={props.changeMaxCount}
                    style={{backgroundColor: props.startCount === props.maxCount || props.startCount > props.maxCount  ? 'red' : 'white'}}
                />
            </div>
            <div>
                <label>start value:</label>
                <input
                    // value={props.startCount}
                    defaultValue={props.startCount}
                    type={'number'}
                    onChange={props.changeStartCount}
                    style={{backgroundColor: props.startCount < 0 || props.startCount === props.maxCount || props.startCount > props.maxCount  ? 'red' : 'white'}}
                />
            </div>
        </div>
    );
};