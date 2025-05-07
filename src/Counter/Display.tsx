type DisplayPropsType = {
    value: number
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className="display" style={{color: props.value === 5 ? 'red' : 'inherit'}}>
            {props.value}
        </div>
    );
};
