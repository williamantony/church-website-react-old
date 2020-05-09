import { setPageActive, setPageInactive } from "../actions";

/* DRAWER */
export const SET_DRAWER = "SET_DRAWER";

export const setDrawer = (state = {}) => {
  return {
    type: SET_DRAWER,
    payload: state,
  };
};



export const openDrawer = type => {
  return dispatch => {

    setPageInactive();

    dispatch(
      setDrawer({
        isMounted: true,
        isOpen: false,
        type,
      })
    );

    setTimeout(() => {
      dispatch(
        setDrawer({
          isOpen: true,
        })
      );
    }, 150);

  };
};



export const closeDrawer = () => {
  return dispatch => {
    
    dispatch(
      setDrawer({
        isOpen: false,
      })
    );

    setTimeout(() => {
      dispatch(
        setDrawer({
          isMounted: false,
        })
      );

      setPageActive();
    }, 500);

  };
};



/* SEARCH DRAWER */
export const showSearch = () => {
  return dispatch => {
    dispatch(openDrawer("search"));
  };
};



/* NAVIGATION DRAWER */
export const showNavigation = () => {
  return dispatch => {
    dispatch(openDrawer("navigation"));
  };
};
