import { baseUrl } from "../Shared/baseUrl";
import * as ActionTypes from "./actionTypes";

export const addToken = (token) => ({
  type: ActionTypes.ADD_TOKEN,
  payload: token,
});

export const addUser = (user) => ({
  type: ActionTypes.ADD_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: ActionTypes.DELETE_USER,
});

// export const addBrewery = (breweries) => ({
//   type: ActionTypes.ADD_BREWERY,
//   payload: breweries,
// });

// export const fetchBreweries = () => async (dispatch) => {
//   const response = await fetch(baseUrl + "breweries");
//   const breweries = await response.json();
//   return dispatch(addBrewery(breweries));
// };

// export const addBeer = (beers) => ({
//   type: ActionTypes.ADD_BEER,
//   payload: beers,
// });

// export const fetchBeer = () => async (dispatch) => {
//   const response = await fetch(baseUrl + "beers");
//   const beers = await response.json();
//   return dispatch(addBeer(beers))
// }
