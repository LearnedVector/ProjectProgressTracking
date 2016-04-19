import {
  CREATE_MILESTONES,
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
  return {
    type: UPDATE_MILESTONE,
    payload: {uiState, id}
  }
}

export function upDateMilestonForProjDet(uiState, id){
  return {
    type: UPDATE_MILESTONR_FOR_PROJ_DETS,
    payload: {uiState, id}
  }
}
