import Dice from "./Dice";
import "../assets/styles/DiceResults.css";

function DiceResults({ diceRolls }) {
  const baseBaneIcon = require("../assets/images/base-fail.png");
  const weaponBaneIcon = require("../assets/images/weapon-fail.png");
  const successIcon = require("../assets/images/success.png");

  let baseBanes = 0;
  let weaponBanes = 0;
  let successes = 0;

  for (let diceRoll of diceRolls) {
    if (diceRoll.value >= 6) {
      successes += Math.ceil((diceRoll.value - 5) / 2);
    } else if (diceRoll.value === 1) {
      if (diceRoll.type === "base") {
        baseBanes++;
      } else if (diceRoll.type === "weapon") {
        weaponBanes++;
      }
    }
  }

  const diceComponents = diceRolls.map((diceRoll) => {
    return (
      <Dice
        key={diceRoll.id}
        diceMax={diceRoll.max}
        diceType={diceRoll.type}
        diceValue={diceRoll.value}
      />
    );
  });

  return (
    <>
      <div className="sb-row">
        <div className="sb-wrapper">
          <img
            src={weaponBaneIcon}
            alt="Weapon Banes"
            className="sb-icon sb-icon--white"
          />
          <p className="sb-value">{weaponBanes}</p>
        </div>
        <div className="sb-wrapper">
          <img
            src={baseBaneIcon}
            alt="Base Banes"
            className="sb-icon sb-icon--black"
          />
          <p className="sb-value">{baseBanes}</p>
        </div>
        <div className="sb-wrapper">
          <img
            src={successIcon}
            alt="Sucesses"
            className="sb-icon sb-icon--black"
          />
          <p className="sb-value">{successes}</p>
        </div>
      </div>

      <div className="dice-grid">{diceComponents}</div>
    </>
  );
}

export default DiceResults;
