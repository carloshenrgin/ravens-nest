import Dice from "./Dice";
import PlusMinusInput from "./PlusMinusInput";
import "../assets/styles/DiceSelector.css";
import { useCallback } from "react";

function DiceSelector({ max, type, justifySelf, liftDice = () => {} }) {
  const onDiceSelection = useCallback(
    (type, qtd) => {
      liftDice(type, max, qtd);
    },
    [liftDice, max]
  );

  return (
    <div style={{ justifySelf: justifySelf }}>
      <PlusMinusInput
        className="dice-selector"
        labelPosition={justifySelf}
        liftFuncion={onDiceSelection}
        inputId={type}
      >
        <Dice
          diceMax={Number(max)}
          diceType={type}
          className={"dice-selector"}
        />
      </PlusMinusInput>
    </div>
  );
}

export default DiceSelector;
