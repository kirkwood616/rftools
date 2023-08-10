import styles from "./Field.module.css";

interface FieldProps {
  children: React.ReactNode;
  descriptor?: string;
}

export function Field({ children, descriptor }: FieldProps) {
  return (
    <div className={styles.Field}>
      {children}
      {descriptor && <div className={styles.descriptor}>{descriptor}</div>}
    </div>
  );
}
