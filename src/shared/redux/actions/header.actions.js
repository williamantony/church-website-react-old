/* HEADER */
export const SET_HEADER = "SET_HEADER";

export const setHeader = (state = {}) => {
  return {
    type: SET_HEADER,
    payload: state,
  };
};

export const setHeaderTheme = (theme) => {
  return (dispatch) => {
    const validThemes = ["transparent", "light", "dark"];

    if (validThemes.includes(theme)) {
      dispatch(
        setHeader({
          theme,
        })
      );
    }
  };
};

export const showHeader = () => {
  return (dispatch) => {
    dispatch(
      setHeader({
        isVisible: true,
      })
    );
  };
};

export const hideHeader = () => {
  return (dispatch) => {
    dispatch(
      setHeader({
        isVisible: false,
      })
    );
  };
};
