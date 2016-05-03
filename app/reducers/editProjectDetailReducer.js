import { UPDATE_FORM_DATA, UPDATE_DETS_TO_FIREBASE, UPDATE_MILESTONE_FOR_PROJ_DETS } from '../actions/actionTypes';

const INITIAL_STATE = {
  data: {},
  id: 0,
  update: false
}

export default function (state = INITIAL_STATE, action ){
  switch(action.type){
    case UPDATE_MILESTONE_FOR_PROJ_DETS:
      return {
        data: action.payload.data,
        id: action.payload.id
      }
    case UPDATE_DETS_TO_FIREBASE:
      state.update = action.payload
      return {...state}
    default:
      return state
    }
  }
