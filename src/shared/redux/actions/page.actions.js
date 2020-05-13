/* PAGE */
export const SET_PAGE = "SET_PAGE";

export const setPage = (state = {}) => {
  return {
    type: SET_PAGE,
    payload: state,
  };
};

/* PAGE NAME */
export const setPageName = (name) => {
  return (dispatch) => {
    dispatch(setPage({ name }));
  };
};

/* PAGE ACTIVE/INACTIVE */
export const setPageActive = () => {
  return (dispatch) => {
    dispatch(
      setPage({
        isActive: true,
        isScrollable: true,
      })
    );
  };
};

export const setPageInactive = () => {
  return (dispatch) => {
    dispatch(
      setPage({
        isActive: false,
        isScrollable: false,
      })
    );
  };
};
