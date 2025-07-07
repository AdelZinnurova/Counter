import {useAppSelector} from "../../common/hooks/useAppSelector.ts";

export const selectSettings = useAppSelector(state => state.settings);