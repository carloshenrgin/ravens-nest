const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

const characterRoutes = require("./routes/character");
const kinRoutes = require("./routes/kin");
const talentRoutes = require("./routes/talent");

const app = express();
app.use(bodyParser.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(config.dbUrl, config.dbOptions);

  app.use("/api/character", characterRoutes);
  app.use("/api/kin", kinRoutes);
  app.use("/api/talent", talentRoutes);

  app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
  });
}