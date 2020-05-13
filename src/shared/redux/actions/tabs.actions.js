/* TABS */
export const SELECT_TAB = "SELECT_TAB";

export const selectTab = (set, tab) => {
  return {
    type: SELECT_TAB,
    payload: {
      set,
      tab,
    },
  };
};

export const initTabSelection = (set, tab) => {
  return (dispatch, getState) => {
    if (!getState().tabs.selection[set]) {
      dispatch(selectTab(set, tab));
    }
  };
};
