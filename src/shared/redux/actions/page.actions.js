/* PAGE */
export const SET_PAGE = "SET_PAGE";

export const setPage = (state = {}) => {
  return {
    type: SET_PAGE,
    payload: state,
  };
};



/* PAGE ACTIVE/INACTIVE */
export const setPageActive = () => {
  return dispatch => {
    dispatch({
      isActive: true,
      isScrollable: true,
    });
  };
};

export const setPageInactive = () => {
  return dispatch => {
    dispatch({
      isActive: false,
      isScrollable: false,
    });
  };
};
