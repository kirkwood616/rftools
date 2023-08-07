interface ButtonProps {
  text: string;
  type: "primary" | "danger";
}

export default function Button({ text }: ButtonProps) {
  return <button className="Button">{text}</button>;
}
