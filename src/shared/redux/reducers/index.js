import { combineReducers } from "redux";
import app from "./app.reducer";
import theme from "./theme.reducer";

export default combineReducers({
  app,
  theme,
});
