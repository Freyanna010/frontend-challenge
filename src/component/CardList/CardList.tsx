import { FC, useEffect } from "react";
import Card from "../Card/Card";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { LoadingOutlined } from "@ant-design/icons";
import classes from "./CardList.module.scss";
import { fetchCatsData, toggleFavorite } from "@/features";
import FlexContainer from "../ui/FlexContainer/FlexContainer";

type CardListProps = {
  activeTab: string;
};

const CardList: FC<CardListProps> = ({ activeTab }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cats, isLoading, favoriteIds, favoriteCats } = useSelector(
    (state: RootState) => state.catsSlice
  );

  useEffect(() => {
    dispatch(fetchCatsData());
  }, []);

  const likeHandler = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  const showCats = activeTab === "all" ? cats : favoriteCats;

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
    <FlexContainer>
      {showCats.map(({ id, url }) => (
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
