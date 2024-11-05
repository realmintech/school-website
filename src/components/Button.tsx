type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: "btn_green";
};
const Button = ({ type, title, variant }: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        className={`border-none gap-3 rounded-full ${variant}`}
      >
        <label>{title}</label>
      </button>
    </>
  );
};

export default Button;
