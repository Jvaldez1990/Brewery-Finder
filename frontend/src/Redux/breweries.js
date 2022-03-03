import * as ActionTypes from "./actionTypes";

export const Breweries = (state = { breweries: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BREWERY:
      return { ...state, breweries: action.payload };
  }
};
