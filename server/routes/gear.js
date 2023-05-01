const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Gear } = require("../models/gear");
const sanitizeFormData = require("../utils/sanitizeFormData");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/register", (req, res) => {
  res.sendFile("/registerGear.html", { root: __dirname });
});

router.post("/register", async (req, res) => {
  const gearData = sanitizeFormData(req.body);

  let gear = new Gear(gearData);

  try {
    gear = await gear.save();

    res.json(gear);
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
