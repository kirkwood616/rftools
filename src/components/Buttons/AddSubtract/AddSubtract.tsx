import styles from "./AddSubtract.module.css";

interface AddSubtractProps {
  type: "add" | "subtract";
  onClick: () => void;
}

export function AddSubtract({ onClick, type }: AddSubtractProps) {
  return (
    <button type="button" className={`${styles.AddSubtract} ${styles[type]}`} onClick={onClick}>
      <span></span>
      {type === "add" && <span></span>}
    </button>
  );
}
