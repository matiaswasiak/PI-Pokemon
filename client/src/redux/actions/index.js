import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_NAME_POKEMONS = "GET_NAME_POKEMONS";
export const POST_POKEMON = "POST_POKEMON";
export const GET_DETAILS = "GET_DETAILS";
export const RESET_FILTERS = "RESET_FILTERS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";

// Get pokemons from the API.
export function getPokemons() {
  return async function (dispatch) {
    try {
      const pokemons = await axios.get("http://localhost:3001/pokemons");
      // Get all pokemons to the home with their data.
      return dispatch({
        type: GET_POKEMONS,
        payload: pokemons.data,
      });
    } catch (error) {
      console.error("Error in action getPokemons:", error.message);
    }
  };
}

// Get all types of pokemons
export function getTypes() {
  return async function (dispatch) {
    try {
      const pokemonsTypes = await axios.get("http://localhost:3001/types");
      return dispatch({ type: GET_TYPES, payload: pokemonsTypes.data });
    } catch (error) {
      console.error("Error in action getTypes:", error.message);
    }
  };
}

// Search by name
export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/pokemons?name=" + name);
      return dispatch({
        type: GET_NAME_POKEMONS,
        payload: json.data,
      });
    } catch (error) {
      console.error("Error in action getPokemonByName:", error.message);
      dispatch({ type: GET_NAME_POKEMONS, payload: [name] });
    }
  };
}

// Creation of a new pokemon
export function postPokemon(payload) {
  return async function (dispatch) {
    try {
      const pokemonCreated = await axios.post(
        "http://localhost:3001/pokemons/",
        payload
      );
      dispatch({ type: POST_POKEMON, payload: pokemonCreated });
    } catch (error) {
      console.error("Error in action postPokemon:", error.message);
    }
  };
}

// Get details
export function getDetails(id) {
  // With Promises
  // return function (dispatch) {
  //   axios.get("http://localhost:3001/pokemons/" + id).then((res) => {
  //     dispatch({
  //       type: "GET_DETAILS",
  //       payload: res.data,
  //     });
  //   });
  // };

  // With Async/Await
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/pokemons/" + id);
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    } catch (error) {
      console.error("Error in action getDetails:", error.message);
    }
  };
}

// Reset filters
export function resetFilters() {
  return {
    type: RESET_FILTERS,
  };
}

// Order in alphabetical order
export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

// Filter by created in API or DB
export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

// Order by attack strength
export function orderByAttack(payload) {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
}

// Filter by types
export function filterType(payload, createdApiDb) {
  return {
    type: FILTER_BY_TYPE,
    payload,
    createdApiDb,
  };
}
