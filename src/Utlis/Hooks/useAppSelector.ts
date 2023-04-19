import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {AppStateType} from "../../Store/Store";

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;