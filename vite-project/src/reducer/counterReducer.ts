import { ICounter } from "../action/counteraction"



export default (state = 0,action: ICounter ) => {
  switch (action.type) {

  case 'INCREMENT':
    return state+1;

  default:
    return state
  }
}
