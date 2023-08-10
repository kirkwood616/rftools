interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export function Form({ onSubmit, children }: FormProps) {
  return (
    <form className="Form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
