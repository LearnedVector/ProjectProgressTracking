import Firebase from 'firebase';
import { ARCHIVE_TO_FB, DONE_ARCHIVE_TO_FB } from './actionTypes';

const fb = new Firebase('https://makepptdash.firebaseio.com/');

export function ArchiveToFB(data, params){
  fb.child('archive').push({data: data, key: params})
  fb.child(`project/${params}`).remove()

  return {
    type: ARCHIVE_TO_FB
    }
}

export function doneArchiveToFB(){
  return {
    type: DONE_ARCHIVE_TO_FB
  }
}
