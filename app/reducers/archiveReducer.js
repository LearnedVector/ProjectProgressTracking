import { ARCHIVE_TO_FB, DONE_ARCHIVE_TO_FB } from '../actions/actionTypes';

const INITIAL_STATE = {
  archive: false
}

export default function (state = INITIAL_STATE, action ){
  switch(action.type){
    case ARCHIVE_TO_FB:
      return {
        archive: true
      }
    case DONE_ARCHIVE_TO_FB:
      return INITIAL_STATE
    default:
      return state
    }
  }
