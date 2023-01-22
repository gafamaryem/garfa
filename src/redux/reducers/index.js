// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "redux";
import candidate from "./candidate";
import annonce from "./Annonce";

export default combineReducers({
  candidate,
  annonce,
});
