import Card from "../Card/Card";
import { FC, useEffect } from "react";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { LoadingOutlined } from "@ant-design/icons";
import classes from "./CardList.module.scss";
import { fetchCatsData, toggleFavorite } from "@/features";
import FlexContainer from "../ui/Button/FlexContainer/FlexContainer";

const CardList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cats, isLoading, favoriteIds } = useSelector(
    (state: RootState) => state.catsSlice,
  );

  useEffect(() => {
    dispatch(fetchCatsData());
  }, []);

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
    <FlexContainer>
      {cats.map(({ id, url }) => (
        <div key={id} className="catCard">
          <Card
            img={url}
            isLiked={favoriteIds.includes(id)}
            onLike={() => likeHandler(id)}
          />
        </div>
      ))}
    </FlexContainer>
  );
};
export default CardList;
