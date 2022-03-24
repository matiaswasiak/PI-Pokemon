const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { API_POKEMON } = require("../utils/Globals");

// 1. - Get all Pokemons from API.
const getPokemonsApi = async () => {
  try {
    const pokemonsRequest = await axios.get(API_POKEMON);
    const pokemonsSubrequest = pokemonsRequest.data.results.map((obj) =>
      axios.get(obj.url)
    );

    const pokemonsInfoUrl = await axios.all(pokemonsSubrequest);
    let pokemons = pokemonsInfoUrl.map((obj) => obj.data);
    let pokemonsInfo = pokemons.map((pokemon) => objPokemonsApi(pokemon));
    return pokemonsInfo;
  } catch (error) {
    console.error("Error in getPokemonsApi:", error.message);
    return error;
  }
};

// Get Pokemon object from API.
const objPokemonsApi = (p) => {
  const objPokeapi = {
    id: p.id,
    name: p.name,
    health: p.stats[0].base_stat,
    attack: p.stats[1].base_stat,
    defense: p.stats[2].base_stat,
    speed: p.stats[5].base_stat,
    height: p.height,
    weight: p.weight,
    sprite: p.sprites.other["official-artwork"].front_default,
    types:
      p.types.length < 2
        ? [p.types[0].type.name]
        : [p.types[0].type.name, p.types[1].type.name],
  };
  return objPokeapi;
};

// 2. - Bring the Pokemons from the DB
const getPokemonsDb = async () => {
  const pokemonDb = await Pokemon.findAll({
    include: Type,
  });

  const objPokeDb = pokemonDb.map((pokemonDb) => {
    return {
      id: pokemonDb.dataValues.id,
      name: pokemonDb.dataValues.name,
      health: pokemonDb.dataValues.health,
      attack: pokemonDb.dataValues.attack,
      defense: pokemonDb.dataValues.defense,
      speed: pokemonDb.dataValues.speed,
      height: pokemonDb.dataValues.height,
      weight: pokemonDb.dataValues.weight,
      sprite: pokemonDb.dataValues.image,
      types: pokemonDb.dataValues.types?.map((e) => e.name),
      createdInDb: pokemonDb.dataValues.createdInDb,
    };
  });

  try {
    return objPokeDb;
  } catch (error) {
    console.log("Error in getPokemonsDb:", error.message);
  }
};

// 3. - Union of all the Pokemons of API and DB
const getAllPokemons = async () => {
  try {
    const pokemonApiData = await getPokemonsApi();
    const pokemonDbData = await getPokemonsDb();
    return [...pokemonApiData, ...pokemonDbData];
  } catch (error) {
    console.error("Error in getAllPokemons:", error.message);
    return error;
  }
};

// Get PokemonByName
const getPokemonByName = async (name) => {
  try {
    let data = [];
    let dataSpecies = [];
    name = name.toLowerCase().trim();

    let request = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (res) => res.data
    );
    data.push(request);

    let requestSpecie = await axios(data[0].species.url).then(
      (res) => res.data
    );
    dataSpecies.push(requestSpecie);

    return data.map((p, index) => {
      return {
        id: p.id,
        name: p.name,
        health: p.stats[0].base_stat,
        attack: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        height: p.height,
        weight: p.weight,
        sprite: p.sprites.other["official-artwork"].front_default,
        types:
          p.types.length < 2
            ? [p.types[0].type.name]
            : [p.types[0].type.name, p.types[1].type.name],
      };
    });
  } catch (error) {
    console.error("Error in getPokemonByName:", error.message);
  }
};

// 4. - Delete a pokemon from Db
const deletePokemon = async (id) => {
  try {
    await Pokemon.destroy({
      where: {
        id: id,
      },
    });

    return "Your pokemon was successfully deleted";
  } catch (error) {
    console.error("Error in deletePokemon:", error.message);
  }
};

module.exports = {
  getAllPokemons,
  deletePokemon,
  getPokemonByName,
};
