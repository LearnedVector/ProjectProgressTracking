import Firebase from 'firebase';
import { PROJECT_DETS_STARTING_REQUEST, PROJECT_DETS_FINISHED_REQUEST } from './actionTypes';

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
