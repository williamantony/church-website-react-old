import { SET_DRAWER } from "../actions";

const initialState = {
  isMounted: false,
  isOpen: false,
  type: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DRAWER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
