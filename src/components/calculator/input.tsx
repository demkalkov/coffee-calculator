import { ChangeEventHandler, PropsWithoutRef } from "react";
import styles from "./input.module.css";

export interface InputProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

export default function Input({
  value,
  onChange: onChanges,
  className,
}: PropsWithoutRef<InputProps>) {
  const onInputValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!event.target.checkValidity()) {
      return;
    }

    const strValue = event.target.value;
    const parsedValue = +strValue;

    if (strValue !== `${parsedValue}`) {
      event.target.value = `${parsedValue}`;
    }

    onChanges(parsedValue);
  };

  return (
    <input
      className={styles.input + ` ${className || ""}`}
      min={0}
      step={0.1}
      type="number"
      value={value}
      onChange={onInputValueChange}
    ></input>
  );
}
