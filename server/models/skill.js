const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Talent name required"],
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
    required: [true, "Associated attribute required"],
    validate: {
      validator: function (attribute) {
        return ["Strength", "Agility", "Wits", "Empathy"].includes(attribute);
      },
      message: "Invalid attribute",
    },
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Talent description required"],
    validate: {
      validator: function (description) {
        return description.trim().length > 0;
      },
      message: "Description must have a non-empty value",
    },
  },
});

const Skills = mongoose.model("Skill", skillSchema);

module.exports = { model: Skills, schema: skillSchema };
