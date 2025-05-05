import {ChangeEvent, useState} from "react";

// type SettingsDisplayPropsType = {
//     startValue: number
//     maxValue: number
// }

export const SettingsDisplay = () => {

    const [maxCount, setMaxCount] = useState<number>(5);
    const [startCount, setStartCount] = useState<number>(0);

    const changeMaxCount = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(Number(event.currentTarget.value))
    }

    const changeStartCount = (event: ChangeEvent<HTMLInputElement>) => {
        setStartCount(Number(event.currentTarget.value))
    }

    return (
        <div className="display">
            <div>
                <label>max value:</label>
                <input
                    value={maxCount}
                    type={'number'}
                    onChange={changeMaxCount}
                />
            </div>
            <div>
                <label>start value:</label>
                <input
                    value={startCount}
                    type={'number'}
                    onChange={changeStartCount}
                />
            </div>
        </div>
    );
};

1