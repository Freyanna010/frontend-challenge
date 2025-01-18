import Card from "../Card/Card";
import { FC, useEffect } from "react";
import { Flex, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchCatsData } from "@/features/catsThunks";
import { toggleFavorite } from "@/features/catsSlice";

const CardList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cats, isLoading, favoriteIds } = useSelector(
    (state: RootState) => state.catsSlice
  );

  useEffect(() => {
    dispatch(fetchCatsData());
  }, []); 

const likeHandler = (id: string) => {
  dispatch(toggleFavorite(id))
}

console.log(favoriteIds);

  if (isLoading) {
    return (
      <Spin
        indicator={
          <LoadingOutlined spin style={{ fontSize: 60, borderRadius: "50%" }} />
        }
      />
    );
  }  
  return (
    <Flex wrap gap={48} justify="space-between" style={{ width: "1317px" }}>
      {cats.map((cat) => (
        <Card img={cat.url} key={cat.id} isLiked={favoriteIds.includes(cat.id)} onLike={() => likeHandler(cat.id)}/>
      ))}
    </Flex>
  );
};
export default CardList;
