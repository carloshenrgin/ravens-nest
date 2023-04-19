import DiceSelector from "./DiceSelector";
import Button from "./Button";
import "../assets/styles/DiceSelectors.css";
import { useState, useCallback } from "react";

function DiceSelectors({ onRoll = () => {}, onPush = () => {} }) {
  const [selectedDice, setSelectedDice] = useState({});

  const onDiceSelection = useCallback((type, max, qtd) => {
    setSelectedDice((prevSelectedDice) => {
      return {
        ...prevSelectedDice,
        [type]: { qtd, max },
      };
    });
  }, []);

  return (
    <form className="dice-selector-container">
      <div className="dice-selector-grid">
        <DiceSelector
          max={6}
          type={"base"}
          justifySelf={"start"}
          liftDice={onDiceSelection}
        />
        <DiceSelector
          max={8}
          type={"mighty-artifact"}
          justifySelf={"end"}
          liftDice={onDiceSelection}
        />
        <DiceSelector
          max={6}
          type={"skill"}
          justifySelf={"start"}
          liftDice={onDiceSelection}
        />
        <DiceSelector
          max={10}
          type={"epic-artifact"}
          justifySelf={"end"}
          liftDice={onDiceSelection}
        />
        <DiceSelector
          max={6}
          type={"weapon"}
          justifySelf={"start"}
          liftDice={onDiceSelection}
        />
        <DiceSelector
          max={12}
          type={"legendary-artifact"}
          justifySelf={"end"}
          liftDice={onDiceSelection}
        />
      </div>

      <div className="dice-selector-buttons">
        <Button
          className={"btn btn-round-edge btn-sm btn-secondary"}
          onClick={onPush}
        >
          Push
        </Button>
        <Button
          className={"btn btn-round-edge btn-sm btn-primary"}
          onClick={() => {
            onRoll(selectedDice);
          }}
        >
          Roll
        </Button>
      </div>
    </form>
  );
}

export default DiceSelectors;
