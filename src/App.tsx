import { useEffect } from "react";
import "./App.scss";
import { AppDispatch, RootState } from "./store/store";
import { fetchCatsData } from "./features/catsThunks";
import { useDispatch, useSelector } from "react-redux";
import CatCardsList from "./component/CatCardsList/CatCardsList";
import Layout, { Content, Header } from "antd/es/layout/layout";
import CustomButton from "./component/ui/CustomButton";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { cats } = useSelector((state: RootState) => state.catsSlice);

  useEffect(() => {
    // TODO: убрать
    console.log("Dispatch из useEffect в app");
    dispatch(fetchCatsData(50));
  }, []);

  // TODO:убрать
  useEffect(() => {
    console.log("useEffect получил котиков в app", cats);
  }, [cats]);

  return (
    <>
      <Layout className="layout">
        <Header className="header">
          <CustomButton variant={"text"} isActive={true}>
            Все котики
          </CustomButton>
          <CustomButton variant={"text"} isActive={false}>
            Любимые котики
          </CustomButton>
        </Header>
        <Content className="content">
          <CatCardsList cats={cats} />
        </Content>
      </Layout>
    </>
  );
}

export default App;
