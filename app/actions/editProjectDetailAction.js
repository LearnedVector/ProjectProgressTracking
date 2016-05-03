import Firebase from 'firebase';
import {UPDATE_FORM_DATA, UPDATE_DETS_TO_FIREBASE, UPDATE_MILESTONE_FOR_PROJ_DETS} from './actionTypes';

const fb = new Firebase('https://makepptdash.firebaseio.com/');

export function updateFormData(data, id){
  return {
    type: UPDATE_MILESTONE_FOR_PROJ_DETS,
    payload: { data: data, id: id }
  }
}

export function updateDetsToFirebase(data, params){
  fb.child(`project/${params}`).update(data)
  return {
    type: UPDATE_DETS_TO_FIREBASE,
    payload: true
  }
}

// export function updateMilestoneProjectDetail(data){
//   return {
//     type: UPDATE_MILESTONE_FOR_PROJ_DETS,
//     paylod: data
//   }
// }
