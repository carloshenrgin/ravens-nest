import Dice from "./Dice";
import PlusMinusInput from "./PlusMinusInput";
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
        liftFuncion={onDiceSelection}
        inputId={type}
        labelClass={`label-${justifySelf}`}
      >
        <Dice diceMax={Number(max)} diceType={type} />
      </PlusMinusInput>
    </div>
  );
}

export default DiceSelector;
