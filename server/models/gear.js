const mongoose = require("mongoose");
const { Schema } = mongoose;

const { schema: talentSchema } = require("./talent");

const gearSchema = new Schema({
  name: String,
  type: String,
  price: String,
  supplyRarity: String,
  weightCategory: String,
  rawMaterials: [String],
  time: String,
  talents: [talentSchema],
  tools: [String],
  effect: String,
});

const Gear = mongoose.model("Gear", gearSchema, "gear");

module.exports = { model: Gear, schema: gearSchema };
