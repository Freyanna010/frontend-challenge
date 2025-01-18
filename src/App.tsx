import { FC, useEffect } from "react";
// TODO: создать  модули
import "./App.scss";
import CardList from "./component/CardList/CardList";
import Layout, { Content } from "antd/es/layout/layout";
import Header from "./component/Header";

const App: FC = () => {
  return (
    <>
      <Layout className="layout">
        <Header />
        <Content className="content">
          <CardList />
        </Content>
      </Layout>
    </>
  );
};

export default App;
