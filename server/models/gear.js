const mongoose = require("mongoose");
const { Schema } = mongoose;

const gearSchema = new Schema({
  name: {
    type: String,
    required: [true, "Gear must have a non-empty name"],
    trim: true,
    validate: {
      validator: function (name) {
        return name.trim().length > 0;
      },
      message: "Name must have a non-empty value",
    },
  },
  type: {
    type: String,
    required: [true, "Gear must have a non-empty type"],
    trim: true,
    validate: {
      validator: function (type) {
        return (
          type.trim().length > 0 &&
          [
            "Trade Good",
            "Melee Weapon",
            "Ranged Weapon",
            "Shield & Armor",
            "Clothes",
            "Mean of Transportation",
            "Tool",
            "Raw Material",
            "Building",
            "Animal",
            "Service",
          ].includes(type)
        );
      },
      message: "Type must have a non-empty valid value",
    },
  },
  price: {
    type: String,
    required: [true, "Gear must have a non-empty price"],
    trim: true,
    validate: {
      validator: function (price) {
        return (
          price.trim().length > 0 &&
          ["copper", "silver", "gold"].some((coin) =>
            price.toLowerCase().includes(coin)
          )
        );
      },
      message: "Price must have a non-empty valid value",
    },
  },
  supplyRarity: {
    type: String,
    trim: true,
    validate: {
      validator: function (rarity) {
        const allowedTypes = [
          "Service",
          "Trade Good",
          "Melee Weapon",
          "Ranged Weapon",
          "Shield & Armor",
          "Clothes",
          "Mean of Transportation",
          "Tool",
          "Animal",
        ];
        if (allowedTypes.includes(this.type)) {
          return ["Common", "Uncommon", "Rare"].includes(rarity);
        } else {
          return rarity.trim().length === 0;
        }
      },
      message: "Rarity must have an empty value or a valid value",
    },
  },
  weightCategory: {
    type: String,
    trim: true,
    validate: {
      validator: function (weight) {
        const allowedTypes = [
          "Trade Good",
          "Melee Weapon",
          "Ranged Weapon",
          "Shield & Armor",
          "Tool",
        ];
        if (allowedTypes.includes(this.type)) {
          return ["Tiny", "Light", "Normal", "Heavy"].includes(weight);
        } else {
          return weight.trim().length === 0;
        }
      },
      message: "Weight must have an empty value or a valid value",
    },
  },
  rawMaterials: {
    type: String,
    trim: true,
    validate: {
      validator: function (materials) {
        const allowedTypes = [
          "Trade Good",
          "Melee Weapon",
          "Ranged Weapon",
          "Shield & Armor",
          "Clothes",
          "Mean of Transportation",
          "Tool",
          "Raw Material",
          "Building",
        ];
        const allowedMaterials = [
          "none",
          "iron",
          "wood",
          "leather",
          "cloth",
          "tallow",
          "stone",
          "feather",
          "pelt",
          "pelts",
          "meat",
          "fish",
          "vegetable",
          "parchment",
          "glass",
          "animal horn",
          "herbs",
          "can't be found in the forbidden lands",
          "grain",
          "flour",
          "silver",
          "wool",
        ];
        if (allowedTypes.includes(this.type)) {
          return materials
            .toLowerCase()
            .match(/[a-z]+/gi)
            .some(
              (material) =>
                allowedMaterials.includes(material) ||
                allowedMaterials.some((allowed) => allowed.includes(material))
            );
        } else {
          return materials.trim().length === 0;
        }
      },
      message: "Materials must have an empty value or a valid value",
    },
  },
  time: {
    type: String,
    trim: true,
    validate: {
      validator: function (time) {
        const allowedTypes = [
          "Trade Good",
          "Melee Weapon",
          "Ranged Weapon",
          "Shield & Armor",
          "Clothes",
          "Mean of Transportation",
          "Tool",
          "Building",
        ];

        if (allowedTypes.includes(this.type)) {
          return time.trim().length > 0;
        } else {
          return time.trim().length === 0;
        }
      },
      message: "Time must have and empty value or a valid value",
    },
  },
  talents: {
    type: Array,
    of: String,
    validate: {
      validator: function (talents) {
        const talentArray = [
          "Adaptive",
          "Inner Peace",
          "Psychic Power",
          "True Grit",
          "Hard to Catch",
          "Hunting Instincts",
          "Unbreakable",
          "Sneaky",
          "Path of Healing",
          "Path of Shifting Shapes",
          "Path of Sight",
          "Path of the Blade",
          "Path of the Enemy",
          "Path of the Shield",
          "Path of the Arrow",
          "Path of the Beast",
          "Path of the Forest",
          "Path of the Hymn",
          "Path of the Song",
          "Path of the Warcry",
          "Path of Gold",
          "Path of Lies",
          "Path of Many Things",
          "Path of the Companion",
          "Path of the Knight",
          "Path of the Plains",
          "Path of the Face",
          "Path of the Killer",
          "Path of Poison",
          "Path of Blood",
          "Path of Death",
          "Path of Signs",
          "Path of Stone",
          "Ambidextrous",
          "Axe Fighter",
          "Berserker",
          "Bowyer",
          "Brawler",
          "Builder",
          "Chef",
          "Cold Blooded",
          "Defender",
          "Dragonslayer",
          "Executioner",
          "Fast Footwork",
          "Fast Shooter",
          "Fearless",
          "Firm Grip",
          "Fisher",
          "Hammer Fighter",
          "Herbalist",
          "Horseback Fighter",
          "Incorruptible",
          "Knife Fighter",
          "Lightning Fast",
          "Lockpicker",
          "Lucky",
          "Master of the Hunt",
          "Melee Charge",
          "Pack Rat",
          "Pain Resistant",
          "Pathfinder",
          "Poisoner",
          "Quartermaster",
          "Quickdraw",
          "Sailor",
          "Sharpshooter",
          "Sharp Tongue",
          "Shield Fighter",
          "Sixth Sense",
          "Smith",
          "Spear Fighter",
          "Steady Feet",
          "Sword Fighter",
          "Tailor",
          "Tanner",
          "Threatening",
          "Throwing Arm",
          "Wanderer",
        ];

        return talents.every(
          (talent) => talentArray.includes(talent) || talent.length === 0
        );
      },
    },
  },
  tools: {
    type: String,
    trim: true,
    validate: {
      validator: function (tools) {
        return this.type !== "Animal" || tools.length === 0;
      },
    },
  },
  effect: {
    type: String,
    trim: true,
    validate: {
      validator: function (effect) {
        return (
          ["Trade Good", "Clothes"].includes(this.type) || effect.length === 0
        );
      },
    },
  },
  comments: {
    type: String,
    trim: true,
    validate: {
      validator: function (comment) {
        return (
          ["Service", "Animal"].includes(this.type) || comment.length === 0
        );
      },
    },
  },
  shelfLife: {
    type: String,
    trim: true,
    validate: {
      validator: function (shelfLife) {
        return this.type === "Raw Material" || shelfLife.length === 0;
      },
    },
  },
});

const Gear = mongoose.model("Gear", gearSchema, "gear");

module.exports = { model: Gear, schema: gearSchema };
