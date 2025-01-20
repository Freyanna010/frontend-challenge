import clsx from "clsx";

import classes from "./Button.module.scss";

const getButtonClassNames = (
  variant: string,
  isActive: boolean,
  baseClass: string,
  additionalClass?: string,
) => {
  switch (variant) {
    case "text":
      return clsx(baseClass, additionalClass, {
        [classes.textButton]: true,
        [classes.activeTextButton]: isActive,
      });
    case "icon":
      return clsx(baseClass, additionalClass, classes.iconButton);
    default:
      return clsx(baseClass, additionalClass);
  }
};

export default getButtonClassNames;
