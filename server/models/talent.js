const mongoose = require("mongoose");
const { Schema } = mongoose;

const talentSchema = new Schema({
  name: String,
  type: String,
  kin_id: Number,
  profession_id: Number,
  description: String,
  ranks: [String],
});

const Talents = mongoose.model("Talent", talentSchema);

module.exports = { model: Talents, schema: talentSchema };
