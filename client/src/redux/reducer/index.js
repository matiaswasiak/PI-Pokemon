import {
  GET_POKEMONS,
  GET_TYPES,
  GET_NAME_POKEMONS,
  POST_POKEMON,
  RESET_FILTERS,
  FILTER_CREATED,
  FILTER_BY_TYPE,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
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

    case RESET_FILTERS:
      return {
        ...state,
        pokemons: [],
        details: [],
      };

    case FILTER_CREATED:
      let createdFilter;

      action.payload === "All" || action.payload === ""
        ? (createdFilter = [])
        : action.payload === "Existent"
        ? (createdFilter = state.allPokemons.filter(
            (o) => o.createdInDb === false
          ))
        : (createdFilter = state.allPokemons.filter(
            (o) => o.createdInDb === true
          )).length > 0
        ? (createdFilter = [...createdFilter])
        : (createdFilter = ["noData"]);

      return {
        ...state,
        pokemons: createdFilter,
      };

    case FILTER_BY_TYPE:
      const pokemonByType = state.allPokemons;
      const filteredState =
        action.payload === "all"
          ? pokemonByType
          : pokemonByType.filter((e) => e.types.includes(action.payload));

      return {
        ...state,
        pokemons: filteredState,
      };

    case ORDER_BY_NAME:
      let sortedArray =
        action.payload === "asc"
          ? state.pokemons.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return 1;
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
        pokemons: sortedArray,
      };

    case ORDER_BY_ATTACK:
      let sortedAttack =
        action.payload === "strong"
          ? state.pokemones.sort(function (a, b) {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            })
          : state.pokemones.sort(function (a, b) {
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

    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
