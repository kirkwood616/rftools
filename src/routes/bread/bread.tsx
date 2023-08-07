import Form from "components/Form/Form";
import { NumberControls, WholeNumber } from "components/Input";
import { useState } from "react";
import styles from "./bread.module.css";

export default function Bread() {
  const [value, setValue] = useState<number>(0);

  function onSubmit() {
    console.log("submit");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue((prev) => (Number(e.target.validity.valid) ? Number(e.target.value) : prev));
  }

  return (
    <div className={styles.Bread}>
      <h1>BREAD ORDER</h1>
      <h2>Enter Current Stock Quantities</h2>
      <Form onSubmit={onSubmit}>
        <label htmlFor="NAME">NAME</label>
        <NumberControls>
          <WholeNumber label={"NAME"} name={"name"} onChange={(e) => handleChange(e)} value={value} />
        </NumberControls>
      </Form>
    </div>
  );
}
