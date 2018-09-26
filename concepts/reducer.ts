
import { Action } from "@ngrx/store";
import * as MyActions from "./actions";

const initialState = 0

const myReducer: Reducer<number> = (state = initialState, action: MyActions.ExampleActions): number {
  switch(action.type) {
    case MyActions.actionTypes.INCREMENT:
        return state + action.payLoad;
    case MyActions.actionTypes.DECREMENT:
        return state + action.payLoad;
    default:
        return state;
}
};

export { myReducer };
