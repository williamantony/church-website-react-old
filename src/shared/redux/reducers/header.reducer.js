import {
  INIT_HEADER,
  SHOW_HEADER,
  HIDE_HEADER,
  SET_HEADER_THEME,
} from "../actions";

const initialState = {
  isVisible: false,
  theme: {
    default: "transparent",
    passed: null,
    current: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_HEADER:
    case SET_HEADER_THEME:
      return {
        ...state,
        theme: {
          ...state.theme,
          ...action.payload.theme,
        },
      };

    case SHOW_HEADER:
    case HIDE_HEADER:
      return {
        ...state,
        isVisible: action.payload.isVisible,
      };

    default:
      return state;
  }
}
