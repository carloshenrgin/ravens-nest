const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Weapon } = require("../models/weapon");
const sanitizeFormData = require("../utils/sanitizeFormData");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/register", (req, res) => {
  res.sendFile("/registerWeapons.html", { root: __dirname });
});

router.post("/register", async (req, res) => {
  const weaponData = sanitizeFormData(req.body);

  let weapon = new Weapon(weaponData);

  try {
    weapon = await weapon.save();

    res.json(weapon);
  } catch (err) {
    console.error(err);

    let errorString = "";
    for (let error in err.errors) {
      errorString += `<li>${error}</li>`;
    }
    res.write("<h1>Errors</h1>");
    res.write(`<ul>${errorString}</ul>`);
    res.send();
  }
});

module.exports = router;
