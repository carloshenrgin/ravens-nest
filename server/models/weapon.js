const mongoose = require("mongoose");
const { Schema } = mongoose;

const { schema: talentSchema } = require("./talent");

const weaponSchema = new Schema({
  name: String,
  type: String,
  price: String,
  supplyRarity: String,
  weightCategory: String,
  rawMaterials: [String],
  time: String,
  talents: [talentSchema],
  tools: [String],
  range: String,
  features: [String],
  bonus: Number,
  grip: { type: Number, min: 0, max: 2 },
});

const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = { model: Weapon, schema: weaponSchema };
