import { FC, ReactNode } from "react";

import styles from "./FlexContainer.module.scss";

const FlexContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={styles.flexContainer}>{children}</div>
);

export default FlexContainer;
