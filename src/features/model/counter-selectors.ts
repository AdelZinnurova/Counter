import {useAppSelector} from "../../common/hooks/useAppSelector.ts";


export const selectCounter = useAppSelector(state => state.counter);