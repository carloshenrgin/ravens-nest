const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Professions } = require("../models/profession");
const { model: Talent } = require("../models/talent");
const { model: Skill } = require("../models/skill");
const sanitizeFormData = require("../utils/sanitizeFormData");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/register", (req, res) => {
  res.sendFile("/registerProfession.html", { root: __dirname });
});

router.post("/register", async (req, res) => {
  const professionData = sanitizeFormData(req.body);

  const skillArray = professionData.skills
    ?.split(";")
    .map((skill) => skill.trim());

  const [talentResult, skillResult] = await Promise.allSettled([
    Talent.find({
      profession: professionData.name,
    }),
    Skill.find({
      name: { $in: skillArray },
    }),
  ]);

  if (
    talentResult.status === "fulfilled" &&
    skillResult.status === "fulfilled"
  ) {
    professionData.talents = talentResult.value;
    professionData.skills = skillResult.value;

    professionData.pride = professionData.pride
      ?.split(";")
      .map((pride) => pride.trim());

    professionData.darkSecret = professionData.darkSecret
      ?.split(";")
      .map((darkSecret) => darkSecret.trim());

    professionData.relationships = professionData.relationships
      ?.split(";")
      .map((relationships) => relationships.trim());

    let profession = new Professions(professionData);

    try {
      profession = await profession.save();

      res.json(profession);
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
  } else {
    console.log(talentResult?.reason, skillResult?.reason);

    res.write("<h1>Promises failed</h1>");
    res.send();
  }
});

module.exports = router;
