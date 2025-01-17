import clsx from "clsx";
import React, { FC } from "react";
import classes from "./CustomButton.module.scss";

type Props = {
  variant: "text" | "icon";
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string; 
};

const CustomButton: FC<Props> = (props) => {
  const { variant, isActive, onClick, children, className } = props;

  const buttonClassNames = clsx(classes.button, {
    [classes.textButton]: variant === "text",
    [classes.activeTextButton]: variant === "text" && isActive,
    [classes.iconButton]: variant === "icon",
  } , className);

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
