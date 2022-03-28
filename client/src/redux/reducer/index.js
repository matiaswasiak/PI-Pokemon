import {
  GET_POKEMONS,
  GET_TYPES,
  GET_NAME_POKEMONS,
  POST_POKEMON,
  RESET_FILTERS,
  GET_DETAILS,
} from "../actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  details: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS: // Get all pokemons
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
        details: [],
      };

    case GET_TYPES: // Get all types
      return {
        ...state,
        types: action.payload,
      };

    case GET_NAME_POKEMONS: // Get pokemon by name
      return {
        ...state,
        pokemons: action.payload,
        details: action.payload,
      };

    case POST_POKEMON:
      return {
        ...state,
      };

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case RESET_FILTERS:
      return {
        ...state,
        pokemons: [],
        details: [],
      };

    case "ORDER_BY_NAME": //ORDEN ALFABETICO
      let sortedArr =
        action.payload === "asc"
          ? state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedArr,
      };

    case "FILTER_CREATED": //FILTRO POR CREADOS EN API O BASE DE DATOS
      const createdFilter =
        action.payload === "created"
          ? state.allPokemons.filter((el) => el.createdInDb)
          : state.allPokemons.filter((el) => !el.createdInDb);
      return {
        ...state,
        pokemons: action.payload === "all" ? state.allPokemons : createdFilter,
      };

    case "ORDER_BY_ATTACK": //ORDENA POR FUERZA DE ATAQUE
      let sortedAttack =
        action.payload === "strong"
          ? state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedAttack,
      };

    case "FILTER_BY_TYPE":
      const pokemonByType = state.allPokemons;
      const estadoFiltrado =
        action.payload === "all"
          ? pokemonByType
          : pokemonByType.filter((e) => e.types.includes(action.payload));
      console.log(estadoFiltrado);
      return {
        ...state,
        pokemons: estadoFiltrado,
      };

    default:
      return state;
  }
}

export default rootReducer;
