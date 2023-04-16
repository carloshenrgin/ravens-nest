import DiceSelectors from "../components/DiceSelectors";
import DiceResults from "../components/DiceResults";
import SectionDivider from "../components/SectionDivider";
import { useState } from "react";
import "../assets/styles/DiceRoller.css";

function DiceRoller() {
  const [diceArray, setDiceArray] = useState([]);

  return (
    <section className="dice-roller-section">
      <div className="dice-roller-container">
        <h1 className="dice-roller-heading">Dice Roller</h1>

        <div className="dice-roller-body">
          <DiceSelectors />
          {diceArray.length > 0 && (
            <>
              <SectionDivider direction="horizontal" margin={true} />
              <DiceResults dice={diceArray} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DiceRoller;
