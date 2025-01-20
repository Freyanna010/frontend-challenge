import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { CardListProps } from "./CardList.type";
import Card from "../Card/Card";
import FlexContainer from "../ui/FlexContainer/FlexContainer";
import classes from "./CardList.module.scss";

import { fetchCatsData, toggleFavorite } from "@/features";
import { AppDispatch, RootState } from "@/store";

const CardList: FC<CardListProps> = ({ activeTab }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cats, isLoading, favoriteIds, favoriteCats } = useSelector(
    (state: RootState) => state.catsSlice,
  );

  useEffect(() => {
    dispatch(fetchCatsData());
    console.log("test1 log");
    
  }, [dispatch]);

  const likeHandler = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  const showCats = activeTab === "all" ? cats : favoriteCats;
  console.log("test2 log");

  if (isLoading) {
    return (
      <Spin
        className={classes.spin}
        indicator={<LoadingOutlined spin />}
        size="large"
      />
    );
  }
  return (
    <FlexContainer>
      {showCats.map(({ id, url }) => (
        <Card
          img={url}
          isLiked={favoriteIds.includes(id)}
          key={id}
          onLike={() => likeHandler(id)}
        />
      ))}
    </FlexContainer>
  );
};
export default CardList;
