import {
  GET_POKEMONS,
  GET_TYPES,
  GET_NAME_POKEMONS,
  POST_POKEMON,
  GET_DETAILS,
  RESET_FILTERS,
  ORDER_BY_NAME,
  FILTER_CREATED,
  ORDER_BY_ATTACK,
  FILTER_BY_TYPE,
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

    case POST_POKEMON: // Post Pokemon
      return {
        ...state,
      };

    case GET_DETAILS: // Get Details
      return {
        ...state,
        details: action.payload,
      };

    case RESET_FILTERS: // Reset Filters
      return {
        ...state,
        pokemons: [],
        details: [],
      };

    case ORDER_BY_NAME: // Order in alphabetical order
      let sortedName;
      if (action.payload === "asc") {
        sortedName = state.pokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "desc") {
        sortedName = state.pokemons.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "all") {
        sortedName = state.pokemons.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }
          return 0;
        });
      }
      return {
        ...state,
        pokemons: sortedName,
      };

    case FILTER_CREATED: // Filter by created in API or DB
      const createdFilter =
        action.payload === "created"
          ? state.allPokemons.filter((el) => el.createdInDb)
          : state.allPokemons.filter((el) => !el.createdInDb);
      return {
        ...state,
        // pokemons: action.payload === "all" ? state.allPokemons : createdFilter,
        pokemons:
          action.payload === "all"
            ? state.allPokemons
            : createdFilter.length > 0
            ? createdFilter
            : state.allPokemons,
      };

    case ORDER_BY_ATTACK: // Order by attack strength
      let sortedAttack;
      if (action.payload === "strong") {
        sortedAttack = state.pokemons.sort(function (a, b) {
          if (a.attack > b.attack) {
            return -1;
          }
          if (b.attack > a.attack) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "weak") {
        sortedAttack = state.pokemons.sort(function (a, b) {
          if (a.attack > b.attack) {
            return 1;
          }
          if (b.attack > a.attack) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "all") {
        sortedAttack = state.pokemons.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (b.id > a.id) {
            return -1;
          }
          return 0;
        });
      }
      return {
        ...state,
        pokemons: sortedAttack,
      };

    case FILTER_BY_TYPE: // Filter by types
      const pokemonByType = state.allPokemons;
      const filteredState =
        action.payload === "all"
          ? pokemonByType
          : pokemonByType.filter((e) => e.types?.includes(action.payload));

      return {
        ...state,
        pokemons: filteredState.length > 0 ? filteredState : pokemonByType,
      };

    default:
      return state;
  }
}

export default rootReducer;
