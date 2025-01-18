import Card from "../Card/Card";
import { FC, useEffect } from "react";
import { Flex, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchCatsData } from "@/features/catsThunks";
import { toggleFavorite } from "@/features/catsSlice";
import classes from  "./CardList.module.scss"

const CardList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cats, isLoading, favoriteIds } = useSelector(
    (state: RootState) => state.catsSlice
  );

  useEffect(() => {
    dispatch(fetchCatsData());
  }, []);

  const likeHandler = (id: string) => {
    dispatch(toggleFavorite(id));
  };

  if (isLoading) {
    return (
      <Spin size="large" className={classes.spin}
        indicator={
          <LoadingOutlined spin  />
        }
      />
    );
  }
  return (
    // TODO: адаптив
    <Flex wrap gap={48} justify="space-between" style={{ width: "1317px" }}>
      {cats.map(({ id, url }) => (
        <Card
          img={url}
          key={id}
          isLiked={favoriteIds.includes(id)}
          onLike={() => likeHandler(id)}
        />
      ))}
    </Flex>
  );
};
export default CardList;
