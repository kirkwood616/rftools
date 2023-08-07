import { ChangeEvent } from "react";
import styles from "../Input.module.css";

interface WholeNumberProps {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

export function WholeNumber({ label, name, onChange, value }: WholeNumberProps) {
  return (
    <input
      className={styles.input_element}
      id={label}
      inputMode="numeric"
      name={name}
      onChange={onChange}
      pattern="[0-9]*"
      value={value}
      type="text"
    />
  );
}
