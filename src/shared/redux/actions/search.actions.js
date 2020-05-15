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
  return (dispatch) => {
    dispatch(
      setSearch({
        isFocused: true,
      })
    );
  };
};

export const unfocusSearchInput = () => {
  return (dispatch) => {
    dispatch(
      setSearch({
        isFocused: false,
      })
    );
  };
};
