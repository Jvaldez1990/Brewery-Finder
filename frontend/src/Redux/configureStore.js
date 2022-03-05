import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Breweries } from "./breweries";
import { Token } from "./token";
import { User } from "./user";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      token: Token,
      user: User,
      breweries: Breweries,
    }),
    applyMiddleware(thunk)
  );

  return store;
};
