const mongoose = require("mongoose");
const { Schema } = mongoose;

const { schema: kinSchema } = require("./kin");
const { schema: professionSchema } = require("./profession");
const { schema: skillSchema } = require("./skill");
const { schema: talentSchema } = require("./talent");
const { schema: conditionSchema } = require("./condition");
const { schema: gearSchema } = require("./gear");
const { schema: weaponSchema } = require("./weapon");

const characterSchema = new Schema({
  profile_id: Number,
  name: { type: String, default: "" },
  kin: kinSchema,
  profession: professionSchema,
  age: { type: Number, default: 0 },
  reputation: { type: Number, default: 0 },
  appearance: {
    face: { type: String, default: "" },
    body: { type: String, default: "" },
    clothing: { type: String, default: "" },
  },
  pride: { type: String, default: "" },
  darkSecret: { type: String, default: "" },
  relationships: { type: Array, of: String, default: [] },
  attributesMax: {
    strengthMax: { type: Number, default: 4, min: 4 },
    agilityMax: { type: Number, default: 4, min: 4 },
    witsMax: { type: Number, default: 4, min: 4 },
    empathyMax: { type: Number, default: 4, min: 4 },
  },
  attributes: {
    strength: { type: Number, default: 2 },
    agility: { type: Number, default: 2 },
    wits: { type: Number, default: 2 },
    empathy: { type: Number, default: 2 },
  },
  skills: [
    {
      skill: skillSchema,
      level: { type: Number, default: 0, min: 0, max: 3 },
    },
  ],
  talents: [
    {
      talent: talentSchema,
      rank: { type: Number, default: 0, min: 0, max: 3 },
    },
  ],
  conditions: { type: Array, of: conditionSchema, default: [] },
  inventory: { type: Array, of: gearSchema, default: [] },
  weapons: { type: Array, of: weaponSchema, default: [] },
  food: { type: Number, default: 0 },
  water: { type: Number, default: 0 },
  arrows: { type: Number, default: 0 },
  torches: { type: Number, default: 0 },
  notes: { type: String, default: "" },
  armorRating: { type: Number, default: 0 },
  helmetRating: { type: Number, default: 0 },
  shieldBonus: { type: Number, default: 0 },
});

const Character = mongoose.model("Character", characterSchema);

module.exports = { model: Character, schema: characterSchema };
