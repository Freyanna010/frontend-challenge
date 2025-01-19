import { FC, useEffect } from "react";
import Card from "../Card/Card";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { LoadingOutlined } from "@ant-design/icons";
import classes from "./CardList.module.scss";
import { fetchCatsData, toggleFavorite } from "@/features";
import FlexContainer from "../ui/FlexContainer/FlexContainer";

const CardList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cats, isLoading, favoriteIds } = useSelector(
    (state: RootState) => state.catsSlice
  );

  useEffect(() => {
    dispatch(fetchCatsData());
  }, []);

  //TODO: activeTab === "all"  showCats = cats  иначе - catsFavorite


  const likeHandler = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  if (isLoading) {
    return (
      <Spin
        size="large"
        className={classes.spin}
        indicator={<LoadingOutlined spin />}
      />
    );
  }
  return (
    //TODO: перенести стили в лист
    <FlexContainer>
      {/*TODO: вынести в компонент */}
      {cats.map(({ id, url }) => (
        <Card
          img={url}
          isLiked={favoriteIds.includes(id)}
          onLike={() => likeHandler(id)}
        />
      ))}
    </FlexContainer>
  );
};
export default CardList;
