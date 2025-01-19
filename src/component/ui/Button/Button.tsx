import { FC } from "react";
import clsx from "clsx";

import { ButtonProps } from "./Buton.types";
import classes from "./Button.module.scss";

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
