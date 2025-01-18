import { FC, useState } from "react";
// TODO: создать  модули
import "./App.scss";
import CardList from "./component/CardList/CardList";
import Layout, { Content } from "antd/es/layout/layout";
import Header from "./component/Header";

export type Tab = {
  value: string;
  title: string;
}


const TABS: Tab[] = [
  { title: 'Все котики', value: 'all' },
  { title: 'Любимые котики', value: 'favorite' },
];

const INITIAL_ACTIVE_TAB = 'all';

const App: FC = () => {

const [activeTab, setActiveTab] = useState(INITIAL_ACTIVE_TAB)

  return (
    <>
      <Layout className="layout">
        <Header setActiveTab={setActiveTab} tabs={TABS} activeTab={activeTab}  />
        <Content className="content">
         {activeTab==="all" && <CardList /> } 
        </Content>
      </Layout>
    </>
  );
};

export default App;
