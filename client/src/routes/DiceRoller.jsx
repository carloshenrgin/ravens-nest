import DiceSelectors from "../components/DiceSelectors";
import DiceResults from "../components/DiceResults";
import SectionDivider from "../components/SectionDivider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../assets/styles/DiceRoller.css";

function DiceRoller() {
  const [diceRolls, setDiceRolls] = useState([]);

  function rollDie(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function rollDice(selectedDice) {
    setDiceRolls([]);

    for (let [key, value] of Object.entries(selectedDice)) {
      for (let i = 0; i < value.qtd; i++) {
        const diceRoll = {
          max: value.max,
          type: key,
          value: rollDie(value.max),
          id: uuidv4(),
        };

        setDiceRolls((prevRolls) => {
          let diceRolls = [...prevRolls];
          let inserted = false;

          // Dice type precedence
          let diceTypeOrder = {
            base: 1,
            skill: 2,
            weapon: 3,
            "mighty-artifact": 4,
            "epic-artifact": 5,
            "legendary-artifact": 6,
          };

          for (let j = 0; j < diceRolls.length; j++) {
            if (
              diceTypeOrder[diceRoll.type] < diceTypeOrder[diceRolls[j].type]
            ) {
              diceRolls.splice(j, 0, diceRoll);
              inserted = true;
              break;
            }
          }

          if (!inserted) {
            diceRolls.push(diceRoll);
          }

          return diceRolls;
        });
      }
    }
  }

  function pushDice() {
    setDiceRolls((prevRolls) => {
      let currRolls = [...prevRolls];
      for (let roll of currRolls) {
        if (
          roll.value < 6 &&
          ((roll.type !== "skill" && roll.value > 1) ||
            roll.type === "skill" ||
            roll.type.includes("artifact"))
        ) {
          roll.value = rollDie(roll.max);
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
              <DiceResults diceRolls={diceRolls} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DiceRoller;
