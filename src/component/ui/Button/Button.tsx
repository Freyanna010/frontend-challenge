import { FC } from "react";

import { ButtonProps } from "./Button.types";
import getButtonClassNames from "./getButtonClassNames";

const Button: FC<ButtonProps> = (props) => {
  const { variant, isActive = false, onClick, children, className } = props;

  const buttonClassNames = getButtonClassNames(
    variant,
    isActive,
    "button",
    className,
  );

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
