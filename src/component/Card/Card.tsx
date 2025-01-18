import { Card } from "antd";
import classes from "./Card.module.scss";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import heartFilled from "@assets/heartFilled.png";
import heartOutlined from "@assets/heartOutlined.png";
import CustomButton from "../ui/CustomButton";

type Props = {
  id: string;
  img: string;
};

const CatCard: FC<Props> = ({ id, img }) => {
  // TODO: вынести
  const isCatsLoading = useSelector(
    (state: RootState) => state.catsSlice.isCatsLoading
  );

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (id: string) => {
    setIsLiked(!isLiked);
    console.log(`Liked ${id}`);
  };

  return (
    <Card className={classes.catCard} loading={isCatsLoading}>
      <img alt="🐱" src={img} />
      <CustomButton variant="icon" className={classes.likeButton} onClick={() => handleLike(id)}>
      <img
          className={classes.heartIcon}
          src={isLiked ? heartFilled : heartOutlined}
        />
      </CustomButton>
    </Card>
  );
};

export default CatCard;
