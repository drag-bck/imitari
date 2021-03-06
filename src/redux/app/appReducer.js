import {
  SET_SEARCH_STRING,
  SET_PAGE_NO,
  RESET_PAGE_NO,
  SET_DATA,
  RESET_DATA,
  SET_URL,
} from "./actionTypes";

const initialState = {
  searchString: "",
  pageNo: 1,
  data: [],
  currentUrl: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_STRING:
      return {
        ...state,
        searchString: action.searchString,
      };
    case SET_PAGE_NO:
      return {
        ...state,
        pageNo: action.pageNo,
      };

    case RESET_PAGE_NO:
      return {
        ...state,
        pageNo: 1,
      };
    case SET_DATA:
      return {
        ...state,
        data: [...state.data, ...action.data],
      };
    case RESET_DATA:
      return {
        ...state,
        data: [],
      };
    case SET_URL:
      return {
        ...state,
        currentUrl: action.url,
      };
    default:
      return state;
  }
};
