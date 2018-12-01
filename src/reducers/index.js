import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import planets from './planetReducer';
import vehicles from './vehicleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  planets,
  vehicles,
  ajaxCallsInProgress
});

export default rootReducer;
