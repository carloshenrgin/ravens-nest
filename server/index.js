const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

const characterRoutes = require("./routes/character");

const app = express();
app.use(bodyParser.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(config.dbUrl, config.dbOptions);

  app.use("/api/character", characterRoutes);

  app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
  });
}
