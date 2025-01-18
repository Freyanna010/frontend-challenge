import React, { FC } from 'react'
import { Header as AntdHeader } from "antd/es/layout/layout";
import classes from  "./Header.module.scss"
import Button from '../ui/Button';

const Header: FC = () =>  (
    <AntdHeader className={classes.header}>
    <Button variant="text" isActive={true}>
      Все котики
    </Button>
    <Button variant="text" isActive={false}>
      Любимые котики
    </Button>
  </AntdHeader>
)

export default Header
