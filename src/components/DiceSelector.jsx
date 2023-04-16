import Dice from "./Dice";
import PlusMinusInput from "./PlusMinusInput";
import "../assets/styles/DiceSelector.css";

function DiceSelector({ diceMax, diceType, justifySelf, dicePosition }) {
  return (
    <div style={{ justifySelf: justifySelf }}>
      <PlusMinusInput className="dice-selector" labelPosition={justifySelf}>
        <Dice
          diceMax={Number(diceMax)}
          diceType={diceType}
          className={"dice-selector"}
        />
      </PlusMinusInput>
    </div>
  );
}

export default DiceSelector;
