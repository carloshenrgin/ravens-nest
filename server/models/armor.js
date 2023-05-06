const mongoose = require("mongoose");
const { Schema } = mongoose;

const armorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Armor must have a non-empty name"],
    trim: true,
    validate: {
      validator: function (name) {
        return name.trim().length > 0;
      },
      message: "Name must have a non-empty value",
    },
  },
  bodyPart: {
    type: String,
    required: [true, "Weapon must have a non-empty body part"],
    trim: true,
    validate: {
      validator: function (bodyPart) {
        return ["Body", "Head"].includes(bodyPart);
      },
      message: "Body part must have a valid value",
    },
  },
  features: {
    type: Array,
    of: String,
    trim: true,
  },
  armorRating: { type: Number, required: true, min: 1 },
  cost: { type: Number, required: true, min: 0 },
});

const Armor = mongoose.model("Armor", armorSchema);

module.exports = { model: Armor, schema: armorSchema };
