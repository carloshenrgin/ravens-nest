const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Armor } = require("../models/armor");
const sanitizeFormData = require("../utils/sanitizeFormData");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/register", (req, res) => {
  res.sendFile("/registerArmor.html", { root: __dirname });
});

router.post("/register", async (req, res) => {
  const armorData = sanitizeFormData(req.body);

  armorData.features = armorData.features
    ?.split(";")
    .map((feature) => feature.trim());

  let armor = new Armor(armorData);

  try {
    armor = await armor.save();

    res.json(armor);
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
