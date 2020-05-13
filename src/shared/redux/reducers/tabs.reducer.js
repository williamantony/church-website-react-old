import { SELECT_TAB } from "../actions";

const initialState = {
  selection: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.payload.set]: action.payload.tab,
        },
      };

    default:
      return state;
  }
}
