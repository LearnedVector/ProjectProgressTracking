import {
  CREATE_MILESTONES,
  DELETE_MILESTONES,
  UPDATE_MILESTONE,
  CREATE_MILESTONES_FOR_PROJ_DETS
  } from './actionTypes';

export function createMileStone(){
  return {
    type: CREATE_MILESTONES,
    payload: {
      name: "",
      startDate: "",
      endDate: ""
    }
  }
}

export function deleteMilestone(){
  return {
    type: DELETE_MILESTONES
  }
}

export function createMileStoneForProjDets(){
  return {
    type: CREATE_MILESTONES_FOR_PROJ_DETS,
    payload: {
      name: "",
      startDate: "",
      endDate: ""
    }
  }
}

export function updateMileStone(uiState, id){
  console.log(uiState)
  return {
    type: UPDATE_MILESTONE,
    payload: {uiState, id}
  }
}
