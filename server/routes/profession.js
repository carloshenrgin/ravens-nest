const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { model: Professions } = require("../models/profession");
const { model: Talents } = require("../models/talent");
const { model: Skills } = require("../models/skill");
const sanitizeFormData = require("../utils/sanitizeFormData");
const {
  handleBadRequestError,
  handleInternalServerError,
  handleNotFoundError,
  handleError,
} = require("../utils/errorHandler");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (req, res, next) => {
  try {
    const professionData = await Professions.find();
    res.status(200).json(professionData);
  } catch (err) {
    handleError(err, req, res, next);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const professionData = sanitizeFormData(req.body);

    const talents = await Talents.find({ profession: professionData.name });

    if (!talents) {
      handleNotFoundError(res, "Talents not found");
      return;
    }

    professionData.talents = talents;

    let profession = new Professions(professionData);
    profession = await profession.save();

    res.status(201).json(profession);
  } catch (err) {
    handleError(err, req, res, next);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const professionData = await Professions.findById(req.params.id);
    if (!professionData) {
      handleNotFoundError(res, "Profession not found");
      return;
    }
    res.status(200).json(professionData);
  } catch (err) {
    err.modelName = Professions.modelName;
    handleError(err, req, res, next);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const professionData = sanitizeFormData(req.body);

    if (req.body.talents) {
      handleBadRequestError(res, "Cannot update a profession's talents");
      return;
    }

    const profession = await Professions.findByIdAndUpdate(
      req.params.id,
      professionData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!profession) {
      handleNotFoundError(res, "Profession not found");
      return;
    }
    res.status(200).json(profession);
  } catch (err) {
    err.modelName = Professions.modelName;
    handleError(err, req, res, next);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const professionData = await Professions.findByIdAndDelete(req.params.id);
    if (!professionData) {
      handleNotFoundError(res, "Profession not found");
      return;
    }
    res.status(204).end();
  } catch (err) {
    err.modelName = Skills.modelName;
    handleError(err, req, res, next);
  }
});

module.exports = router;
