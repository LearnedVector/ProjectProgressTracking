import { PROGRESS_DISPLAY_STARTING_REQUEST, PROGRESS_DISPLAY_FINISHED_REQUEST } from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: true,
  projects: {}
}

export default function (state = INITIAL_STATE, action ){
  switch(action.type){
    case PROGRESS_DISPLAY_STARTING_REQUEST:
      return {...state,
        isFetching: true
      }
    case PROGRESS_DISPLAY_FINISHED_REQUEST:
      return {...state,
      projects: action.payload,
      isFetching: false
      }
    default:
      return state
    }
  }
