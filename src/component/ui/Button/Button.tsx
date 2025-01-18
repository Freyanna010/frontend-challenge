import clsx from "clsx";
import { FC } from "react";
import classes from "./Button.module.scss";
import { ButtonProps } from "./ButonTypes";

const Button: FC<ButtonProps> = (props) => {
  const { variant, isActive, onClick, children, className } = props;

  const buttonClassNames = clsx(
    classes.button,
    {
      [classes.textButton]: variant === "text",
      [classes.activeTextButton]: variant === "text" && isActive,
      [classes.iconButton]: variant === "icon",
    },
    className,
  );

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
