import { combineReducers } from 'redux';
import formReducer from './formReducer';
import projectReducer from './projectReducer';
import projectDetailReducer from './projectDetailReducer';
import editProjectDetailReducer from './editProjectDetailReducer';
import progressDisplayReducer from './progressDisplayReducer';
import archiveReducer from './archiveReducer';

const rootReducer = combineReducers({
  form: formReducer,
  project: projectReducer,
  projectDetail: projectDetailReducer,
  progressDisplay: progressDisplayReducer,
  editProjDets: editProjectDetailReducer,
  archive: archiveReducer
});

export default rootReducer;
