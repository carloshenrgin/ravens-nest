const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Skills } = require("../models/skill");
const sanitizeFormData = require("../utils/sanitizeFormData");
const { handleError, handleNotFoundError } = require("../utils/errorHandler");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res, next) => {
  try {
    const skillData = await Skills.find();
    res.status(200).json(skillData);
  } catch (err) {
    handleError(err, req, res, next);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const skillData = sanitizeFormData(req.body);
    let skill = new Skills(skillData);
    skill = await skill.save();

    res.status(201).json(skill);
  } catch (err) {
    handleError(err, req, res, next);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const skillData = await Skills.findById(req.params.id);
    if (!skillData) {
      handleNotFoundError(res, "Skill not found");
      return;
    }
    res.status(200).json(skillData);
  } catch (err) {
    err.modelName = Skills.modelName;
    handleError(err, req, res, next);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const skillData = sanitizeFormData(req.body);
    const skill = await Skills.findByIdAndUpdate(req.params.id, skillData, {
      new: true,
      runValidators: true,
    });
    if (!skill) {
      handleNotFoundError(res, "Skill not found");
      return;
    }
    res.status(200).json(skill);
  } catch (err) {
    err.modelName = Skills.modelName;
    handleError(err, req, res, next);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const skillData = await Skills.findByIdAndDelete(req.params.id);
    if (!skillData) {
      handleNotFoundError(res, "Skill not found");
      return;
    }
    res.status(204).end();
  } catch (err) {
    err.modelName = Skills.modelName;
    handleError(err, req, res, next);
  }
});

module.exports = router;
