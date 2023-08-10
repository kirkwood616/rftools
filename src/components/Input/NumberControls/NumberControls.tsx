import { AddSubtract } from "components/Buttons";
import styles from "./NumberControls.module.css";

interface NumberControlsProps {
  handleAdd: () => void;
  handleSubtract: () => void;
  children: React.ReactNode;
}

export function NumberControls({ handleAdd, handleSubtract, children }: NumberControlsProps) {
  return (
    <div className={styles.NumberControls}>
      <AddSubtract type="subtract" onClick={handleSubtract} />
      {children}
      <AddSubtract type="add" onClick={handleAdd} />
    </div>
  );
}
