const mongoose = require("mongoose");
const { Schema } = mongoose;

const conditionSchema = new Schema({
  name: String,
  description: String,
  effects: [String],
});

const Conditions = mongoose.model("Condition", conditionSchema);

module.exports = { model: Conditions, schema: conditionSchema };
