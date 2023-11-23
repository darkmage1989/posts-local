interface ButtonProps {
  onClickHandler: ()=> void;
  text: string | number;
}

const Button = ({ onClickHandler, text }: ButtonProps) => {
  return <button onClick={onClickHandler}>{text}</button>;
};

export default Button;
