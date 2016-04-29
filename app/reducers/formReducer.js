import {
  CREATE_MILESTONES,
  DELETE_MILESTONES,
  UPDATE_MILESTONE,
  SUBMIT,
  CLEAR_FORM_DATA
  } from '../actions/actionTypes';

const INITIAL_STATE = {
  submit: false,
  projectName: "",
  milestones: [],
  milestoneKeys: [],
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case CREATE_MILESTONES:
      const numKey = state.milestones.length
      return {...state,
        milestones: [...state.milestones, action.payload],
        milestoneKeys: [...state.milestoneKeys, numKey],
      }
    case DELETE_MILESTONES:
      console.log('pop',state.milestoneKeys.pop(), state.milestones.pop())
      return {...state}
    case UPDATE_MILESTONE:
      state.milestones[action.payload.id] = action.payload.uiState
      return {...state}
    case SUBMIT:
      state.submit = action.payload
      return {...state}
    case CLEAR_FORM_DATA:
      return INITIAL_STATE
    default:
      return state;
  }
}
  // case UPDATE_TO_FIREBASE:
  //   state.update = action.payload
  //   return {...state}
  // case UPDATE_FORM_DATA:
  //   return [...state, action.payload]
