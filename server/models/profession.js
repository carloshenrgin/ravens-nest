const mongoose = require("mongoose");
const { Schema } = mongoose;

const { schema: skillSchema } = require("./skill");
const { schema: talentSchema } = require("./talent");

const professionSchema = new Schema({
  name: {
    type: String,
    required: [true, "Profession must have a non-empty name"],
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
  skills: {
    type: Array,
    of: skillSchema,
    required: [true, "Profession must have a non-empty array of skills"],
    validate: {
      validator: function (skillArray) {
        return skillArray.length === 5;
      },
      message: "Invalid number of skills",
    },
  },
  talents: {
    type: Array,
    of: talentSchema,
    required: [true, "Profession must have a non-empty array of talents"],
    validate: {
      validator: function (talentArray) {
        return talentArray.length >= 3;
      },
      message: "Invalid number of talents",
    },
  },
  pride: {
    type: Array,
    of: String,
    required: [true, "Profession must have recommended prides"],
    validate: {
      validator: function (prideArray) {
        return prideArray.length === 3;
      },
      message: "Invalid number of recommended prides",
    },
  },
  darkSecret: {
    type: Array,
    of: String,
    required: [true, "Profession must have recommended dark secrets"],
    validate: {
      validator: function (darkSecretArray) {
        return darkSecretArray.length === 3;
      },
      message: "Invalid number of recommended dark secrets",
    },
  },
  relationships: {
    type: Array,
    of: String,
    required: [true, "Profession must have recommended relationships"],
    validate: {
      validator: function (darkSecretArray) {
        return darkSecretArray.length === 3;
      },
      message: "Invalid number of recommended relationships",
    },
  },
  gear: {
    type: String,
    trim: true,
    required: [true, "Profession must have related gear"],
  },
});

const Professions = mongoose.model("Profession", professionSchema);

module.exports = { model: Professions, schema: professionSchema };
