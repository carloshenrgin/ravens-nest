import "../assets/styles/Dice.css";
import { memo } from "react";

function Dice({ diceMax, diceType, diceValue, classList }) {
  const dice = require(`../assets/images/d${diceMax}${
    diceMax === 6 ? `-${diceType}` : ""
  }${diceValue ? `-${diceValue}` : ""}.png`);

  return (
    <img className={`dice d${diceMax} ${classList}`} alt="die" src={dice} />
  );
}

export default memo(Dice);
