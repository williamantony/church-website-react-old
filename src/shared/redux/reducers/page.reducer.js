import { SET_PAGE } from "../actions";

const initialState = {
  isActive: true,
  isScrollable: true,
};

export default function(state = initialState, action) {
  switch(action.type) {

    case SET_PAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
