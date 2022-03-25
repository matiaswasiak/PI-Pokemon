const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS": // Get all pokemons
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
        detail: [],
      };

    case "GET_TYPES": // Get all types
      return {
        ...state,
        types: action.payload,
      };

    case "GET_NAME_POKEMONS": // Get pokemon by name
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
