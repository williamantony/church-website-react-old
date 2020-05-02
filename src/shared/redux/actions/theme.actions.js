/* NAVIGATION */
export const SET_NAVIGATION_VISIBILITY = "SET_NAVIGATION_VISIBILITY";

export const setNavigationVisibility = (isNavigationVisible = false) => {
  return {
    type: SET_NAVIGATION_VISIBILITY,
    payload: {
      isNavigationVisible,
    },
  };
};

export const showNavigation = () => {
  return dispatch => {
    dispatch(setNavigationVisibility(true));
  };
};

export const hideNavigation = () => {
  return dispatch => {
    dispatch(setNavigationVisibility(false));
  };
};



/* SEARCH BAR */
export const SET_SEARCHBAR_VISIBILITY = "SET_SEARCHBAR_VISIBILITY";

export const setSearchBarVisibility = (isSearchBarVisible = false) => {
  return {
    type: SET_SEARCHBAR_VISIBILITY,
    payload: {
      isSearchBarVisible,
    },
  };
};

export const showSearchBar = () => {
  return dispatch => {
    dispatch(setSearchBarVisibility(true));
  };
};

export const hideSearchBar = () => {
  return dispatch => {
    dispatch(setSearchBarVisibility(false));
  };
};



/* PAGE */
export const SET_PAGE_ACTIVE = "SET_PAGE_ACTIVE";

export const setPageActive = () => {
  return {
    type: SET_PAGE_ACTIVE,
  };
};
