import { ActionType } from "../action-types";

interface SetCurrentStepAction {
    type: ActionType.SET_CURRENT_STEP;
    payload: number;
}

// type AppAction = SetCurrentStepAction;



export type Action = SetCurrentStepAction;
