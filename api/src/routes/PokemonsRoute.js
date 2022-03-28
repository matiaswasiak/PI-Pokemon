const { Router } = require("express");
const {
  getAllPokemons,
  getPokemonByName,
  getPokemonsDb,
  deletePokemon,
} = require("../controllers/PokemonController");
const { Pokemon, Type } = require("../db");

const router = Router();

// Get Pokemons & Get Pokemons By Name
router.get("/", async (req, res) => {
  const name = req.query.name;

  // Get Pokemons By Name
  if (name) {
    const pokemonByName = await getPokemonByName(name);

    if (pokemonByName) return res.status(200).send(pokemonByName);
    else {
      const pokemonFromDbByName = await getPokemonsDb().then((res) =>
        res.filter(
          (p) => p.name.toLowerCase().trim() === name.toLowerCase().trim()
        )
      );

      if (pokemonFromDbByName.length > 0)
        return res.status(200).send(pokemonFromDbByName);
      else
        return res
          .status(404)
          .send(`Pokemon with the name ${name} was not found :/`);
    }
  } else {
    // Get Pokemons
    try {
      return res.status(200).send(await getAllPokemons());
    } catch (error) {
      console.error(error);
      return res.status(404).send("Pokemons not found");
    }
  }
});

// Get PokemonsById
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allPokemons = await getAllPokemons();
  try {
    if (id) {
      const pokemonId = await allPokemons.filter((e) => e.id == id);
      pokemonId.length
        ? res.status(200).json(pokemonId)
        : res.status(404).send("Pokemon not found");
    }
  } catch (error) {
    console.error(error);
  }
});

// Create a Pokemon
router.post("/", async (req, res) => {
  const {
    name,
    health,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
    createdInDb,
    type,
  } = req.body;

  let newPokemon = await Pokemon.create({
    name,
    health,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
    createdInDb,
  });

  let typeDb = await Type.findAll({
    where: {
      name: type,
    },
  });

  newPokemon.addType(typeDb);
  res.send("The pokemon has been successfully created");
});

// Delete a Pokemon
router.delete("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;

  if (idPokemon) {
    const delPokemon = await deletePokemon(idPokemon);

    return res.status(200).send(delPokemon);
  } else
    res.status(404).send(`Pokemon with the id ${idPokemon} was not found :/`);
});

module.exports = router;
