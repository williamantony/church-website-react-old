/* HEADER */
export const INIT_HEADER = "INIT_HEADER";
export const SHOW_HEADER = "SHOW_HEADER";
export const HIDE_HEADER = "HIDE_HEADER";
export const SET_HEADER_THEME = "SET_HEADER_THEME";

export const initHeader = (theme) => {
  return {
    type: INIT_HEADER,
    payload: {
      theme: {
        passed: theme,
        current: theme,
      },
    },
  };
};

export const showHeader = () => {
  return {
    type: SHOW_HEADER,
    payload: {
      isVisible: true,
    },
  };
};

export const hideHeader = () => {
  return {
    type: HIDE_HEADER,
    payload: {
      isVisible: false,
    },
  };
};

export const setHeaderTheme = (theme) => {
  return (dispatch, getState) => {
    const state = getState().header;
    const currentTheme = theme || state.theme.passed;

    if (state.theme.current !== currentTheme) {
      dispatch({
        type: SET_HEADER_THEME,
        payload: {
          theme: {
            current: currentTheme,
          },
        },
      });
    }
  };
};
