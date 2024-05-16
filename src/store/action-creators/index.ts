import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";


export const setCurrentStep = (step:number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_CURRENT_STEP,
      payload: step,
    })
  }
}
