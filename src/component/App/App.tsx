import { FC, useState } from "react";
import Layout, { Content } from "antd/es/layout/layout";

import CardList from "../CardList/CardList";
import Header from "../Header";
import classes from "./App.module.scss";

import { INITIAL_ACTIVE_TAB, TABS } from "@/constants/constants";

const App: FC = () => {
  const [activeTab, setActiveTab] = useState(INITIAL_ACTIVE_TAB);

  return (
    <>
      <Layout className={classes.layout}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
        <Content className={classes.content}>
          {<CardList activeTab={activeTab} />}
        </Content>
      </Layout>
    </>
  );
};

export default App;
