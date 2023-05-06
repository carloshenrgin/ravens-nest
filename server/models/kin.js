const mongoose = require("mongoose");
const { Schema } = mongoose;

const { schema: talentSchema } = require("./talent");

const kinSchema = new Schema({
  name: {
    type: String,
    required: [true, "Kin must have a non-empty name"],
    trim: true,
    validate: {
      validator: function (name) {
        return name.trim().length > 0;
      },
      message: "Name must have a non-empty value",
    },
  },
  attribute: {
    type: String,
    trim: true,
    required: [true, "Key attribute required"],
    validate: {
      validator: function (attribute) {
        return ["Strength", "Agility", "Wits", "Empathy"].includes(attribute);
      },
      message: "Invalid attribute",
    },
  },
  talent: {
    type: talentSchema,
    required: true,
    validate: {
      validator: function (talent) {
        return talent.type === "Kin";
      },
    },
  },
  youngAge: Number,
  adultAge: Number,
  oldAge: Number,
});

const Kin = mongoose.model("Kin", kinSchema);

module.exports = { model: Kin, schema: kinSchema };
