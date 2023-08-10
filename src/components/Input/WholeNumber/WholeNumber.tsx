import { useState } from "react";
import { NumberControls } from "..";
import styles from "../Input.module.css";

interface WholeNumberProps {
  label: string;
  name: string;
  withControls?: boolean;
}

export function WholeNumber({ label, name, withControls }: WholeNumberProps) {
  const [value, setValue] = useState<number>(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue((prev) => (Number(e.target.validity.valid) ? Number(e.target.value) : prev));
  }

  function handleAdd() {
    setValue((prev) => prev + 1);
  }

  function handleSubtract() {
    if (!value) return;
    setValue((prev) => prev - 1);
  }

  if (withControls) {
    return (
      <NumberControls handleAdd={handleAdd} handleSubtract={handleSubtract}>
        <input
          className={styles.input_element}
          id={label}
          inputMode="numeric"
          name={name}
          onChange={handleChange}
          pattern="[0-9]*"
          value={value}
          type="text"
        />
      </NumberControls>
    );
  }

  return (
    <input
      className={styles.input_element}
      id={label}
      inputMode="numeric"
      name={name}
      onChange={handleChange}
      pattern="[0-9]*"
      value={value}
      type="text"
    />
  );
}
