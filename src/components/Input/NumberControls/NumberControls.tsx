import { AddSubtract } from "components/Buttons";
import styles from "./NumberControls.module.css";

interface NumberControlsProps {
  children: React.ReactNode;
}

export function NumberControls({ children }: NumberControlsProps) {
  return (
    <div className={styles.NumberControls}>
      <AddSubtract type="subtract" onClick={() => console.log("subtract")} />
      {children}
      <AddSubtract type="add" onClick={() => console.log("add")} />
    </div>
  );
}
