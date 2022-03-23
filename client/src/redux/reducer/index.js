const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS": //TRAER TODOS LOS POKEMONES
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
        detail: [],
      };

    case "GET_TYPES": //TRAE TODOS LOS TIPOS
      return {
        ...state,
        types: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
