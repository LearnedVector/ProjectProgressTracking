import { UPDATE_FORM_DATA, UPDATE_TO_FIREBASE } from '../actions/actionTypes';

const INITIAL_STATE = {
  edit: false,
  projectName: "",
  milestones: [],
  milestoneKeys: []
}

export default function (state = INITIAL_STATE, action ){
  switch(action.type){
    case UPDATE_FORM_DATA:
      return {...state,
        projectName: action.payload.projectName,
        milestones: action.payload.milestones,
        milestoneKeys: action.payload.milestoneKeys,
      }
    case UPDATE_TO_FIREBASE:
      state.update = action.payload
      return {...state}
    default:
      return state
    }
  }
