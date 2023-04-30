const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Skills } = require("../models/skill");
const sanitizeFormData = require("../utils/sanitizeFormData");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/register", (req, res) => {
  res.sendFile("/registerSkill.html", { root: __dirname });
});

router.post("/register", async (req, res) => {
  const skillData = sanitizeFormData(req.body);

  let skill = new Skills(skillData);

  try {
    skill = await skill.save();

    res.json(skill);
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
