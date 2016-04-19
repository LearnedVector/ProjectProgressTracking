import { PROJECT_DETS_STARTING_REQUEST, PROJECT_DETS_FINISHED_REQUEST, UPDATE_FORM_DATA, CREATE_MILESTONES_FOR_PROJ_DETS, UPDATE_TO_FIREBASE } from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: true,
  update: false,
  projectName: "",
  milestones: [],
  milestoneKeys: [],
  numOfMilestones: 0,
  data: []
}

export default function (state = INITIAL_STATE, action ){
  switch(action.type){
    case PROJECT_DETS_STARTING_REQUEST:
    return {...state, isFetching: true}
    case PROJECT_DETS_FINISHED_REQUEST:
    return {...state,
      isFetching: false,
      data: action.payload }
    case UPDATE_FORM_DATA:
      return {...state,
        projectName: action.payload.projectName,
        milestones: action.payload.milestones,
        milestoneKeys: action.payload.milestoneKeys,
        numOfMilestones: action.payload.numOfMilestones
      }
    case CREATE_MILESTONES_FOR_PROJ_DETS:
      const numKey = state.milestones.length
      return {...state,
        milestones: [...state.milestones, action.payload],
        milestoneKeys: [...state.milestoneKeys, numKey],
      }
    case UPDATE_TO_FIREBASE:
      state.update = action.payload
      return {...state}
    default:
      return state
    }
  }
