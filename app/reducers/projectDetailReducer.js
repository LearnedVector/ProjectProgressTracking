import { PROJECT_DETS_STARTING_REQUEST, PROJECT_DETS_FINISHED_REQUEST, UPDATE_FORM_DATA, CREATE_MILESTONES_FOR_PROJ_DETS, UPDATE_TO_FIREBASE } from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: true,
  data: []
}

export default function (state = INITIAL_STATE, action ){
  switch(action.type){
    case PROJECT_DETS_STARTING_REQUEST:
    return { ...state, isFetching: true }
    case PROJECT_DETS_FINISHED_REQUEST:
    return {...state,
      isFetching: false,
      data: action.payload }
    default:
      return state
    }
  }
