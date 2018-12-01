import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function vehicle(state = initialState.vehicles, action) {
  switch (action.type) {
    case types.LOAD_VEHICLE_SUCCESS:
      return action.vehicles;

    default:
      return state;
  }
}
