import { Button } from "components/Buttons";
import { Field } from "components/Field";
import { Fieldset } from "components/Fieldset";
import { Form } from "components/Form";
import { WholeNumber } from "components/Input";
import { NumberObject } from "types/Objects";
import styles from "./bread.module.css";

export default function Bread() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData: FormData = new FormData(e.currentTarget);
    const formDataObj: NumberObject = {};
    formData.forEach((value, key) => (formDataObj[key] = Number(value)));

    console.log(formDataObj);
  }

  return (
    <div className={styles.Bread}>
      <h1>BREAD ORDER</h1>
      <h2>Enter Current Stock Quantities</h2>
      <Form onSubmit={onSubmit}>
        <Fieldset legend={"BREAD"}>
          <Field descriptor="( Unit )">
            <label htmlFor="NAME">NAME</label>
            <WholeNumber label={"NAME"} name={"name"} withControls />
          </Field>

          <Field descriptor="( Unit )">
            <label htmlFor="NAME2">NAME2</label>
            <WholeNumber label={"NAME2"} name={"name2"} withControls />
          </Field>
        </Fieldset>
        <Button type="submit" text="Submit" color="primary" />
      </Form>
    </div>
  );
}
