interface Prop {
  text: string;
  type?: "primary" | "secondary";
}
const Button = ({ text, type = "primary" }: Prop) => {
  return (
    <button type="button" className={"btn btn-" + type}>
      {text}
    </button>
  );
};

export default Button;
