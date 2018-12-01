import * as types from "./actionTypes";
import {beginAjaxCall} from "./ajaxStatusActions";
import axios from "axios";

export function loadVehicleSuccess(vehicles) {
  return {type: types.LOAD_VEHICLE_SUCCESS, vehicles};
}

export function loadVehicle() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return axios.get('https://findfalcone.herokuapp.com/vehicles')
      .then(response => {
        dispatch(loadVehicleSuccess(response.data));
      });
  };
}
