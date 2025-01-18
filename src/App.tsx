import { FC, useEffect } from "react";
// TODO: создать  модули
import "./App.scss";
import { AppDispatch, RootState } from "./store/store";
import { fetchCatsData } from "./features/catsThunks";
import { useDispatch, useSelector } from "react-redux";
import CatCardsList from "./component/CardList/CardList";
import Layout, { Content, Header } from "antd/es/layout/layout";
import CustomButton from "./component/ui/CustomButton";
import Spin from "antd/es/spin";
import { LoadingOutlined } from "@ant-design/icons";

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cats, isCatsLoading } = useSelector(
    (state: RootState) => state.catsSlice
  );

  useEffect(() => {
    console.log("Dispatch из useEffect в app");
    dispatch(fetchCatsData());
  }, []);

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
          {isCatsLoading ? (
            //TODO: вынести
            <Spin className="spinner"
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 60,
                    borderRadius: "50%",
                  }}
                  spin
                />
              }
            />
          ) : (
            <CatCardsList cats={cats} />
          )}
        </Content>
      </Layout>
    </>
  );
};

export default App;
