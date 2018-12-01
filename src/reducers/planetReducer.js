import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function planet(state = initialState.planets, action) {
  switch (action.type) {
    case types.LOAD_PLANET_SUCCESS:
      return action.planets;

    default:
      return state;
  }
}
