const mongoose = require("mongoose");
const { Schema } = mongoose;

const conditionSchema = new Schema({
  name: {
    type: String,
    required: [true, "Conditions must have a non-empty name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Conditions must have a non-empty description"],
    trim: true,
  },
  effects: {
    type: Array,
    of: String,
    required: true,
    validate: {
      validator: function (effectArray) {
        return (
          effectArray.every((item) => item?.trim()?.length > 0) &&
          effectArray.length > 0
        );
      },
      message: "Conditions must have non-empty effects",
    },
  },
});

const Conditions = mongoose.model("Condition", conditionSchema);

module.exports = { model: Conditions, schema: conditionSchema };
