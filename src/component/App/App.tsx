import { FC, useState } from "react";
import classes from "./App.module.scss";
import CardList from "../CardList/CardList";
import Layout, { Content } from "antd/es/layout/layout";
import Header from "../Header";
import { INITIAL_ACTIVE_TAB, TABS } from "@/constants/constants";

const App: FC = () => {
  const [activeTab, setActiveTab] = useState(INITIAL_ACTIVE_TAB);

  return (
    <>
      <Layout className={classes.layout}>
        <Header setActiveTab={setActiveTab} tabs={TABS} activeTab={activeTab} />
        <Content className={classes.content}>
          {activeTab === "all" && <CardList />}
        </Content>
      </Layout>
    </>
  );
};

export default App;
