const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillSchema = new Schema({
  name: String,
  attribute: String,
  description: String,
});

const Skills = mongoose.model("Skill", skillSchema);

module.exports = { model: Skills, schema: skillSchema };
