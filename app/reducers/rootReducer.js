import { combineReducers } from 'redux';
import formReducer from './formReducer';
import projectReducer from './projectReducer';
import projectDetailReducer from './projectDetailReducer';

const rootReducer = combineReducers({
  form: formReducer,
  project: projectReducer,
  projectDetail: projectDetailReducer
});

export default rootReducer;
