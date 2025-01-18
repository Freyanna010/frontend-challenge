import { FC, useEffect } from "react";
// TODO: создать  модули
import "./App.scss";
import CardList from "./component/CardList/CardList";
import Layout, { Content, Header } from "antd/es/layout/layout";
import CustomButton from "./component/ui/CustomButton";

const App: FC = () => {
  return (
    <>
      <Layout className="layout">
        <Header className="header">
          <CustomButton variant="text" isActive={true}>
            Все котики
          </CustomButton>
          <CustomButton variant="text" isActive={false}>
            Любимые котики
          </CustomButton>
        </Header>
        <Content className="content">
          <CardList />
        </Content>
      </Layout>
    </>
  );
};

export default App;
