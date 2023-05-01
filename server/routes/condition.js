const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Conditions } = require("../models/condition");
const sanitizeFormData = require("../utils/sanitizeFormData");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/register", (req, res) => {
  res.sendFile("/registerCondition.html", { root: __dirname });
});

router.post("/register", async (req, res) => {
  const conditionData = sanitizeFormData(req.body);

  let condition = new Conditions(conditionData);

  try {
    condition = await condition.save();

    res.json(condition);
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
