const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Kin } = require("../models/kin");
const { model: Talent } = require("../models/talent");
const sanitizeFormData = require("../utils/sanitizeFormData");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/register", (req, res) => {
  res.sendFile("/registerKin.html", { root: __dirname });
});

router.post("/register", async (req, res) => {
  const kinData = sanitizeFormData(req.body);

  kinData.talent = await Talent.findOne({ kin: kinData.name });

  let kin = new Kin(kinData);

  try {
    kin = await kin.save();

    res.json(kin);
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
