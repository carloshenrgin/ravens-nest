import Button from "./Button";
import { PlusLg, DashLg } from "react-bootstrap-icons";
import "../assets/styles/PlusMinusInput.css";
import { useState, useEffect, memo } from "react";

function PlusMinusInput({
  className,
  children,
  inputId = "pl-mn--input",
  labelClass,
  initialValue = 0,
  minValue = 0,
  maxValue,
  readOnly = false,
  liftFuncion = () => {},
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    liftFuncion(inputId, value === "" ? minValue : value);
  }, [inputId, value, liftFuncion, minValue]);

  function handleChange(e) {
    if (!readOnly) {
      if (e.target.value < minValue) {
        setValue(minValue);
      } else if (e.target.value > maxValue) {
        setValue(maxValue);
      } else setValue(e.target.value);
    }
  }

  function increaseValue() {
    if (!readOnly) {
      if (maxValue && Number(value) + 1 > maxValue) {
        setValue(maxValue);
      } else setValue(Number(value) + 1);
    }
  }

  function decreaseValue() {
    if (!readOnly) {
      if (Number(value) - 1 < minValue) {
        setValue(minValue);
      } else setValue(Number(value) - 1);
    }
  }

  return (
    <div className={className}>
      {children && (
        <label htmlFor={inputId} className={labelClass}>
          {children}
        </label>
      )}

      <div className="pl-mn-input-container">
        <Button
          className={"btn btn-primary btn-round btn--pl-mn"}
          disabled={readOnly && readOnly}
          onClick={decreaseValue}
        >
          <DashLg size={18} className="icon-" />
        </Button>
        <input
          type="number"
          value={value}
          className="pl-mn-input input-field input-field--number-no-arrows"
          disabled={readOnly && readOnly}
          name={inputId}
          id={inputId}
          onChange={handleChange}
        />
        <Button
          className={"btn btn-primary btn-round btn--pl-mn"}
          disabled={readOnly && readOnly}
          onClick={increaseValue}
        >
          <PlusLg size={18} className="icon--pl-mn" />
        </Button>
      </div>
    </div>
  );
}

export default memo(PlusMinusInput);
