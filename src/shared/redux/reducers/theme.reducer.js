import {
  SET_NAVIGATION_VISIBILITY,
  SET_SEARCHBAR_VISIBILITY,
  SET_PAGE_ACTIVE,
} from "../actions";

const initialState = {
  isNavigationVisible: false,
  isSearchBarVisible: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    
    case SET_NAVIGATION_VISIBILITY:
      return {
        ...state,
        isNavigationVisible: action.payload.isNavigationVisible,
      };

    case SET_SEARCHBAR_VISIBILITY:
      return {
        ...state,
        isSearchBarVisible: action.payload.isSearchBarVisible,
      };

    case SET_PAGE_ACTIVE:
      return {
        ...state,
        isNavigationVisible: false,
        isSearchBarVisible: false,
      };

    default:
      return state;
  }
}
