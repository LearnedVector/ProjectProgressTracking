import { combineReducers } from 'redux';
import formReducer from './formReducer';
import projectReducer from './projectReducer';
import projectDetailReducer from './projectDetailReducer';
import editProjectDetailReducer from './editProjectDetailReducer';
import progressDisplayReducer from './progressDisplayReducer';

const rootReducer = combineReducers({
  form: formReducer,
  project: projectReducer,
  projectDetail: projectDetailReducer,
  progressDisplay: progressDisplayReducer
});

export default rootReducer;
