type DisplayPropsType = {
    maxCount: number
    startCount: number
    count: number
    error?: string | null
    isSet: boolean
}

export const Display = (props: DisplayPropsType) => {
    // if (props.startCount < 0 || props.startCount === props.maxCount || props.startCount > props.maxCount) {
    //     return <div className="display">Incorrect value!</div>
    // } else {
    //     return <div className="display">Enter values and press 'Set'</div>
    // }

    // return (
    //     <div className="display" style={{color: props.count === props.maxCount ? 'red' : 'inherit'}}>
    //         {props.count}
    //     </div>
    // );

    if (props.startCount < 0 || props.startCount === props.maxCount || props.startCount > props.maxCount) {
        return <div className="display">Incorrect value!</div>
    }

    if (!props.isSet) {
        return <div className="display">Enter values and press 'Set'</div>;
    }

    return (
        <div className="display" style={{color: props.count === props.maxCount ? 'red' : 'inherit'}}>
            {props.count}
        </div>
    );
};
