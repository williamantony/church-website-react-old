import { combineReducers } from "redux";
import drawer from "./drawer.reducer";
import tabs from "./tabs.reducer";
import page from "./page.reducer";
import search from "./search.reducer";

export default combineReducers({
  drawer,
  tabs,
  page,
  search,
});
