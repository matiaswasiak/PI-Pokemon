import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_NAME_POKEMONS = "GET_NAME_POKEMONS";

// UNION ENTRE BACK Y FRONT TRAE LOS POKEMONES DE LA API
export function getPokemons() {
  return async function (dispatch) {
    const pokemons = await axios.get("http://localhost:3001/pokemons");
    //TRAE TODOS LOS POKEMONES AL HOME CON SUS TIPOS E IMAGENES
    return dispatch({
      type: GET_POKEMONS,
      payload: pokemons.data,
    });
  };
}

//TRAE TODOS LOS TIPOS DE POKEMONES
export function getTypes() {
  return async function (dispatch) {
    const info = await axios.get("http://localhost:3001/types");
    return dispatch({ type: GET_TYPES, payload: info.data });
  };
}

//BUSQUEDA POR NOMBRE
export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/pokemons?name=" + name);
      return dispatch({
        type: GET_NAME_POKEMONS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
