import { FC, ReactNode } from "react";
import styles from "./FlexContainer.module.scss";

const FlexContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>;
};

export default FlexContainer;
