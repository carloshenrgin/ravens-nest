const express = require("express");
const router = express.Router();
const { model: Kin } = require("../models/kin");

router.get("/register", (req, res) => {
  res.sendFile(__dirname + "/registerKin.html");
});

router.post("/register", async (req, res) => {
  const kin = new Kin({});

  await kin.save();
});

module.exports = router;
