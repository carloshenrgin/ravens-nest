const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

const characterRoutes = require("./routes/character");
const kinRoutes = require("./routes/kin");
const talentRoutes = require("./routes/talent");
const skillRoutes = require("./routes/skill");
const conditionRoutes = require("./routes/condition");
const gearRoutes = require("./routes/gear");
const weaponRoutes = require("./routes/weapon");
const armorRoutes = require("./routes/armor");
const professionRoutes = require("./routes/profession");

const app = express();
app.use(bodyParser.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(config.dbUrl, config.dbOptions);

  app.use("/api/character", characterRoutes);
  app.use("/api/kin", kinRoutes);
  app.use("/api/talent", talentRoutes);
  app.use("/api/skill", skillRoutes);
  app.use("/api/condition", conditionRoutes);
  app.use("/api/gear", gearRoutes);
  app.use("/api/weapon", weaponRoutes);
  app.use("/api/armor", armorRoutes);
  app.use("/api/profession", professionRoutes);

  app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
  });
}
