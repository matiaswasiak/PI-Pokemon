const { Router } = require("express");

// Import all routers
const pokemonsRoutes = require("./PokemonsRoute.js");
const typesRoutes = require("./TypesRoute.js");

const router = Router();

// Configure the routers
router.use("/pokemons", pokemonsRoutes);
router.use("/types", typesRoutes);

module.exports = router;
