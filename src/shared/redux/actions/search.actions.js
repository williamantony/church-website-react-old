/* SEARCH */
export const SET_SEARCH = "SET_SEARCH";

export const setSearch = (state = {}) => {
  return {
    type: SET_SEARCH,
    payload: state,
  };
};



/* SEARCH FOCUS/UNFOCUS */
export const focusSearchInput = () => {
  return dispatch => {
    const state = {
      isFocused: true,
    };
    dispatch(setSearch(state));
  };
};

export const unfocusSearchInput = () => {
  return dispatch => {
    const state = {
      isFocused: false,
    };
    dispatch(setSearch(state));
  };
};
