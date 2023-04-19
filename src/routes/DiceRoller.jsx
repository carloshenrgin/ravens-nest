import DiceSelectors from "../components/DiceSelectors";
import DiceResults from "../components/DiceResults";
import SectionDivider from "../components/SectionDivider";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../assets/styles/DiceRoller.css";

function DiceRoller() {
  const [diceRolls, setDiceRolls] = useState({});

  useEffect(() => {
    console.log(diceRolls);
  });

  function rollDie(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function rollDice(selectedDice) {
    setDiceRolls({});

    for (let [key, value] of Object.entries(selectedDice)) {
      if (
        value.hasOwnProperty("qtd") &&
        value.hasOwnProperty("max") &&
        value.qtd > 0
      ) {
        let diceArray = [];
        for (let i = 0; i < value.qtd; i++) {
          const diceRoll = {
            max: value.max,
            value: rollDie(value.max),
            id: uuidv4(),
          };

          diceArray.push(diceRoll);
        }

        setDiceRolls((prevRolls) => {
          return { ...prevRolls, [key]: diceArray };
        });
      }
    }
  }

  function pushDice() {
    setDiceRolls((prevRolls) => {
      const currRolls = { ...prevRolls };
      for (let [type, rolls] of Object.entries(currRolls)) {
        for (let roll of rolls) {
          if (
            roll.value < 6 &&
            ((type !== "skill" && roll.value > 1) ||
              type === "skill" ||
              type.includes("artifact"))
          ) {
            roll.value = rollDie(roll.max);
          }
        }
      }

      return currRolls;
    });
  }

  return (
    <section className="dice-roller-section">
      <div className="dice-roller-container">
        <h1 className="dice-roller-heading">Dice Roller</h1>

        <div className="dice-roller-body">
          <DiceSelectors onRoll={rollDice} onPush={pushDice} />
          {Object.keys(diceRolls).length > 0 && (
            <>
              <SectionDivider direction="horizontal" margin={true} />
              <DiceResults dice={diceRolls} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DiceRoller;
