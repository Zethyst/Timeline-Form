import { combineReducers } from "redux";
import StepReducer from './StepReducer'

const reducers = combineReducers({
    currentStepIncrease:StepReducer
})

export default reducers;

export type RootState = ReturnType<typeof  reducers>