const mongoose = require("mongoose");
const { Schema } = mongoose;

const weaponSchema = new Schema({
  name: {
    type: String,
    required: [true, "Weapon must have a non-empty name"],
    trim: true,
    validate: {
      validator: function (name) {
        return name.trim().length > 0;
      },
      message: "Name must have a non-empty value",
    },
  },
  category: {
    type: String,
    required: [true, "Weapon must have a non-empty category"],
    trim: true,
    validate: {
      validator: function (category) {
        return ["Melee", "Ranged", "Shield"].includes(category);
      },
      message: "Category must have a valid value",
    },
  },
  range: {
    type: String,
    trim: true,
    validate: {
      validator: function (range) {
        return (
          ["Arm", "Near", "Short", "Long"].includes(range) ||
          this.category === "Shield"
        );
      },
      message: "Range must have a valid value",
    },
  },
  features: {
    type: Array,
    of: String,
    trim: true,
    validate: {
      validator: function (features) {
        const allowedFeatures = [
          "Blunt",
          "Light",
          "Pointed",
          "Edged",
          "Parrying",
          "Heavy",
          "Hook",
          "Loading is slow action",
        ];

        return features.every((feature) => allowedFeatures.includes(feature));
      },
    },
  },
  bonus: { type: Number, required: true, min: 0 },
  grip: { type: Number, min: 0, max: 2 },
  cost: { type: Number, required: true, min: 0 },
  damage: { type: Number, required: true, min: 0 },
});

const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = { model: Weapon, schema: weaponSchema };
