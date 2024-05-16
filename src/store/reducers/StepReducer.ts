import { ActionType } from "../action-types/index";
import { Action } from "../actions";

const initialState = 1;

  const reducer = (state: number = initialState, action: Action): number => {
    switch (action.type) {
        case ActionType.SET_CURRENT_STEP: 
            return state + action.payload;
        default:
            return state;
    }
};

export default reducer;
