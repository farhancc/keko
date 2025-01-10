import { CHANGE_SEARCH_FIELD } from "./constents";

const initialState = {
  searchField: "",
};
export const searchRoborts = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};
