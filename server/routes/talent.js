const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Talent } = require("../models/talent");
const sanitizeFormData = require("../utils/sanitizeFormData");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/register", (req, res) => {
  res.sendFile("/registerTalent.html", { root: __dirname });
});

router.post("/register", async (req, res) => {
  const talentData = sanitizeFormData(req.body);

  let talent = new Talent(talentData);

  try {
    talent = await talent.save();

    res.json(talent);
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
