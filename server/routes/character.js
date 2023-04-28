const express = require("express");
const router = express.Router();
const { model: Character } = require("../models/character");

router.get("/base", async (req, res) => {
  const character = new Character({
    _id: "baseCharacter",
  });

  res.json(character);
});

module.exports = router;
