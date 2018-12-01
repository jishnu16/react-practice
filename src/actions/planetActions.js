import axios from 'axios';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPlanetSuccess(planets) {
  return {type: types.LOAD_PLANET_SUCCESS, planets};
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.

export function loadPlanet() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get('https://findfalcone.herokuapp.com/planets')
      .then(response => {
        dispatch(loadPlanetSuccess(response.data));
      });
  };
}



