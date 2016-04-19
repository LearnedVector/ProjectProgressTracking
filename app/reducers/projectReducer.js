import { STARTING_REQUEST, FINISHED_REQUEST } from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: true,
  data: []
}

export default function (state = INITIAL_STATE, action ){
  switch(action.type){
    case STARTING_REQUEST:
      return {...state, isFetching: true}
    case FINISHED_REQUEST:
      return {...state,
        isFetching: false,
        data: action.payload}
    default:
      return state
  }
}
