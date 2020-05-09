import { SET_SEARCH } from "../actions";

const initialState = {
  isFocused: false,
};

export default function(state = initialState, action) {
  switch(action.type) {

    case SET_SEARCH:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
