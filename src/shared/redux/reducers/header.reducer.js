import { SET_HEADER } from "../actions";

const initialState = {
  theme: "transparent",
  isVisible: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_HEADER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
