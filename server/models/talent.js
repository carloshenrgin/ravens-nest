const mongoose = require("mongoose");
const { Schema } = mongoose;

const talentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Talent name required"],
    validate: {
      validator: function (name) {
        return name.trim().length > 0;
      },
      message: "Name must have a non-empty value",
    },
  },
  type: {
    type: String,
    required: [true, "Talent type required"],
    validate: {
      validator: function (type) {
        return (
          type.trim().length > 0 &&
          ["Kin", "Profession", "General"].includes(type)
        );
      },
      message: "Type must have a valid non-empty value",
    },
  },
  kin: {
    type: String,
    validate: {
      validator: function (kin) {
        return (
          this.type === "Kin" &&
          (!this.profession || this.profession?.length === 0) &&
          this.ranks?.length === 0 &&
          kin.trim().length > 0
        );
      },
      message:
        "Check the type, profession, ranks and kin fields for invalid values",
    },
  },
  profession: {
    type: String,
    validate: {
      validator: function (profession) {
        return (
          this.type === "Profession" &&
          (!this.kin || this.kin?.length === 0) &&
          this.ranks?.length === 3 &&
          profession.trim().length > 0
        );
      },
      message:
        "Check the type, profession, ranks and kin fields for invalid values",
    },
  },
  description: {
    type: String,
    required: [true, "Talent description required"],
  },
  ranks: {
    type: Array,
    of: String,
    validate: {
      validator: function (rankArr) {
        return (
          (this.type === "Kin" && rankArr?.length === 0) || rankArr?.length > 0
        );
      },
      message: "Check the ranks and type fields for invalid values.",
    },
  },
});

const Talents = mongoose.model("Talent", talentSchema);

module.exports = { model: Talents, schema: talentSchema };
