import Button from "./Button";
import { PlusLg, DashLg } from "react-bootstrap-icons";
import "../assets/styles/PlusMinusInput.css";

function PlusMinusInput({
  className,
  children,
  inputId,
  labelClass,
  labelPosition,
  initialValue,
  minValue,
  maxValue,
  readOnly,
}) {
  return (
    <div className={className}>
      {children && labelPosition !== "end" && (
        <label htmlFor={inputId} className={labelClass}>
          {children}
        </label>
      )}

      <div className="pl-mn-input-container">
        <Button className={"btn btn-primary btn-round btn--pl-mn"}>
          <DashLg size={18} className="icon-" />
        </Button>
        <input
          type="number"
          value={initialValue}
          className="pl-mn-input input-field input-field--number-no-arrows"
          disabled={readOnly && readOnly}
          name={inputId}
          id={inputId}
        />
        <Button className={"btn btn-primary btn-round btn--pl-mn"}>
          <PlusLg size={18} className="icon--pl-mn" />
        </Button>
      </div>

      {children && labelPosition === "end" && (
        <label htmlFor={inputId} className={labelClass}>
          {children}
        </label>
      )}
    </div>
  );
}

export default PlusMinusInput;
