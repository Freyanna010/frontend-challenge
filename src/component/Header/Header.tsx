import { FC } from "react";
import { Header as AntdHeader } from "antd/es/layout/layout";
import classes from "./Header.module.scss";
import Button from "../ui/Button";
import { HeaderProps } from "./Header.types";

const Header: FC<HeaderProps> = ({ setActiveTab, tabs, activeTab }) => (
  <AntdHeader className={classes.header}>
    {tabs.map(({ value, title }) => (
      <Button
        variant="text"
        isActive={activeTab === value}
        onClick={() => setActiveTab(value)}
      >
        {title}
      </Button>
    ))}
  </AntdHeader>
);

export default Header;
