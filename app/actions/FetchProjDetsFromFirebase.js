import Firebase from 'firebase';
import { PROJECT_DETS_STARTING_REQUEST, PROJECT_DETS_FINISHED_REQUEST, UPDATE_FORM_DATA, UPDATE_TO_FIREBASE } from './actionTypes';

const fb = new Firebase('https://makepptdash.firebaseio.com/project');

function startingRequest(){
  return {
    type: PROJECT_DETS_STARTING_REQUEST
  }
}

function finishedRequest(response){
  return {
    type: PROJECT_DETS_FINISHED_REQUEST,
    payload: response
  }
}

export function fetchProjDetsFromFirebase(params){

  return function(dispatch){

    dispatch(startingRequest())

    return fb.child(params).once("value")
            .then(
              (response) => dispatch(finishedRequest(response.val())),
              (error) => console.log(error)
            )
  }
}

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
