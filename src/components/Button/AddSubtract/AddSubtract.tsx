import styles from "./AddSubtract.module.css";

interface AddSubtractProps {
  type: "add" | "subtract";
  onClick: () => void;
}

export function AddSubtract({ onClick, type }: AddSubtractProps) {
  return (
    <button
      type="button"
      className={type === "add" ? `${styles.AddSubtract__add}` : `${styles.AddSubtract__subtract}`}
      onClick={onClick}
    >
      <span></span>
      {type === "add" && <span></span>}
    </button>
  );
}
