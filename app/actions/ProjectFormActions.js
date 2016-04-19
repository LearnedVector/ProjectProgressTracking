import Firebase from 'firebase';
import { SUBMIT, CLEAR_FORM_DATA } from './actionTypes';

const fb = new Firebase('https://makepptdash.firebaseio.com/');

export function submitForm(data){
  fb.child('project').push(data)
  return {
    type: SUBMIT,
    payload: true
  }
}

export function clearFormData(){
  return{
    type: CLEAR_FORM_DATA
  }
}
