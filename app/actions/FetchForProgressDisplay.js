import Firebase from 'firebase';
import { PROGRESS_DISPLAY_STARTING_REQUEST, PROGRESS_DISPLAY_FINISHED_REQUEST } from './actionTypes';
const fb = new Firebase('https://makepptdash.firebaseio.com/');

function startingRequest(){
  return {
    type: PROGRESS_DISPLAY_STARTING_REQUEST
  }
}

function finishedRequest(response){
  return {
    type: PROGRESS_DISPLAY_FINISHED_REQUEST,
    payload: response
  }
}

export function FetchForProgressDisplay(){

  return function(dispatch){

    dispatch(startingRequest())

    return fb.child("project").once("value")
    .then(
      (response) => {dispatch(finishedRequest(response.val()))},
      (error) => console.log(error)
    )
  }
}
