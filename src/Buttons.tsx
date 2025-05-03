type ButtonPropsType = {
    resetCount: () => void
    incCount: () => void
    disabled?: boolean
    count: number
}

export const Buttons = (props: ButtonPropsType) => {

    return (
        <div className='button-container'>
            <button disabled={props.count === 5} onClick={() => props.incCount()}>inc</button>
            <button disabled={props.count === 0} onClick={() => props.resetCount()}>reset</button>
        </div>
    );
};