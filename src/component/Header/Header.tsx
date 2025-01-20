import { FC } from "react";
import { Header as AntdHeader } from "antd/es/layout/layout";

import { HeaderProps } from "./Header.types";
import Button from "../ui/Button";
import classes from "./Header.module.scss";

const Header: FC<HeaderProps> = ({ setActiveTab, tabs, activeTab }) => (
  <AntdHeader className={classes.header}>
    {tabs.map(({ value, title }) => (
      <Button
        isActive={activeTab === value}
        key={value}
        onClick={() => setActiveTab(value)}
        variant="text"
      >
        {title}
      </Button>
    ))}
  </AntdHeader>
);

export default Header;
