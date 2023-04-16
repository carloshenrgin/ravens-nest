import DiceSelector from "./DiceSelector";
import Button from "./Button";
import "../assets/styles/DiceSelectors.css";

function DiceSelectors() {
  return (
    <form className="dice-selector-container">
      <div className="dice-selector-grid">
        <DiceSelector diceMax={6} diceType={"base"} justifySelf={"start"} />
        <DiceSelector diceMax={6} diceType={"base"} justifySelf={"end"} />
        <DiceSelector diceMax={6} diceType={"base"} justifySelf={"start"} />
        <DiceSelector diceMax={6} diceType={"base"} justifySelf={"end"} />
        <DiceSelector diceMax={6} diceType={"base"} justifySelf={"start"} />
        <DiceSelector diceMax={6} diceType={"base"} justifySelf={"end"} />
      </div>

      <div className="dice-selector-buttons">
        <Button className={"btn btn-round-edge btn-sm btn-secondary"}>
          Push
        </Button>
        <Button className={"btn btn-round-edge btn-sm btn-primary"}>
          Roll
        </Button>
      </div>
    </form>
  );
}

export default DiceSelectors;
