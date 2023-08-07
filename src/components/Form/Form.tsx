interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  children: React.ReactNode;
}

export default function Form({ onSubmit, children }: FormProps) {
  return (
    <form className="Form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
