import Firebase from 'firebase';
import {UPDATE_FORM_DATA, UPDATE_TO_FIREBASE} from './actionTypes';

const fb = new Firebase('https://makepptdash.firebaseio.com/project');

export function updateFormData(data){
  return {
    type: UPDATE_FORM_DATA,
    payload: data
  }
}

export function updateToFirebase(data, params){
  fb.child(`project/${params}`).update(data)
  return {
    type: UPDATE_TO_FIREBASE,
    payload: true
  }
}
