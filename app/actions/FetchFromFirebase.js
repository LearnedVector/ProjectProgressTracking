import Firebase from 'firebase';
import { STARTING_REQUEST, FINISHED_REQUEST } from './actionTypes';

const fb = new Firebase('https://makepptdash.firebaseio.com/');

function startingRequest(){
  return {
    type: STARTING_REQUEST
  }
}

function finishedRequest(response){
  return {
    type: FINISHED_REQUEST,
    payload: response
  }
}

export function fetchFromFirebase(){

  return function(dispatch){

    dispatch(startingRequest())

    return fb.child("project").once("value")
            .then(
              (response) => {dispatch(finishedRequest(response.val())), console.log('from dispatch',response)},
              (error) => console.log(error)
            )
  }
}
