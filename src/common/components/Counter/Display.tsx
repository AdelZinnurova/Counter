import {} from "../../../features/model/settings-reducer.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {selectSettings} from "../../../features/model/settings-selectors.ts";
import {selectCounter} from "../../../features/model/counter-selectors.ts";

export const Display = () => {

    const { maxCount, startCount, isSet } = useAppSelector(selectSettings)
    const count = useAppSelector(selectCounter);

    if (startCount < 0 || startCount === maxCount || startCount > maxCount) {
        return <div className="display">Incorrect value!</div>
    }

    if (!isSet) {
        return <div className="display">Enter values and press 'Set'</div>;
    }

    return (
        <div className="display" style={{color: count === maxCount ? 'red' : 'inherit'}}>
            {count}
        </div>
    );
};
