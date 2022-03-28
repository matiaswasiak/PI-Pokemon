const axios = require("axios");
const { Type } = require("../db");
const { API_POKEMON_TYPE } = require("../utils/Globals");

// Add types to the database
const addTypeDb = async () => {
  try {
    const reqType = await axios.get(API_POKEMON_TYPE);
    const resType = reqType.data.results;

    resType.map(({ name }) => {
      Type.create({
        name,
      });
    });
  } catch (error) {
    console.error(error);
  }
};
addTypeDb();

// Types are fetched from the database and sent to the router
const getTypeApi = async () => {
  const result = await Type.findAll();
  return result;
};

module.exports = {
  getTypeApi,
};
