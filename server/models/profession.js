const mongoose = require("mongoose");
const { Schema } = mongoose;

const { schema: skillSchema } = require("./skill");

const professionSchema = new Schema({
  name: String,
  attribute: String,
  skills: [skillSchema],
  pride: [String],
  darkSecret: [String],
  relationships: [String],
});

const Professions = mongoose.model("Profession", professionSchema);

module.exports = { model: Professions, schema: professionSchema };
