import styles from "./Fieldset.module.css";

interface FieldsetProps {
  legend: string;
  children: React.ReactNode;
}

export function Fieldset({ legend, children }: FieldsetProps) {
  return (
    <fieldset className={styles.Fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
