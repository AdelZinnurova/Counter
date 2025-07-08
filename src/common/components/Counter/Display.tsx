import {initialStateSettings} from "../../../features/model/settings-reducer.ts";

type DisplayPropsType = {
    maxCount: number
    startCount: number
    count: number
    error?: string | null
    isSet: boolean
}

export const Display = (props: DisplayPropsType) => {


    if (initialStateSettings.startCount < 0 || initialStateSettings.startCount === initialStateSettings.maxCount || initialStateSettings.startCount > initialStateSettings.maxCount) {
        return <div className="display">Incorrect value!</div>
    }

    if (!initialStateSettings.isSet) {
        return <div className="display">Enter values and press 'Set'</div>;
    }

    return (
        <div className="display" style={{color: props.count === initialStateSettings.maxCount ? 'red' : 'inherit'}}>
            {initialState}
        </div>
    );
};
