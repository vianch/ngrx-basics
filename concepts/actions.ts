import { Action } from "@ngrx/store";

export const actionTypes = {
  INCREMENT = "INCREMENT";
  DECREMENT = "DECREMENT";
};

export class IncrementAction implements Action {
  public readonly type = actionTypes.INCREMENT;

  constructor(public payLoad: number) {
    this.payLoad = this.payLoad+1;
  }
}

export class DecrementAction implements Action {
  public readonly type = actionTypes.DECREMENT;
  constructor(public payLoad: number) {
    this.payLoad = this.payLoad-1;
  }
}

export type ExampleActions = IncrementAction | DecrementAction;
