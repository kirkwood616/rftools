import styles from "./Button.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  color: "primary" | "secondary" | "danger";
}

export function Button({ type, text, color }: ButtonProps) {
  return (
    <button className={`${styles.Button} ${styles[color]}`} type={type}>
      {text.toUpperCase()}
    </button>
  );
}
