const mongoose = require("mongoose");
const { Schema } = mongoose;

const { schema: talentSchema } = require("./talent");

const kinSchema = new Schema({
  name: String,
  attribute: String,
  talent: talentSchema,
  youngAge: Number,
  adultAge: Number,
  oldAge: Number,
});

const Kin = mongoose.model("Kin", kinSchema);

module.exports = { model: Kin, schema: kinSchema };
