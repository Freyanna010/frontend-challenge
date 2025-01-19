import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import Card from "../Card/Card";
import FlexContainer from "../ui/FlexContainer/FlexContainer";
import classes from "./CardList.module.scss";

import { fetchCatsData, toggleFavorite } from "@/features";
import { AppDispatch, RootState } from "@/store/store";

type CardListProps = {
  activeTab: string;
};

const CardList: FC<CardListProps> = ({ activeTab }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cats, isLoading, favoriteIds, favoriteCats } = useSelector(
    (state: RootState) => state.catsSlice,
  );

  useEffect(() => {
    dispatch(fetchCatsData());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const likeHandler = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  const showCats = activeTab === "all" ? cats : favoriteCats;

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
