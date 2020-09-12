import {
  SET_SEARCH_STRING,
  SET_PAGE_NO,
  SET_DATA,
  RESET_DATA,
  RESET_PAGE_NO,
} from "./actionTypes";
import Axios from "axios";
import { API_URL } from "./../../constants";

export function setSearchString(searchString) {
  return {
    type: SET_SEARCH_STRING,
    searchString,
  };
}

export function setPageNo(pageNo) {
  return {
    type: SET_PAGE_NO,
    pageNo,
  };
}

export function resetPageNo() {
  return {
    type: RESET_PAGE_NO,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    data,
  };
}

export function resetData() {
  return {
    type: RESET_DATA,
  };
}

export function fetchData() {
  return (dispatch, getState) => {
    Axios.get(
      `${API_URL}?q=${getState().app.searchString}&limit=16&page=${
        getState().app.pageNo
      }`
    ).then((response) => {
      if (response.statusText === "OK") {
        dispatch(setData(response.data.results));
        dispatch(setPageNo(getState().app.pageNo + 1));
      }
    });
  };
}
